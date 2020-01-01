/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
export const InlineLink = ({ to, children, ...props }) => {
  return <a href={to}>{children}</a>
}
