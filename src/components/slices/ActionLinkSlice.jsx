/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import { CODE_TYPE, colors, maxTypeWidth, TOUCH_TARGET } from "../../styles"

import { FULL_IMAGE, INLINE_IMAGE } from "../../util/sliceTypes"
import { DebugDataPre } from "../DebugDataPre"
import { TypesetLink } from "../TypesetLink"

export const ActionLinkSlice = props => {
  const {
    primary, // from slice
    slice_type, // from slice
  } = props

  return (
    <TypesetLink
      to={primary.url.url}
      css={{
        minHeight: TOUCH_TARGET,
        padding: "1rem 1.5rem",
        margin: "1rem 0",

        colors: colors.PRIMARY,
        backgroundColor: colors.COMPLEMENTARY,

        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        letterSpacing: "0.1rem",
        textDecoration: "none",
      }}
    >
      {primary.label}&nbsp;=>
    </TypesetLink>
  )
}
