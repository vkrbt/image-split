import { useState } from 'react'
import { ImageDropzone } from './ImageDropzone'
import { SplitOptions } from './SplitOptions'
import { SplitResult } from './SplitResult'

export function SplitPreview() {
  const [image, setImage] = useState<string | null>(null)
  const [splitOptions, setSplitOptions] = useState({
    rows: 2,
    columns: 2,
    gap: 0,
  })

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      if (result) {
        setImage(result as string)
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <ImageDropzone onImageUpload={handleImageUpload} />
      </div>

      {image && (
        <>
          <div className="mb-8">
            <SplitOptions
              value={splitOptions}
              onChange={setSplitOptions}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <SplitResult
              image={image}
              rows={splitOptions.rows}
              columns={splitOptions.columns}
              gap={splitOptions.gap}
            />
          </div>
        </>
      )}
    </div>
  )
} 