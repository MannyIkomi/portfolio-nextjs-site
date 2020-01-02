/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { typesetInteraction, textLink } from "../styles"

export const InlineLink = ({ to, title, children, ...props }) => {
  return (
    <a href={to} title={title} css={[typesetInteraction, textLink]}>
      {children}
    </a>
  )
}
