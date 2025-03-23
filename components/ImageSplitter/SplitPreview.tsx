import React, { useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, SplitSquareHorizontal, SplitSquareVertical, GridIcon } from 'lucide-react'
import { SplitPreviewProps } from '../../types'

const SplitPreviewPart = memo(({ preview, index, onDownloadPart }: { 
  preview: string, 
  index: number, 
  onDownloadPart: (preview: string, index: number) => void 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.15 }}
    className="glass-card p-2"
  >
    <div className="flex items-center gap-3">
      <img
        src={preview}
        alt={`Split part ${index + 1}`}
        className="w-16 h-16 rounded object-cover flex-shrink-0"
        loading="lazy"
        decoding="async"
      />
      <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
        <div className="text-sm font-medium truncate">
          Part {index + 1}
        </div>
        <button
          onClick={() => onDownloadPart(preview, index)}
          className="px-4 py-2.5 rounded bg-primary text-primary-foreground text-sm flex items-center gap-2 flex-shrink-0 hover:bg-primary/90"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>
  </motion.div>
))

SplitPreviewPart.displayName = 'SplitPreviewPart'

export const SplitPreview = memo(({
  originalImage,
  splitPreviews,
  onDownloadAll,
  onDownloadPart,
  direction,
  parts,
  gridCols,
  gridRows,
  originalSize,
}: SplitPreviewProps) => {
  if (!originalImage && splitPreviews.length === 0) return null

  const directionIcon = useMemo(() => {
    switch (direction) {
      case 'horizontal':
        return <SplitSquareVertical className="w-5 h-5" />
      case 'vertical':
        return <SplitSquareHorizontal className="w-5 h-5" />
      case 'grid':
        return <GridIcon className="w-5 h-5" />
      default:
        return null
    }
  }, [direction])

  const paddingTop = useMemo(() => {
    if (!originalSize.width || !originalSize.height) return '100%'
    return `${(originalSize.height / originalSize.width) * 100}%`
  }, [originalSize])

  const splitLines = useMemo(() => {
    if (!originalImage) return null

    if (direction === 'horizontal') {
      return Array.from({ length: parts - 1 }, (_, i) => ({
        top: `${((i + 1) / parts) * 100}%`,
        left: 0,
        width: '100%',
        height: '2px',
      }))
    }

    if (direction === 'vertical') {
      return Array.from({ length: parts - 1 }, (_, i) => ({
        left: `${((i + 1) / parts) * 100}%`,
        top: 0,
        width: '2px',
        height: '100%',
      }))
    }

    if (direction === 'grid') {
      const lines = []
      // Vertical lines
      for (let i = 1; i < gridCols; i++) {
        lines.push({
          left: `${(i / gridCols) * 100}%`,
          top: 0,
          width: '2px',
          height: '100%',
        })
      }
      // Horizontal lines
      for (let i = 1; i < gridRows; i++) {
        lines.push({
          top: `${(i / gridRows) * 100}%`,
          left: 0,
          width: '100%',
          height: '2px',
        })
      }
      return lines
    }

    return null
  }, [direction, parts, gridCols, gridRows, originalImage])

  return (
    <>
      {originalImage && (
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              {directionIcon}
              <h3 className="text-lg font-medium">Split Preview</h3>
            </div>
            {splitPreviews.length > 0 && (
              <button
                onClick={onDownloadAll}
                className="px-3 py-1.5 rounded bg-primary text-primary-foreground text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download All
              </button>
            )}
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[800px]">
              <div className="relative w-full rounded-md overflow-hidden" style={{ paddingTop }}>
                <div className="absolute inset-0">
                  <img 
                    src={originalImage} 
                    alt="Preview with grid" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  {splitLines && splitLines.map((line, index) => (
                    <div
                      key={index}
                      className="absolute bg-white/50"
                      style={line}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {splitPreviews.length > 0 && (
        <motion.div 
          className="flex flex-col gap-2 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence mode="popLayout">
            {splitPreviews.map((preview, index) => (
              <SplitPreviewPart
                key={`${direction}-${parts}-${gridCols}-${gridRows}-${preview}-${index}`}
                preview={preview}
                index={index}
                onDownloadPart={onDownloadPart}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  )
})

SplitPreview.displayName = 'SplitPreview' 