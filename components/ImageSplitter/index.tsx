import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Download, RotateCcw } from 'lucide-react'
import { ImageSplitterProps, SplitDirection } from '../../types'
import { LoadingIndicator } from './LoadingIndicator'
import { SplitControls } from './SplitControls'
import { SplitPreview } from './SplitPreview'
import { downloadAllParts, downloadAllAsZip } from '../../utils/image-processing/download'
import debounce from 'lodash/debounce'

const ImageSplitter: React.FC<ImageSplitterProps> = ({ image, onReset }) => {
  const [direction, setDirection] = useState<SplitDirection>('vertical')
  const [parts, setParts] = useState(2)
  const [gridCols, setGridCols] = useState(2)
  const [gridRows, setGridRows] = useState(2)
  const [preview, setPreview] = useState<string>('')
  const [splitPreviews, setSplitPreviews] = useState<string[]>([])
  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0 })
  const [gridPreview, setGridPreview] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const processingIdRef = useRef<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const workerRef = useRef<Worker | null>(null)
  const imageDataRef = useRef<ImageData | null>(null)
  const urlRefs = useRef<Set<string>>(new Set())
  const abortControllerRef = useRef<AbortController | null>(null)

  // Функция для очистки URL
  const revokeUrls = useCallback(() => {
    urlRefs.current.forEach(url => URL.revokeObjectURL(url))
    urlRefs.current.clear()
  }, [])

  // Инициализация Web Worker
  useEffect(() => {
    workerRef.current = new Worker(new URL('../../utils/image-processing/imageWorker.ts', import.meta.url))
    
    workerRef.current.onmessage = (e) => {
      if (e.data.type === 'success') {
        // Проверяем, актуален ли результат
        if (e.data.requestId !== processingIdRef.current) {
          return
        }

        // Очищаем старые URL
        revokeUrls()
        
        // Создаем новые URL для blob данных
        const newSplitPreviews = e.data.result.splitPreviews.map((blob: Blob) => {
          const url = URL.createObjectURL(blob)
          urlRefs.current.add(url)
          return url
        })
        
        const newGridPreview = e.data.result.gridPreview ? URL.createObjectURL(e.data.result.gridPreview) : null
        if (newGridPreview) {
          urlRefs.current.add(newGridPreview)
        }

        setSplitPreviews(newSplitPreviews)
        setGridPreview(newGridPreview)
      } else if (e.data.type === 'error') {
        setError(e.data.error)
      }
      setIsProcessing(false)
    }

    return () => {
      revokeUrls()
      workerRef.current?.terminate()
    }
  }, [revokeUrls])

  // Мемоизированные обработчики событий
  const handleDownloadAll = useCallback(() => {
    downloadAllParts(splitPreviews)
  }, [splitPreviews])

  const handleDownloadZip = useCallback(() => {
    downloadAllAsZip(splitPreviews)
  }, [splitPreviews])

  const handleDownloadPart = useCallback((preview: string, index: number) => {
    const link = document.createElement('a')
    link.href = preview
    link.download = `split_${index + 1}.png`
    link.click()
  }, [])

  // Оптимизированная загрузка изображения
  useEffect(() => {
    if (!image) return

    setIsLoading(true)
    setError(null)
    const img = new Image()
    
    img.onload = () => {
      // Проверяем размер изображения
      if (img.width > 10000 || img.height > 10000) {
        setError('Image is too large. Maximum dimensions are 10000x10000 pixels.')
        setIsLoading(false)
        return
      }

      // Проверяем размер файла (примерно)
      const fileSize = Math.round((image.length - 22) * 3 / 4) // Примерный размер в байтах
      if (fileSize > 10 * 1024 * 1024) { // 10MB
        setError('Image file is too large. Maximum size is 10MB.')
        setIsLoading(false)
        return
      }

      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        setError('Failed to get canvas context')
        setIsLoading(false)
        return
      }
      
      ctx.drawImage(img, 0, 0)
      imageDataRef.current = ctx.getImageData(0, 0, img.width, img.height)
      
      setOriginalSize({ width: img.width, height: img.height })
      setPreview(image)
      setIsLoading(false)
    }
    
    img.onerror = () => {
      setError('Failed to load image. Please try again.')
      setIsLoading(false)
    }
    
    img.src = image
  }, [image])

  // Оптимизированная обработка изображения с debounce
  const debouncedProcessImage = useMemo(
    () =>
      debounce(async (
        imageData: ImageData,
        direction: SplitDirection,
        parts: number,
        gridCols: number,
        gridRows: number,
        width: number,
        height: number
      ) => {
        if (!workerRef.current) return

        // Отменяем предыдущий запрос, если он есть
        if (abortControllerRef.current) {
          abortControllerRef.current.abort()
        }
        abortControllerRef.current = new AbortController()

        const currentId = Date.now().toString()
        processingIdRef.current = currentId
        setIsProcessing(true)
        setError(null)

        try {
          workerRef.current.postMessage({
            imageData,
            direction,
            parts,
            gridCols,
            gridRows,
            width,
            height,
            requestId: currentId
          })
        } catch (error) {
          setError('Failed to process image. Please try again.')
          setIsProcessing(false)
        }
      }, 150),
    []
  )

  useEffect(() => {
    if (!imageDataRef.current || !direction || !parts || !gridCols || !gridRows) return

    debouncedProcessImage(
      imageDataRef.current,
      direction,
      parts,
      gridCols,
      gridRows,
      originalSize.width,
      originalSize.height
    )

    return () => {
      debouncedProcessImage.cancel()
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [direction, parts, gridCols, gridRows, originalSize, debouncedProcessImage])

  // Мемоизированные пропсы для дочерних компонентов
  const splitControlsProps = useMemo(() => ({
    direction,
    parts,
    gridCols,
    gridRows,
    onDirectionChange: setDirection,
    onPartsChange: setParts,
    onGridColsChange: setGridCols,
    onGridRowsChange: setGridRows,
  }), [direction, parts, gridCols, gridRows])

  const splitPreviewProps = useMemo(() => ({
    originalImage: image,
    splitPreviews,
    onDownloadAll: handleDownloadZip,
    onDownloadPart: handleDownloadPart,
    direction,
    parts,
    gridCols,
    gridRows,
    isProcessing,
    originalSize,
  }), [image, splitPreviews, handleDownloadZip, handleDownloadPart, direction, parts, gridCols, gridRows, isProcessing, originalSize])

  return (
    <div className="space-y-8">
      <SplitControls {...splitControlsProps} />

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <button
          onClick={handleDownloadZip}
          className="toggle-button toggle-button-active"
          disabled={splitPreviews.length === 0}
        >
          <Download className="w-5 h-5" />
          Download All as ZIP
        </button>
        <button
          onClick={onReset}
          className="toggle-button toggle-button-inactive"
        >
          <RotateCcw className="w-5 h-5" />
          Start Over
        </button>
      </div>

      <LoadingIndicator 
        isLoading={isLoading} 
        isProcessing={isProcessing}
        error={error}
      />

      <SplitPreview {...splitPreviewProps} />
    </div>
  )
}

export default React.memo(ImageSplitter) 