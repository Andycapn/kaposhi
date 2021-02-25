import React from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import New from "../images/new-product.svg"
import { faAirbnb } from "@fortawesome/free-brands-svg-icons"

const ProductCard = ({ product }) => {
  // Truncate description Text
  const truncate = str => {
    return str.length > 20 ? str.substring(0, 78) + "..." : str
  }

  return (
    <div
      className="card"
      css={css`
        width: 310px;
        & * {
          font-family: "Prompt", sans-serif;
        }
        & > .image-container {
          position: relative;
          & > .product-image {
            height: 60%;
            width: 100%;
            object-fit: cover;
          }
          & > .tag {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            background-color: yellow;
            padding: 0.1rem 0.5rem;
            p {
              font-size: 12px;
              margin: 0;
              padding: 0;
            }
          }
        }

        & > .content-container {
          padding: 0 10px;
          & > .product-type {
            color: lightslategray;
            font-size: 13px;
            margin-bottom: 0;
          }
          & > .title {
            margin-bottom: 10px;
          }
          & > .price {
            margin-bottom: 0;
          }
        }
      `}
    >
      <div className="image-container">
        <img
          className="product-image"
          src={product.images[0].localFile.childImageSharp.fixed.srcWebp}
          alt={product.title}
        />
        <div className="tag">
          <p>
            <span>
              <FontAwesomeIcon
                icon={
                  product.tags[0] === "Popular"
                    ? faFire
                    : product.tags[0] === "New Releases"
                    ? faAirbnb
                    : null
                }
                style={{ margin: "0 5px" }}
              />
              {product.tags[0]}
            </span>
          </p>
        </div>
      </div>

      <div className="content-container">
        <p className="product-type">{product.productType}</p>
        <h5 className="title">{product.title}</h5>
        <h5 className="price">
          {product.priceRange.maxVariantPrice.currencyCode}{" "}
          {product.priceRange.maxVariantPrice.amount}
        </h5>
      </div>
    </div>
  )
}

export default ProductCard
