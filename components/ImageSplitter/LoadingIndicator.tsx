import React from 'react'
import { LoadingIndicatorProps } from '../../types'
import { AlertCircle } from 'lucide-react'

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading, isProcessing, error }) => {
  if (!isLoading && !isProcessing && !error) return null

  return (
    <div className="fixed bottom-4 right-4 glass-card p-3 flex items-center gap-2 z-50">
      {error ? (
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">{error}</span>
        </div>
      ) : (
        <>
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" role="status" aria-label="Loading" />
          <span className="text-sm font-medium">
            {isLoading ? 'Loading image...' : 'Processing image...'}
          </span>
        </>
      )}
    </div>
  )
} 