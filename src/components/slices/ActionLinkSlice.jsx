/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import { firaCode, colors, maxTypeWidth, TOUCH_TARGET } from "../../styles"

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
        ...firaCode,
        minHeight: TOUCH_TARGET,
        padding: "1rem 1.5rem",
        margin: "1rem 0",

        color: colors.PRIMARY,
        backgroundColor: colors.COMPLEMENTARY,

        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        textDecoration: "none",
        letterSpacing: "0.1rem",

        "&:hover": {
          color: colors.PRIMARY,
        },
      }}
    >
      {primary.label}
      <span
        css={{
          ...firaCode,
          letterSpacing: 0,
          fontWeight: "inherit",
          textTransform: "inherit",
        }}
      >
        &nbsp;=>
      </span>
    </TypesetLink>
  )
}
