/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"
import { RichText } from "prismic-reactjs"

import { parseRichText } from "../../templates/ProjectTemplate"

const headingStyle = {}
// NOTE: Semantically the page title should be the h1
// NOTE: Notion headings in the page content get mapped down 1 level
// TODO: Add support for Heading toggles?

export const Heading1Block = props => {
  const block = props
  return <h2>{parseRichText(block)}</h2>
}
export const Heading2Block = props => {
  const block = props
  return <h3>{parseRichText(block)}</h3>
}
export const Heading3Block = props => {
  const block = props
  return <h4>{parseRichText(block)}</h4>
}
