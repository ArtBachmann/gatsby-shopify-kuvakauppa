import React, { useState } from 'react'
import Image from 'gatsby-image'
import { ImageGalleryWrapper } from './styles'
import ImageThumbnail from './ImageThumbnail'
import { useStaticQuery } from 'gatsby'

export function ImageGallery({ images }) {

  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images[0]
  )

  const handleClick = image => {
    setActiveImageThumbnail(image)
  }
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map((image) => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handleClick}
              image={image} />
          )
        })}
      </div>
    </ImageGalleryWrapper>
  )
}


