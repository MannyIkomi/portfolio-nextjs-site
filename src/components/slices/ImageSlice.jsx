/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import {
  mixin,
  moduleContainerStyles,
  flex,
  MAX_VIEW_LENGTH,
  MAX_TEXT_LENGTH,
  maxTypeWidth,
  captionText,
  maxContainerWidth,
  onTabletMedia,
} from "../../styles"

import { FULL_IMAGE, INLINE_IMAGE } from "../../util/sliceTypes"
import { DebugDataPre } from "../DebugDataPre"

export const ImageSlice = props => {
  const {
    primary, // from slice
    slice_type, // from slice
    type, // from RichText
    url,
    alt,
    dimensions,
  } = props

  const image = primary ? primary.image : { dimensions, url, alt }
  const imageCaption = primary?.image_caption || primary?.caption || ""

  return (
    <figure
      css={[
        slice_type === INLINE_IMAGE && maxTypeWidth,
        {
          width: "100%",
          margin: "2rem 0",
          padding: !INLINE_IMAGE ? "0 1rem" : 0,
          // ...flex("column"),
        },
        onTabletMedia({ padding: 0 }),
      ]}
    >
      <img
        src={image.url}
        alt={image.alt}
        css={[
          {
            width: "100%",
            height: "auto",
            objectFit: slice_type === FULL_IMAGE ? "cover" : "contain",
          },
          slice_type === FULL_IMAGE && { maxHeight: "66vh" },
        ]}
        width={image?.dimensions?.width}
        height={image?.dimensions?.height}
      />
      <figcaption
        css={{
          ...maxTypeWidth,
          // width: "100%",
          margin: "auto",
        }}
      >
        <span css={captionText}>{imageCaption}</span>
      </figcaption>
    </figure>
  )
}
