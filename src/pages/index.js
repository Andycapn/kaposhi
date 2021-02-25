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
    <Layout>
      <SEO title="Home" />
      <ImageBackground
        className="main-banner"
        tag={"section"}
        fluid={[
          `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)`,
          Image().indexBg,
        ]}
        css={css`
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
            <h1 className="main-title">Own Your Style.</h1>
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
            return product.tags.includes("Popular") ? (
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
            return product.tags.includes("New Releases") ? (
              <ProductCard key={index} product={product} />
            ) : null
          })}
        </div>
      </MainDiv>
      <MainDiv
        css={css`
          .container {
            margin-bottom: 30px;
            & > section {
              background-color: lightslategray;
              height: 325px;

              margin: 40px auto;
              & > div {
                height: 100%;
                margin-bottom: 10px;
              }
              & > a {
                font-family: "Prompt", sans-serif;
                text-transform: uppercase;
                font-size: 16px;
                text-decoration: underline;
              }
            }
            @media screen and (min-width: 768px) {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(48%, 49%));
              grid-column-gap: 10px;
              & > section {
                margin: 40px 0;
                height: 500px;
              }
            }
          }
        `}
      >
        <h3>Latest Styles</h3>
        <div className="container">
          <section>
            <ImageBackground
              className="image-bg"
              tag={"div"}
              fluid={Image().styleOne}
            />
            <a>
              Shop These Styles <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </section>
          <section>
            <ImageBackground
              className="image-bg"
              tag={"div"}
              fluid={Image().styleTwo}
            />
            <a>
              Shop These Styles <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </section>
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

export default IndexPage
