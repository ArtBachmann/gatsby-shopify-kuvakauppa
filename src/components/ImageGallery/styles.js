import styled from 'styled-components'

export const ImageGalleryWrapper = styled.section`
  >div:first-child {
    border: 5px solid #ccc;
  }

  >div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-column: 1fr 1fr;
    grid-gap: 5px;

    /* tablet view */
    @media(min-width: 768px){
      grid-template-columns: 1fr 1fr 1fr;
    }

    /* desktop view */
    @media(min-width: 1020px) {
       grid-template-columns:1fr 1fr 1fr 1fr;
    }      
  }
` 