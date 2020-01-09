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
  serifHeading,
  sansType,
  sansHeading,
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
        "h1,h2,h3,h4": {
          ...sansHeading,

          textTransform: "initial",
        },
        "p, ul, ol": {
          ...sansType,
          marginBottom: "1rem",
        },
        ul: {
          ...ulStyles,
        },
        a: {
          ...textLink,
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
  styles: PropTypes.any,
  preprocessor: PropTypes.func,
}

export default Markdown
