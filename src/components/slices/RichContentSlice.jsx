/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

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

import { RichText } from "prismic-reactjs"
import { htmlSerializer } from "./htmlSerializer"
import { DebugDataPre } from "../DebugDataPre"
// import { linkResolver } from "./example_path_to_linkResolver"

const slugifyRegex = /\s+/g
export const RichContentSlice = ({ primary, items, slice_type }) => {
  const { rich_text } = primary

  return (
    <section
      aria-labelledby={rich_text.text?.replace(slugifyRegex, "-")}
      //the H2 element may not always be the first piece of content in the array
      // we should refactor this to search the array for the first h2 element .text
      css={[
        {
          margin: "1rem 0",
          padding: "0 1rem",

          width: "100%",
          ...maxTypeWidth,

          color: colors.PRIMARY,
        },
        onTabletMedia({
          padding: 0,
        }),
      ]}
    >
      <DebugDataPre>{rich_text}</DebugDataPre>
      <RichText render={rich_text.raw} htmlSerializer={htmlSerializer} />
    </section>
  )
}
