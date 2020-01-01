/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
export const StickyScrollContainer = ({ children, ...props }) => {
  return (
    <div css={{ position: "relative" }} {...props}>
      {children}
    </div>
  )
}
