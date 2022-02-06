/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"
import { RichText } from "prismic-reactjs"
import htmlSerializer from "./htmlSerializer"

import {
  colors,
  moduleContainerStyles,
  typography,
  maxLineMeasure,
  maxTypeWidth,
  onTabletMedia,
} from "../../styles"
import { moduleProps } from "../../util/props"
import { List } from "../List"
import ProjectPhoto from "../ProjectPhoto"
import { ImageSlice } from "./ImageSlice"

import { DebugDataPre } from "../DebugDataPre"

const slugifyRegex = /\s+/g
export const RichContentSlice = ({ primary, items, slice_type }) => {
  const { rich_text } = primary

  return (
    <section
      css={[
        {
          marginBottom: "3rem",
          padding: "0 1rem",

          width: "100%",
          ...maxTypeWidth,

          color: colors.PRIMARY,

          "h1,h2,h3,h4,h5,h6": {
            marginBottom: "0.25rem",
          },
          "p, ul, ol": {
            marginBottom: "1rem",
          },
        },
        onTabletMedia({
          padding: 0,
        }),
      ]}
    >
      <RichText render={rich_text.richText} htmlSerializer={htmlSerializer} />
    </section>
  )
}
