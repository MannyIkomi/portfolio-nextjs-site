/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import { mixin, moduleContainer, colors } from "../styles"
import { moduleProps } from "../util/props"

import Markdown from "./markdown"

export const CaptionModule = ({ image, imageAlt, text }) => {
  return (
    <figure
      css={[
        moduleContainer,
        {
          hangingPunctuation: "first last", // only supported in Safari :(

          background: colors.muteGray,
          width: "100%",

          img: {
            objectFit: "fill",
            ...mixin.size("100%", "auto"),
          },
          ...mixin.tabletMedia({
            ...mixin.flex("row"),
            alignItems: "center",
            img: {
              ...mixin.size("50%", "50%"),
            },
          }),
        },
      ]}
    >
      <img src={image.publicURL} alt={imageAlt} />
      <figcaption css={{ padding: "2rem" }}>
        <Markdown>{text}</Markdown>
      </figcaption>
    </figure>
  )
}
CaptionModule.propTypes = moduleProps
