import { SplitDirection } from '../../types'

export const processImageAsync = async (
  imageData: ImageData,
  direction: SplitDirection,
  parts: number,
  gridCols: number,
  gridRows: number,
  width: number,
  height: number
): Promise<{ splitPreviews: Blob[] }> => {
  const splitPreviews: Blob[] = []

  // Создаем части изображения
  if (direction === 'horizontal') {
    const partHeight = height / parts
    for (let i = 0; i < parts; i++) {
      const y = i * partHeight
      const canvas = new OffscreenCanvas(width, partHeight)
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Failed to get canvas context')
      
      ctx.putImageData(imageData, 0, -y)
      splitPreviews.push(await canvas.convertToBlob())
    }
  } else if (direction === 'vertical') {
    const partWidth = width / parts
    for (let i = 0; i < parts; i++) {
      const x = i * partWidth
      const canvas = new OffscreenCanvas(partWidth, height)
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Failed to get canvas context')
      
      ctx.putImageData(imageData, -x, 0)
      splitPreviews.push(await canvas.convertToBlob())
    }
  } else {
    const partWidth = width / gridCols
    const partHeight = height / gridRows
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const x = col * partWidth
        const y = row * partHeight
        const canvas = new OffscreenCanvas(partWidth, partHeight)
        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('Failed to get canvas context')
        
        ctx.putImageData(imageData, -x, -y)
        splitPreviews.push(await canvas.convertToBlob())
      }
    }
  }

  return { splitPreviews }
} 