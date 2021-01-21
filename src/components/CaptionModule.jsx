/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import {
  flex,
  moduleContainer,
  colors,
  onTabletMedia,
  MENUBAR_HEIGHT,
} from "../styles"
import { moduleProps } from "../util/props"

import Markdown from "./markdown"
import StickyScrollContainer from "./StickyScrollContainer"
import { ProjectPhoto } from "./ProjectPhoto"

export const CaptionModule = ({ image, imageAlt, imageFill, text, type }) => {
  const imageProps = image.childImageSharp ? image.childImageSharp.fluid : image // for fallback GIF support

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
            figcaption: {
              width: "50%",
            },
            img: {
              width: "50%",
              position: "sticky",
              top: MENUBAR_HEIGHT,
              zIndex: 2,
            },
          }),
        }}
      >
        <ProjectPhoto
          alt={imageAlt}
          // css={{
          //   objectFit: imageFill ? "cover" : "contain",
          //   width: "100%",
          //   height: "100%",
          //   backgroundColor: "white",
          // }}
          {...imageProps}
        />
        <figcaption
          css={{
            position: "sticky",
            top: MENUBAR_HEIGHT,

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
