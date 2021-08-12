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
} from "../../styles"
import { moduleProps } from "../../util/props"
import ProjectPhoto from "../ProjectPhoto"
import { FULL_IMAGE, INLINE_IMAGE } from "../../util/sliceTypes"

export const ImageSlice = props => {
  // always : alt, url
  // slices: primary, image_caption, slice_type
  const {
    slice_type,
    type,
    primary, // from slice
    image_caption, // from slice
    url,
    alt,
    dimensions,
  } = props

  const image = primary ? primary.image : { dimensions, url, alt }

  return (
    <figure
      css={[
        {
          width: "100%",
          margin: "2rem 0",
        },
        slice_type === INLINE_IMAGE && maxTypeWidth,
      ]}
    >
      <DebugDataPre>{props}</DebugDataPre>

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
      <figcaption css={{ ...maxTypeWidth }}>{image_caption}</figcaption>
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
