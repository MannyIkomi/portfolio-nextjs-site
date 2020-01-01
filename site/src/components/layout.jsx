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
import { typography, colors } from "../styles"
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

  const reset = {
    [`
          html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video`]: {
      margin: "0",
      padding: "0",
      border: "0",
      outline: "0",
      fontSize: "100%",
      verticalAlign: "baseline",
      background: "transparent",
    },

    body: {
      lineHeight: 1,
    },

    [`article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section`]: {
      display: "block",
    },

    nav: {
      ul: {
        listStyle: "none",
      },
    },

    "blockquote, q": {
      quotes: "none",
      "&:before, &:after": {
        content: "",
        content: "none",
      },
    },

    a: {
      margin: 0,
      padding: 0,
      fontSize: "100%",
      verticalAlign: "baseline",
      background: "transparent",
    },
  }

  return (
    <React.Fragment>
      <Global
        styles={{
          ...reset,

          ":root": {
            fontSize: "100%",
            fontFamily: typography.sans,
          },
          a: {
            color: "inherit",
            textDecoration: "inherit",
            "&:hover": {
              color: colors.orange,
            },
          },
          "h1, h2, h3, h4, h5": {
            lineHeight: 1.2,
            // typography.sizeTransition
            fontFamily: typography.serif,
            textTransform: "lowercase",
          },
          "p, span": {
            fontFamily: typography.serif,
            fontSize: "1rem",
            lineHeight: 1.4,
          },
          ul: {
            li: {
              listStyle: "square",
            },
          },
        }}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
