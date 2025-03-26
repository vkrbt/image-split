import JSZip from 'jszip'

export const downloadPart = (dataUrl: string, index: number) => {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = `split_${index + 1}.png`
  link.click()
}

export const downloadAllParts = (splitPreviews: string[]) => {
  splitPreviews.forEach((dataUrl, index) => {
    downloadPart(dataUrl, index)
  })
}

export const downloadAllAsZip = async (splitPreviews: string[]) => {
  const zip = new JSZip()
  
  for (const dataUrl of splitPreviews) {
    // Fetch the image data from the URL
    const response = await fetch(dataUrl)
    const blob = await response.blob()
    
    // Add the blob to the zip file
    zip.file(`split_${splitPreviews.indexOf(dataUrl) + 1}.png`, blob)
  }
  
  const content = await zip.generateAsync({type: 'blob'})
  const link = document.createElement('a')
  link.href = URL.createObjectURL(content)
  link.download = 'split_images.zip'
  link.click()
  URL.revokeObjectURL(link.href)
} 