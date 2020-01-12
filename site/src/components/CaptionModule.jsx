/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import {
  flex,
  moduleContainer,
  colors,
  onTabletMedia,
  menubarHeight,
} from "../styles"
import { moduleProps } from "../util/props"

import Markdown from "./markdown"
import StickyScrollContainer from "./StickyScrollContainer"

export const CaptionModule = ({ image, imageAlt, imageFill, text }) => {
  return (
    <figure
      css={[
        moduleContainer(),
        {
          color: colors.darkGray,
          background: colors.muteGray,
          width: "100%",
          hangingPunctuation: "first last", // only supported in Safari :(
        },
      ]}
    >
      <StickyScrollContainer
        css={{
          img: {
            objectFit: imageFill ? "cover" : "contain",
            width: "100%",
            height: "100%",
          },
          ...onTabletMedia({
            ...flex("row"),
            alignItems: "center",
            alignItems: "flex-start",
            img: {
              width: "50%",
              // height: "50%",
            },
          }),
        }}
      >
        <img src={image.publicURL} alt={imageAlt} />
        <figcaption
          css={{
            padding: "2rem",
            position: "sticky",
            top: menubarHeight,
            alignSelf: "flex-start",
          }}
        >
          <Markdown
            css={{
              hangingPunctuation: "first last", // only supported in Safari :(
            }}
          >
            {text}
          </Markdown>
        </figcaption>
      </StickyScrollContainer>
    </figure>
  )
}
CaptionModule.propTypes = moduleProps
