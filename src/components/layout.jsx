/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react"
import React from "react"
import PropTypes from "prop-types"

import { typography, colors, RESET } from "../styles"
import { GLOBAL } from "../styles/globalStyles"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={{
          ...RESET,
          ...GLOBAL,
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
