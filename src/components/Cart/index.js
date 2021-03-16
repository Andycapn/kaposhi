import React, { useContext } from "react"

import StoreContext from "../../Context/storeContext"
import LineItem from "./LineItem"
import { css } from "@emotion/react"
import reduce from "lodash/reduce"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../button"

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const [hasItems] = useQuantity()

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      {hasItems ? (
        <>
          {" "}
          <div
            css={css`
              @media screen and (min-width: 768px) {
                display: grid;
                grid-template-columns: 1fr 0.4fr;
                grid-gap: 4%;
              }

              h2 {
                font-family: "adineue PRO Bold Web", sans-serif;
                font-size: 28px;
              }
            `}
          >
            <div className="container">{lineItems}</div>
            <div
              className="container"
              css={css`
                box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
                padding: 2rem;
              `}
            >
              <h4>Subtotal</h4>
              <p>
                <span>
                  <strong>ZMW </strong>
                  {checkout.subtotalPrice -
                    Math.ceil((13.6 / 100) * checkout.totalPrice) || 0.0}
                </span>
              </p>
              <br />
              <h4>Taxes</h4>
              <p>
                <strong>ZMW </strong>
                {Math.ceil((13.6 / 100) * checkout.totalPrice) || (
                  <div>0.00</div>
                )}
              </p>
              <br />
              <h2>Total</h2>
              <p>
                <strong>ZMW </strong>
                {checkout.totalPrice}
              </p>
              <br />
              <button
                onClick={handleCheckout}
                disabled={checkout.lineItems.length === 0}
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
                  @media screen and (min-width: 768px) {
                    width: 150px;
                    font-size: 16px;
                  }
                `}
              >
                Check out
              </button>
            </div>
          </div>
        </>
      ) : (
        <div
          css={css`
            display: flex;
            justify-content: center;
            font-family: "adineue PRO Bold Web", sans-serif;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
          `}
        >
          Your Cart Is Empty
          <FontAwesomeIcon
            size={"8x"}
            style={{ margin: "20px" }}
            icon={faShoppingBasket}
          />
          <Button
            background={"black"}
            textColor={"white"}
            styles={"margin: 0; text-align: center;"}
            href={"/"}
          >
            Shop Now
          </Button>
        </div>
      )}
    </>
  )
}

export default Cart
