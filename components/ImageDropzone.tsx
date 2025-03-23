import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ImageIcon, AlertCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageDropzoneProps {
  onImageUpload: (file: File) => void
  maxSize?: number
  maxWidth?: number
  maxHeight?: number
}

export function ImageDropzone({
  onImageUpload,
  maxSize = 10 * 1024 * 1024, // 10MB
  maxWidth = 4096,
  maxHeight = 4096,
}: ImageDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setIsLoading(true)
      setError(null)

      if (acceptedFiles.length === 0) {
        setError('No file selected')
        return
      }

      const file = acceptedFiles[0]

      // Проверка типа файла
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file')
        return
      }

      // Проверка размера файла
      if (file.size > maxSize) {
        setError(`File size should be less than ${maxSize / (1024 * 1024)}MB`)
        return
      }

      // Проверка размеров изображения
      const dimensions = await new Promise<{ width: number; height: number }>((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          resolve({
            width: img.width,
            height: img.height,
          })
        }
        img.onerror = () => reject(new Error('Failed to load image'))
        img.src = URL.createObjectURL(file)
      })

      if (dimensions.width > maxWidth || dimensions.height > maxHeight) {
        setError(`Image dimensions should be less than ${maxWidth}x${maxHeight}px`)
        return
      }

      onImageUpload(file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image')
    } finally {
      setIsLoading(false)
    }
  }, [maxSize, maxWidth, maxHeight, onImageUpload])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxFiles: 1,
    multiple: false,
  })

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={cn(
          'relative flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
          isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' : 'border-gray-300 dark:border-gray-700',
          'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20'
        )}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mb-4 text-gray-400" />
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {isDragActive ? 'Drop the image here' : 'Drag & drop an image here, or click to select'}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Supports PNG, JPG, WebP (max {maxSize / (1024 * 1024)}MB)
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 mt-2 text-sm text-red-500">
          <X className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {isLoading && (
        <div className="mt-2 text-sm text-gray-500">
          Processing image...
        </div>
      )}
    </div>
  )
}

export default ImageDropzone 