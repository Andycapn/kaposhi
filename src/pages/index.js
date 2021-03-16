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
import {
  faArrowRight,
  faCompass,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

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
        fluid={[Image().indexBg]}
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
                color: whitesmoke;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 52px;

                text-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "40px",
            }}
          >
            <Img
              style={{ objectFit: "cover", marginTop: "auto" }}
              fluid={Image().ribbon}
              alt=""
              className="ribbon"
            />
          </div>

          <div className="container">
            <h1 className="main-title">Kaposhi Cheese, The Premium Choice.</h1>
            <span className="btn-container">
              <Button
                background={"white"}
                textColor={"black"}
                styles={"margin: 0; text-align: center;"}
              >
                <span>
                  Discover
                  <FontAwesomeIcon
                    style={{ margin: "0 10px" }}
                    icon={faLongArrowAltRight}
                    size={"lg"}
                  />
                </span>
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
        <h3>Our Famous Cheeses</h3>
        <div className="popular-products-row">
          {allShopifyProduct.nodes.map((product, index) => {
            return product.tags.includes("Popular") && index < 8 ? (
              <ProductCard key={index} product={product} />
            ) : null
          })}
        </div>
      </MainDiv>
      {/*<MainDiv*/}
      {/*  css={css`*/}
      {/*    .new-releases-row {*/}
      {/*      display: grid;*/}
      {/*      grid-template-columns: repeat(auto-fill, minmax(309px, 300px));*/}
      {/*      grid-column-gap: 15px;*/}
      {/*      grid-row-gap: 50px;*/}
      {/*      justify-content: center;*/}
      {/*    }*/}
      {/*  `}*/}
      {/*>*/}
      {/*  <h3>New Releases</h3>*/}
      {/*  <div className="new-releases-row">*/}
      {/*    {allShopifyProduct.nodes.map((product, index) => {*/}
      {/*      return product.tags.includes("New Release") && index < 8 ? (*/}
      {/*        <ProductCard key={index} product={product} />*/}
      {/*      ) : null*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</MainDiv>*/}
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
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.5) 65%
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
                  p {
                    font-family: "Prompt", sans-serif;
                    text-transform: capitalize;
                  }
                }
              }
            }
          }
        `}
      >
        <MainDiv className="content">
          <h3>Latest Recipes</h3>
        </MainDiv>
        <div className="container">
          <section>
            <ImageBackground
              className="image-bg"
              tag={"div"}
              fluid={Image().styleOne}
            >
              <a>
                <p>
                  Bring a taste of Greece to your cooking with our fabulous feta
                  recipes. This tangy, salted cheese can be served in salads,
                  traybakes, pies and more.
                </p>
                View Recipe
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
                <p>
                  Halloumi is a non melting cheese that is similar to Queso Para
                  Frier, and in flavor is somewhere in between feta and
                  mozzarella. It is made with a mixture of goat and sheep’s milk
                  and is semi hard and brined. It originates from Cyprus and is
                  very popular in Lebanon
                </p>
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
