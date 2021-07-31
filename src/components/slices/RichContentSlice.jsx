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

const slugifyRegex = /\s+/g

export function switchRichContentToComponent(content) {
  const { text, type, url, dimensions } = content
  switch (type) {
    case "heading2": //slugify the heading text in order to preserve syntax of id
      return <h2 id={text.replace(slugifyRegex, "-")}>{text}</h2>
    case "heading3":
      return <h3>{text}</h3>
    case "heading4":
      return <h4>{text}</h4>
    case "heading5":
      return <h5>{text}</h5>
    case "heading6":
      return <h6>{text}</h6>

    case "paragraph":
      return <p>{text}</p>

    case "list-item": // unordered list <ul>
    case "o-list-item": // unordered list <ul>
      return "How the fuck do I wrap list items inside their semantic elements?"

    case "image":
      return <ImageSlice {...content} />

    default:
      return (
        <div css={{ backgroundColor: "red" }}>
          {text} <br /> MISSING MATCHING TYPE FOR {type}
        </div>
      )
  }
}

export const RichContentSlice = ({ primary, items, slice_type }) => {
  const { rich_text } = primary

  return (
    <section
      aria-labelledby={rich_text[0].text?.replace(slugifyRegex, "-")}
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
      {/* <pre>{JSON.stringify(rich_text, null, 2)}</pre> */}
      {rich_text.map(switchRichContentToComponent)}
    </section>
  )
}
