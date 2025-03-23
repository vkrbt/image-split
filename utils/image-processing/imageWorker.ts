import { SplitDirection } from '../../types'
import { processImageAsync } from './processImageAsync'

let currentRequestId: string | null = null
let currentImageData: ImageData | null = null

self.onmessage = async (e) => {
  const { 
    imageData, 
    direction, 
    parts, 
    gridCols, 
    gridRows, 
    width, 
    height,
    requestId 
  } = e.data

  // Если пришел новый запрос, игнорируем старый
  if (currentRequestId && currentRequestId !== requestId) {
    return
  }
  currentRequestId = requestId

  try {
    // Проверяем валидность входных данных
    if (!imageData || !direction || !parts || !gridCols || !gridRows || !width || !height) {
      throw new Error('Invalid input parameters')
    }

    // Проверяем размеры
    if (width > 10000 || height > 10000) {
      throw new Error('Image dimensions are too large')
    }

    // Проверяем количество частей
    if (parts < 2 || parts > 10) {
      throw new Error('Invalid number of parts')
    }

    // Проверяем размеры сетки
    if (gridCols < 2 || gridCols > 10 || gridRows < 2 || gridRows > 10) {
      throw new Error('Invalid grid dimensions')
    }

    // Очищаем предыдущие данные
    if (currentImageData) {
      currentImageData = null
    }

    // Сохраняем новые данные
    currentImageData = imageData

    const result = await processImageAsync(
      imageData,
      direction,
      parts,
      gridCols,
      gridRows,
      width,
      height
    )

    // Проверяем результат
    if (!result || !result.splitPreviews || result.splitPreviews.length === 0) {
      throw new Error('Failed to process image')
    }

    self.postMessage({ type: 'success', result, requestId })
  } catch (error) {
    if (error instanceof Error) {
      self.postMessage({ type: 'error', error: error.message, requestId })
    } else {
      self.postMessage({ type: 'error', error: 'Unknown error occurred', requestId })
    }
  } finally {
    // Очищаем данные после обработки
    if (currentRequestId === requestId) {
      currentRequestId = null
      currentImageData = null
    }
  }
} 