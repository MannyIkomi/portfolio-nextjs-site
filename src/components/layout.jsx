/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import { typography, colors, reset, global } from "../styles"
import { useStaticQuery, graphql } from "gatsby"
import { Footer } from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
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
    <>
      <Global
        styles={{
          ...reset,
          ...global,
        }}
      />

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
