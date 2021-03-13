import React, { useContext } from "react"
import { Link } from "gatsby"

import StoreContext from "../../../Context/storeContext"
import { css } from "@emotion/react"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      width="100px"
      style={{ margin: "0" }}
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
    <div
      css={css`
        display: flex;
        align-items: center;
        margin: 40px 0;
        .container {
          width: 100%;
          display: grid;
          grid-template-rows: 0.2fr 0.8fr;
          .details {
            justify-content: space-between;
            p {
              font-family: "Prompt", sans-serif;
              font-size: 13px;
              margin: 0;
            }
          }
          @media screen and (min-width: 768px) {
            .details {
              display: flex;
              p {
                font-size: 16px;
              }
            }
          }
        }
      `}
    >
      {console.log(item)}
      <Link
        to={`/product/${item.variant.product.handle}/`}
        style={{
          height: "100%",
          marginRight: "40px",
          objectFit: "contain",
        }}
      >
        {variantImage}
      </Link>
      <div className="container">
        <div className="details">
          <p>
            {item.title}
            {`  `}
            {item.variant.title === !"Default Title" ? item.variant.title : ""}
          </p>
          <p>{selectedOptions}</p>
          <p>Qty: {item.quantity}</p>
        </div>
        <button
          css={css`
            background-color: black;
            display: block;
            margin: 10px 10px 10px 0;
            height: 40px;
            font-family: "adineue PRO Bold Web", sans-serif;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            color: white;
            border-radius: 4px;
            width: 100px;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
            transition: 100ms ease-out;
            @media screen and (min-width: 768px) {
              width: 150px;
              font-size: 16px;
            }

            &:active {
              background-color: #e0e0e0;
              color: black;
            }
            &:focus {
              outline: none;
            }
          `}
          onClick={handleRemove}
        >
          <span>
            <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faTimes} />{" "}
            Remove
          </span>
        </button>
      </div>
    </div>
  )
}

export default LineItem
