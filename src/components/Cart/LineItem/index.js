import React, { useContext } from "react"
import { Link } from "gatsby"

import StoreContext from "../../../Context/storeContext"
import { Wrapper } from "./styles"
import Button, { Button2 } from "../../button"
import { css } from "@emotion/react"

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = e => {
    e.preventDefault()

    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <Wrapper>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {item.title}
        {`  `}
        {item.variant.title === !"Default Title" ? item.variant.title : ""}
      </p>
      {selectedOptions}
      {item.quantity}
      <button
        css={css`
          background-color: black;
          display: block;
          margin: 10px 10px 10px 0;
          padding: 0.7rem 1rem;
          font-family: "adineue PRO Bold Web", sans-serif;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 12px;
          color: white;
          border-radius: 4px;
          width: 150px;
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
          @media screen and (min-width: 768px) {
            width: 200px;
            font-size: 16px;
          }
        `}
        onClick={handleRemove}
      >
        Remove
      </button>
    </Wrapper>
  )
}

export default LineItem
