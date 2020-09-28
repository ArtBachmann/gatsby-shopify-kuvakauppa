import React from 'react'
import Image from 'gatsby-image'
import { ImageGalleryWrapper } from './styles'

export function ImageGallery({ images }) {
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={images[6].localFile.childImageSharp.fluid} />
      </div>
    </ImageGalleryWrapper>
  )
}


