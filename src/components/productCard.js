import React from "react"
import { css } from "@emotion/react"

const ProductCard = ({
  image,
  title,
  description,
  price,
  productType,
  product,
}) => {
  // Truncate description Text
  const truncate = str => {
    return str.length > 20 ? str.substring(0, 78) + "..." : str
  }

  return (
    <div
      className="card"
      css={css`
        width: 310px;

        & > .product-image {
          height: 60%;
          width: 100%;
          object-fit: cover;
        }

        & > .content-container {
          padding: 0 10px;
          & > .product-type {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
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
      <img className="product-image" src={image} alt={title} />
      <div className="content-container">
        <p className="product-type">{productType}</p>
        <h5 className="title">{product.title}</h5>
        <h5 className="price">
          {price.maxVariantPrice.currencyCode} {price.maxVariantPrice.amount}
        </h5>
        <pre>{JSON.stringify(product)}</pre>
      </div>
    </div>
  )
}

export default ProductCard
