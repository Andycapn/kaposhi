import React from "react"
import { css } from "@emotion/react"

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
        & > .product-image {
          height: 60%;
          width: 100%;
          object-fit: cover;
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
      <img
        className="product-image"
        src={product.images[0].localFile.childImageSharp.fixed.srcWebp}
        alt={product.title}
      />
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
