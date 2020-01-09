/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import { flex, moduleContainer, colors, onTabletMedia } from "../styles"
import { moduleProps } from "../util/props"

import Markdown from "./markdown"

export const CaptionModule = ({ image, imageAlt, text }) => {
  return (
    <figure
      css={[
        moduleContainer(),
        {
          hangingPunctuation: "first last", // only supported in Safari :(

          background: colors.muteGray,
          width: "100%",

          img: {
            objectFit: "fill",
            width: "100%",
            height: "100%",
          },
          ...onTabletMedia({
            ...flex("row"),
            alignItems: "center",
            img: {
              width: "50%",
              height: "50%",
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
