import React, { memo } from 'react'
import { Download } from 'lucide-react'
import { SplitDirection } from '../../types'

interface SplitPreviewProps {
  gridPreview: string | null
  splitPreviews: string[]
  onDownloadAll: () => void
  onDownloadPart: (preview: string, index: number) => void
  direction: SplitDirection
  parts: number
  gridCols: number
  gridRows: number
  isProcessing?: boolean
}

const PreviewItem = memo(({ 
  preview, 
  index, 
  onDownload, 
  isProcessing 
}: { 
  preview: string
  index: number
  onDownload: () => void
  isProcessing?: boolean
}) => (
  <div className="relative group">
    <div className={`relative overflow-hidden rounded-lg transition-opacity duration-300 ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
      <img
        src={preview}
        alt={`Split part ${index + 1}`}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <button
          onClick={onDownload}
          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>
    {isProcessing && (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )}
  </div>
))

PreviewItem.displayName = 'PreviewItem'

const SplitPreview: React.FC<SplitPreviewProps> = ({
  gridPreview,
  splitPreviews,
  onDownloadAll,
  onDownloadPart,
  direction,
  parts,
  gridCols,
  gridRows,
  isProcessing = false
}) => {
  const gridStyle = direction === 'grid' 
    ? `grid-cols-${gridCols} grid-rows-${gridRows}`
    : 'grid-cols-1'

  return (
    <div className="space-y-6">
      {gridPreview && (
        <div className="relative">
          <div className={`relative overflow-hidden rounded-lg transition-opacity duration-300 ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src={gridPreview}
              alt="Grid preview"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      )}

      <div className={`grid gap-4 ${gridStyle}`}>
        {splitPreviews.map((preview, index) => (
          <PreviewItem
            key={index}
            preview={preview}
            index={index}
            onDownload={() => onDownloadPart(preview, index)}
            isProcessing={isProcessing}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(SplitPreview) 