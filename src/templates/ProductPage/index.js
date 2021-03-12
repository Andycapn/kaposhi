import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import ProductForm from "../../components/ProductForm"
import Layout from "../../components/layout"
import ImageViewer from "../../components/ImageViewer"
import { MainDiv } from "../../components/MyStyledComponents"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faShippingFast } from "@fortawesome/free-solid-svg-icons"
import { CtaBanner } from "../../components/ctaBanner"

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <Layout>
        <SEO title={product.title} description={product.description} />
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
                a {
                  text-align: center;
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
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
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
              </p>
            </div>
          </div>
        </MainDiv>
        <CtaBanner
          message={"Follow Our Social Media Pages For Exclusive Deals!"}
          link={"#"}
          btnText={`Follow us now`}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
