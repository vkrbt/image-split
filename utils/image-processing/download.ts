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
  
  splitPreviews.forEach((dataUrl, index) => {
    const data = dataUrl.split(',')[1]
    zip.file(`split_${index + 1}.png`, data, {base64: true})
  })
  
  const content = await zip.generateAsync({type: 'blob'})
  const link = document.createElement('a')
  link.href = URL.createObjectURL(content)
  link.download = 'split_images.zip'
  link.click()
  URL.revokeObjectURL(link.href)
} 