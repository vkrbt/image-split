import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ImageIcon, AlertCircle } from 'lucide-react'

interface ImageDropzoneProps {
  onImageUpload: (dataUrl: string) => void
}

const ImageDropzone = ({ onImageUpload }: ImageDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null)
    const file = acceptedFiles[0]
    
    if (!file) {
      setError('No file selected')
      return
    }

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    // Проверяем размер файла (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size exceeds 10MB limit')
      return
    }

    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result
      if (result) {
        const img = new Image()
        img.onload = () => {
          // Проверяем размеры изображения
          if (img.width > 10000 || img.height > 10000) {
            setError('Image dimensions are too large (max 10000x10000)')
            return
          }
          onImageUpload(result as string)
        }
        img.onerror = () => {
          setError('Failed to load image')
        }
        img.src = result as string
      }
    }
    reader.onerror = () => {
      setError('Failed to read file')
    }
    reader.readAsDataURL(file)
  }, [onImageUpload])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    },
    multiple: false,
    noClick: true
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    open()
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        {...getRootProps()}
        onClick={handleClick}
        className="p-8 rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer border border-border/50 bg-background/50 backdrop-blur-sm"
      >
        <input {...getInputProps()} aria-label="File input" />
        
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[rgb(var(--secondary)_/_0.5)] flex items-center justify-center shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={isDragActive ? 'drag' : 'normal'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {isDragActive ? (
                  <ImageIcon className="w-10 h-10 text-primary" />
                ) : (
                  <Upload className="w-10 h-10 text-primary" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            {isDragActive ? 'Drop the image here' : 'Drop image here or click to upload'}
          </h2>
          <p className="text-sm md:text-base text-[rgb(var(--foreground-dimmed))]">
            Supports PNG, JPG, WebP, GIF • Max 10MB
          </p>
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-destructive"
            >
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground text-lg font-medium flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
      >
        <Upload className="w-6 h-6" />
        Select file
      </button>
    </div>
  )
}

export default ImageDropzone 