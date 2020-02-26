/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { colors, onTabletMedia, onMediaWidth } from "../styles"

export const ProjectTagHeading = ({ children, ...restProps }) => {
  return (
    <h1
      css={[
        { textAlign: "right", marginBottom: "1rem", color: colors.orange },
        onMediaWidth("500px", { textAlign: "center" }),
      ]}
      {...restProps}
    >
      {children}
    </h1>
  )
}
