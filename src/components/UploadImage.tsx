'use client'
import { UploadButton } from '@/utils/uploadthing'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Upload } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

interface UploadResponse {
  ufsUrl: string
  name: string
  key: string
}

export default function UploadImage(props: {
  setImageUrl: (url: string) => void
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState<boolean>(false)
  const [imageError, setImageError] = useState<boolean>(false)
  const [showImage, setShowImage] = useState<boolean>(false)
  const [showChangeButton, setShowChangeButton] = useState<boolean>(false)

  useEffect(() => {
    if (imageUrl) {
      props.setImageUrl(imageUrl)
    }
  }, [imageUrl])
  
  const handleImageLoad = () => {
    setImageLoading(false)
    setShowImage(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const deleteImage = async (fileUrl: string) => {
    try {
      const response = await fetch('/api/uploadthing', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: fileUrl }),
      })

      if (!response.ok) {
        setImageError(true)
        const errorData = await response.json()
        console.error(
          'Failed to delete image:',
          errorData.error || 'Unknown error'
        )
        throw new Error(errorData.error || 'Failed to delete image')
      }

      console.log('Image deleted successfully')
      setShowChangeButton(false)
      setShowImage(false)
      setImageLoading(true)
      setImageUrl(null)
    } catch (error) {
      console.error('Error deleting image:', error)
    }
  }

  return (
    <div className="mb-6">
      <label className="block text-purple-800 font-medium mb-2">Upload image</label>
      <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-6 text-center">
      {imageError && (
        <p className="text-error-default ml-2">
          Error: image cannot be loaded.
        </p>
      )}

      {showImage ? (
        <div className="mb-4">
          {imageLoading ? (
            <div className="flex flex-col space-y-4 justify-center items-center border-gray-100 rounded-xl w-full h-[400px]">
              <p>Loading...</p>
            </div>
          ) : (
            <Image
              alt="Uploaded Image"
              src={imageUrl || ''}
              layout="fill"
              objectFit="cover"
              className={`rounded-xl transition duration-500 ease-out ${imageLoading ? 'blur-md' : 'blur-0'}`}
              onError={handleImageError}
              onLoadingComplete={handleImageLoad}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col space-y-4 justify-center items-center border-gray-100 rounded-xl w-full h-[400px]">
          <div className="flex flex-col items-center justify-center py-6">
                        <Upload className="w-12 h-12 text-purple-600 mb-2" />
                        <p className="text-purple-700 mb-1">Upload a panoramic X-ray image</p>
                        <p className="text-purple-500 text-sm">(max 5MB)</p>
              </div>

          <UploadButton
          
            
            appearance={{
              button:
                "mt-4 inline-block px-6 py-2 bg-purple-200 hover:bg-purple-300 !text-purple-800 rounded-md cursor-pointer transition  flex items-center justify-center text-center",  // Use rounded-md here
              container: "w-max flex-row rounded-md border-cyan-300 items-center justify-center",
              allowedContent:
                "flex h-8 flex-col items-center justify-center px-2 text-black",
             
            }}

            // content={{
            //   button({ ready }) {
            //     if (ready) return <div>Upload stuff</div>;
            //     return "Getting ready...";
            //   },
            //   allowedContent({ ready, fileTypes, isUploading }) {
            //     if (!ready) return "Checking what you allow";
            //     if (isUploading) return "Seems like stuff is uploading";
            //     return `Stuff you can upload: ${fileTypes.join(", ")}`;
            //   },
            // }}

            

            endpoint="imageUploader"
            onClientUploadComplete={(res: UploadResponse[]) => {
              // Update the image URL state when the upload completes
              console.log('Files: ', res)
              setImageUrl(res[0].ufsUrl)
              setShowImage(true)
              setImageLoading(false)
              setShowChangeButton(true)
              //alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              setImageError(true)
              alert(`ERROR! ${error.message}`)
            }}
          />
        </div>
      )}

      {showChangeButton && (
        <Button variant="default" onClick={() => deleteImage(imageUrl || '')}>
          Change Image
        </Button>
      )}
      
      </div>
    </div>
  )
}
