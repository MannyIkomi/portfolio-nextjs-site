/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import { colors } from "../styles"

const fillYellow = override =>
  css({
    backgroundColor: "rgba(255,212,74,0.9)",
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
  <div css={[positionOverlay()]} {...restProps}>
    {children}
  </div>
)

export const OverlayFill = ({ children, ...restProps }) => (
  <div css={[positionOverlay(), fillYellow()]} {...restProps}>
    {children}
  </div>
)
