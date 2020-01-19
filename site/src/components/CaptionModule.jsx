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
          backgroundColor: colors.muteGray,
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
            padding: imageFill ? "0" : "1rem",

            backgroundColor: imageFill ? "inital" : "white",
            boxShadow: imageFill
              ? "initial"
              : "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.85)",
          },
          ...onTabletMedia({
            ...flex("row"),
            alignItems: "center",
            alignItems: "flex-start",
            img: {
              width: "50%",
              position: "sticky",
              top: menubarHeight,
              zIndex: 2,
            },
          }),
        }}
      >
        <img src={image.publicURL} alt={imageAlt} />
        <figcaption
          css={{
            position: "sticky",
            top: menubarHeight,

            padding: "2rem",
            alignSelf: "flex-start",

            backgroundColor: colors.muteGray,
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
