/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { colors } from "../styles"

export const ProjectTagHeading = ({ children, ...restProps }) => {
  return (
    <h1
      css={{ textAlign: "center", marginBottom: "1rem", color: colors.orange }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
