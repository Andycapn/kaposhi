import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductCard from "../components/productCard"
import { ImageBackground, MainDiv } from "../components/MyStyledComponents"
import { css } from "@emotion/react"
import Button from "../components/button"
import { CtaBanner } from "../components/ctaBanner"
import Image from "../components/image"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndexPage = () => {
  const { allShopifyProduct } = useStaticQuery(graphql`
    query {
      allShopifyProduct(filter: { availableForSale: { eq: true } }) {
        nodes {
          title
          tags
          productType
          handle
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          description
          images {
            localFile {
              childImageSharp {
                fixed(
                  width: 310
                  height: 310
                  fit: COVER
                  cropFocus: CENTER
                  quality: 90
                ) {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout dark={true}>
      <SEO title="Home" />
      <ImageBackground
        className="main-banner"
        tag={"section"}
        fluid={[
          `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)`,
          Image().indexBg,
        ]}
        css={css`
          margin-top: -7vh;
          .content {
            width: 100%;
            height: 106vh;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
            grid-template-rows: 1fr 1fr;
            box-sizing: border-box;
            overflow: hidden;
            & > .container {
              grid-row: 2/3;
              width: 100%;
              & > .main-title {
                font-family: "adineue PRO Bold Web", sans-serif;
                color: white;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 52px;
              }
            }
            @media screen and (min-width: 768px) {
              & > .container > .main-title {
                font-size: 42px;
              }
            }
          }
        `}
      >
        <MainDiv className="content">
          <div className="container">
            <h1 className="main-title">Faith. Believe. Achieve.</h1>
            <span className="btn-container">
              <Button background={"white"} textColor={"black"}>
                Shop Men's
              </Button>
              <Button background={"white"} textColor={"black"}>
                Shop Women's
              </Button>
            </span>
          </div>
        </MainDiv>
      </ImageBackground>
      <MainDiv
        css={css`
          .popular-products-row {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(309px, 300px));
            grid-column-gap: 15px;
            grid-row-gap: 50px;
            justify-content: center;
          }
        `}
      >
        <h3>Popular Items</h3>
        <div className="popular-products-row">
          {allShopifyProduct.nodes.map((product, index) => {
            return product.tags.includes("Popular") && index < 8 ? (
              <ProductCard key={index} product={product} />
            ) : null
          })}
        </div>
      </MainDiv>
      <MainDiv
        css={css`
          .new-releases-row {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(309px, 300px));
            grid-column-gap: 15px;
            grid-row-gap: 50px;
            justify-content: center;
          }
        `}
      >
        <h3>New Releases</h3>
        <div className="new-releases-row">
          {allShopifyProduct.nodes.map((product, index) => {
            return product.tags.includes("New Release") && index < 8 ? (
              <ProductCard key={index} product={product} />
            ) : null
          })}
        </div>
      </MainDiv>
      <div
        css={css`
          .content {
            padding-bottom: 0;
          }
          .container {
            & > section {
              background-color: lightslategray;
              height: 500px;
              & > div {
                height: 100%;
              }
              a {
                font-family: "adineue PRO Bold Web", sans-serif;
                text-transform: uppercase;
                font-size: 18px;
                padding: 10px;
                text-decoration: none;
                color: white;
                position: absolute;
                bottom: 0;
              }

              .icon {
                margin: 0 5px;
              }
            }
            section:hover a {
              opacity: 1;
              background: rgb(0, 0, 0);
              background: linear-gradient(
                29deg,
                rgba(0, 0, 0, 0.6937149859943977) 0%,
                rgba(255, 255, 255, 0) 65%
              );
            }
            @media screen and (min-width: 768px) {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
              & > section {
                margin: 0px 0;
                height: 800px;
                a {
                  opacity: 0;
                  transition: ease-out 100ms;
                }
              }
            }
          }
        `}
      >
        <MainDiv className="content">
          <h3>Latest Styles</h3>
        </MainDiv>
        <div className="container">
          <section>
            <ImageBackground
              className="image-bg"
              tag={"div"}
              fluid={Image().styleOne}
            >
              <a>
                Shop These Styles
                <FontAwesomeIcon className={"icon"} icon={faArrowRight} />
              </a>
            </ImageBackground>
          </section>
          <section>
            <ImageBackground
              className="image-bg"
              tag={"div"}
              fluid={Image().styleTwo}
            >
              <a>
                Shop These Styles
                <FontAwesomeIcon className={"icon"} icon={faArrowRight} />
              </a>
            </ImageBackground>
          </section>
        </div>
      </div>
      <CtaBanner
        message={"Follow Our Social Media Pages For Exclusive Deals!"}
        link={"#"}
        btnText={`Follow us now`}
      />
    </Layout>
  )
}

export default IndexPage
