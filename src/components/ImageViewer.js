import React, { useState } from "react"
import { css } from "@emotion/react"

const ImageViewer = images => {
  const [state, setState] = useState({
    currentImageIndex: 0,
  })

  const handleImageClick = e => {
    const index = e.target.getAttribute("index")
    setState({ currentImageIndex: parseInt(index) })
  }

  return (
    <div
      css={css`
        margin-bottom: 2rem;
        .image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          .main-image {
          }
        }
        .thumbnail-row {
          display: flex;
          .thumbnail-container {
            width: 65px;
            height: 65px;
            margin: 0 5px 5px 5px;
            overflow: hidden;
            .product-thumbnail {
              object-fit: contain;
            }
          }
        }
        @media screen and (min-width: 768px) {
          margin-bottom: unset;
        }
      `}
    >
      <div className="image-container">
        <img
          src={
            images.images[state.currentImageIndex].localFile.childImageSharp
              .fluid.srcWebp
          }
          alt=""
          className="main-image"
        />
      </div>

      {images.images.length !== 1 ? (
        <div className="thumbnail-row">
          {images.images.map((image, index) => {
            return state.currentImageIndex !== index ? (
              <div className="thumbnail-container">
                <img
                  src={image.localFile.childImageSharp.fluid.srcWebp}
                  alt=""
                  className="product-thumbnail"
                  onClick={handleImageClick}
                  index={index}
                />
              </div>
            ) : null
          })}
        </div>
      ) : null}
    </div>
  )
}

export default ImageViewer
