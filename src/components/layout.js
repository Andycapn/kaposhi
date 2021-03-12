/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import ContextProvider from "../provider/ContextProvider"

config.autoAddCss = false

const Layout = ({ children, dark }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProvider>
      <Header
        dark={dark}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div style={{ marginTop: "7vh" }}>{children}</div>
      <Footer />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
