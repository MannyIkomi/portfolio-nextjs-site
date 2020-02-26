/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex } from "../styles"

const fillOrange = override =>
  css({
    backgroundColor: colors.orange,
    opacity: 1,

    ...override,
  })

const positionOverlay = override =>
  css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    ...override,
  })

export const ColorOverprint = ({ children, ...restProps }) => (
  <div css={[positionOverlay(), { mixBlendMode: "multiply" }]} {...restProps}>
    {children}
  </div>
)
export const OrangeOverprint = ({ children, ...restProps }) => (
  <div
    css={[positionOverlay(), fillOrange({ mixBlendMode: "multiply" })]}
    {...restProps}
  >
    {children}
  </div>
)
