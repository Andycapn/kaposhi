import React from "react"
import Layout from "../components/layout"
import { MainDiv } from "../components/MyStyledComponents"
import { css } from "@emotion/react"
import ImageViewer from "../components/ImageViewer"
import { CtaBanner } from "../components/ctaBanner"
import Button from "../components/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faShippingFast } from "@fortawesome/free-solid-svg-icons"

const SinglePost = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <Layout>
      <MainDiv
        css={css`
          .container {
            & > .product-content {
              .price {
                font-size: 22px;
                font-family: "Prompt", sans-serif;
              }
              form {
                font-family: "adineue PRO Bold Web", sans-serif;
                select {
                  padding: 0.5rem 1rem;
                }
              }
            }
            @media screen and (min-width: 768px) {
              display: grid;
              grid-template-columns: 1.5fr 1fr;
              grid-template-rows: 20px auto;
              grid-gap: 2rem;
              grid-auto-flow: column;
              & > .image-column {
                grid-row: 1/3;
                grid-column: 1/2;
              }
              & > .product-title {
                grid-row: 1/2;
                grid-column: 2/3;
                grid-auto-flow: row;
              }
              & > .product-content {
                grid-column: 2/3;
              }
            }
          }
        `}
      >
        <div className="container">
          <h3 className="product-title">{product.title}</h3>
          <div className="image-column">
            <ImageViewer images={product.images} className="image-viewer" />
          </div>
          <div className="product-content">
            <h4 className="price">
              {product.priceRange.maxVariantPrice.currencyCode}{" "}
              {product.priceRange.maxVariantPrice.amount}
            </h4>
            <h4>Description</h4>
            <p className="description">{product.description}</p>
            <form>
              {product.variants.length > 1 ? (
                <>
                  <h4>Sizes</h4>
                  <select name="Size" id="size-select" defaultValue={"default"}>
                    <option value="default" disabled={true}>
                      Select Your Size
                    </option>
                    {product.variants.map((variant, index) => {
                      return (
                        <option value={variant} key={index}>
                          {variant.title}
                        </option>
                      )
                    })}
                  </select>
                </>
              ) : null}
              <Button background={"black"} textColor={"white"}>
                Add to Cart
              </Button>
            </form>
            <p>
              <FontAwesomeIcon
                icon={faShippingFast}
                style={{ marginRight: "10" }}
              />
              Shipped within 3 - 12 working days.
            </p>
            <p>
              <FontAwesomeIcon icon={faLock} style={{ marginRight: "10" }} />
              Secure Payment With Visa/MasterCard, Mobile Money.
            </p>{" "}
          </div>
        </div>
      </MainDiv>
      <CtaBanner
        message={"Follow Our Social Media Pages For Exclusive Deals!"}
        link={"#"}
        btnText={`Follow us now`}
      />
    </Layout>
  )
}

export default SinglePost
