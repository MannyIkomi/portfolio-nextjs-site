/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"

import { css, jsx } from "@emotion/core"
import {
  typography,
  ulStyles,
  typesetTransform,
  linkText,
  styleTransition,
  SANS_TYPE,
} from "../styles"

const showdown = require("showdown")

export const convertMarkdown = (markdown = "", preprocessor) => {
  const converter = new showdown.Converter()

  const html = converter.makeHtml(
    preprocessor ? preprocessor(markdown) : markdown
  )

  return html
}

export const Markdown = ({ children, preprocessor, ...props }) => {
  // const { render, children, styles } = props
  const markdownString = children
  // console.warn("The Markdown component uses dangerouslySetInnerHtml")
  return (
    <div
      css={{
        "h1,h2,h3,h4": {
          ...SANS_TYPE,
          textTransform: "initial",
        },
        "p, ul, ol": {
          ...SANS_TYPE,
          marginBottom: "1rem",
          hangingPunctuation: "first last",
        },
        ul: {
          ...ulStyles,
        },
        a: {
          ...linkText,
          ...styleTransition(),
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
  preprocessor: PropTypes.func,
}

export default Markdown
