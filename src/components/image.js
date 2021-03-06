import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const { indexBg, styleOne, styleTwo, ribbon } = useStaticQuery(graphql`
    query {
      indexBg: file(relativePath: { eq: "IndexBg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      styleOne: file(relativePath: { eq: "recipe1.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      styleTwo: file(relativePath: { eq: "recipe2.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ribbon: file(relativePath: { eq: "ribbon1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    indexBg: indexBg.childImageSharp.fluid,
    styleOne: styleOne.childImageSharp.fluid,
    styleTwo: styleTwo.childImageSharp.fluid,
    ribbon: ribbon.childImageSharp.fluid,
  }
}

export default Image
