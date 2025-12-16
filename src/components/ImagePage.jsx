import { useState, useEffect } from 'react'
import './ImagePage.scss'

const ImagePage = ({ image }) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setImageSrc(null)

    const img = new Image()
    img.src = image
    
    img.onload = () => {
      setImageSrc(image)
      setIsLoading(false)
    }
    
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [image])

  return (
    <div className="image-page">
      {isLoading && (
        <div className="image-page__loader">
          <div className="image-page__spinner"></div>
        </div>
      )}
      {hasError && (
        <div className="image-page__error">
          <p>Failed to load image</p>
        </div>
      )}
      {imageSrc && !hasError && (
        <img 
          src={imageSrc} 
          alt="Presentation page" 
          className="image-page__img"
        />
      )}
    </div>
  )
}

export default ImagePage
