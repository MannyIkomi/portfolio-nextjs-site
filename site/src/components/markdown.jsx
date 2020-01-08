/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"

import { css, jsx } from "@emotion/core"
import {
  typography,
  ulStyles,
  typesetInteraction,
  textLink,
  styleTransition,
} from "../styles"

const showdown = require("showdown")

export const convertMarkdown = (markdown = "", preprocessor) => {
  const converter = new showdown.Converter()

  const html = converter.makeHtml(
    preprocessor ? preprocessor(markdown) : markdown
  )

  return html
}

export const Markdown = ({ children, styles, preprocessor, ...props }) => {
  // const { render, children, styles } = props
  const markdownString = children
  console.warn("The Markdown component uses dangerouslySetInnerHtml")
  return (
    <div
      css={{
        "h1,h2,h3,h4,h5,h6": {
          // whiteSpace: "pre-wrap",
          ...typography.serif,
        },
        "p, ul, a": {
          whiteSpace: "pre-wrap",
          fontFamily: typography.sans,
          // fontSize: "1.25rem",
        },
        ul: {
          ...ulStyles,
          // li: {
          //   whiteSpace: "pre-wrap",
          // },
          // lineHeight: 1.4
        },
        a: {
          // ...typesetInteraction(),
          ...styleTransition(),
          ...textLink,
          display: "inline",
        },
      }}
      {...props}
      dangerouslySetInnerHTML={{
        __html: convertMarkdown(markdownString, preprocessor),
      }}
    />
  )
}
Markdown.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.any,
  preprocessor: PropTypes.func,
}

export default Markdown
