/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex } from "../styles"

const orangeOverlay = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  backgroundColor: colors.orange,
  opacity: 1,
  mixBlendMode: "multiply",
})

const layoutChildren = css({
  width: "100%",
  height: "100%",
  padding: "1rem",

  ...flex("column"),
  justifyContent: "flex-end",

  position: "absolute",
  bottom: 0,
  left: 0,
})

const withMotif = css({
  "::after": {
    content: 'url("../motif-gallery.svg")',
    position: "absolute",
    top: "-1px",
    right: "-1px",
    width: "50%",
    height: "auto",
  },
})

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

export const Motif = () => <></>

export const OrangeOverprint = ({ children, ...restProps }) => (
  <div
    css={[positionOverlay(), fillOrange({ mixBlendMode: "multiply" })]}
    {...restProps}
  >
    {children}
  </div>
)
