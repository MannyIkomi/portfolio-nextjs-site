/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import {
  flex,
  moduleContainerStyles,
  colors,
  onTabletMedia,
  MENUBAR_HEIGHT,
} from "../styles"
import { moduleProps } from "../util/props"

import ModuleMarkdown from "./ModuleMarkdown"
import StickyScrollContainer from "./StickyScrollContainer"
import { ProjectPhoto } from "./ProjectPhoto"

export const CaptionModule = ({ image, imageAlt, imageFill, text, type }) => {
  const imageProps = image.childImageSharp ? image.childImageSharp.fluid : image // for fallback GIF support

  return (
    <figure
      css={[
        moduleContainerStyles(),
        {
          color: colors.NAVY_BLUE,
          backgroundColor: colors.LIGHT_GRAY,
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
              zIndex: 2,
            },
          }),
        }}
      >
        <ProjectPhoto
          alt={imageAlt}
          // css={
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
            top: 0,

            padding: "2rem",
            alignSelf: "flex-start",

            backgroundColor: colors.LIGHT_GRAY,
          }}
        >
          <ModuleMarkdown>{text}</ModuleMarkdown>
        </figcaption>
      </StickyScrollContainer>
    </figure>
  )
}

CaptionModule.propTypes = moduleProps
