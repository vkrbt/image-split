export type SplitDirection = 'horizontal' | 'vertical' | 'grid'

export interface ImageSplitterProps {
  image: string
  onReset: () => void
}

export interface SplitControlsProps {
  direction: SplitDirection
  parts: number
  gridCols: number
  gridRows: number
  onDirectionChange: (direction: SplitDirection) => void
  onPartsChange: (value: number) => void
  onGridColsChange: (value: number) => void
  onGridRowsChange: (value: number) => void
}

export interface SplitPreviewProps {
  originalImage: string | null
  splitPreviews: string[]
  onDownloadAll: () => void
  onDownloadPart: (preview: string, index: number) => void
  direction: SplitDirection
  parts: number
  gridCols: number
  gridRows: number
  originalSize: {
    width: number
    height: number
  }
}

export interface LoadingIndicatorProps {
  isLoading: boolean
  isProcessing: boolean
  error: string | null
} 