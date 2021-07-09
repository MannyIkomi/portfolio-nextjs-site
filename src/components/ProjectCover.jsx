/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"

import { OverlayFill } from "./FillOverlay"

import { ProjectPhoto } from "./ProjectPhoto"
import { TokenList } from "./TokenList"
import {
  colors,
  onTabletMedia,
  maxReadingWidth,
  onMedia,
  styleTransition,
  TOUCH_TARGET,
  SANS_TYPE,
  CODE_TYPE,
} from "../styles"

export const ProjectCover = ({ slugs, data, ...props }) => {
  const { date, description, title, subtitle, cover_image, tags } = data
  const { alt, url: coverSrc } = cover_image

  // Refactor this imageProps operations for the new Prismic API on responsive images
  const imageProps = cover_image.childImageSharp
    ? cover_image.childImageSharp.fluid
    : cover_image // for fallback GIF support

  return (
    <Link
      to={"/" + slugs}
      title={title[0].text}
      css={{
        display: "block",
        marginBottom: TOUCH_TARGET,
        ...onTabletMedia({
          margin: "1rem",
        }),
      }}
      {...props}
    >
      <figure
        className={"project-cover"}
        css={{
          // ...aspectRatioLetter,
          position: "relative",
          overflow: "hidden", // clips aspect ratio overflow

          width: "100%",
          minWidth: "15rem",
          ...maxReadingWidth,
          cursor: "pointer",
          backgroundColor: "white",

          // boxShadow: PROJECT_SHADOW,

          ...onMedia("hover: none", {
            // user agent does not have :hover (touch devices)
            ".willHide.overlayFill": {
              opacity: 0,
            },
            ".willHide": {
              opacity: 0,
            },
          }),

          ...onMedia("hover: hover", {
            ...styleTransition(),
            ".willHide, img": {
              ...styleTransition(),
            },

            ".willHide": {
              opacity: 0,
            },

            "&:hover, &:focus": {
              zIndex: 2,
              transform: "scale(1.05)",
              transformOrigin: "center",

              img: {
                filter: "blur(3px)", // matte finish
              },
              ".willHide": {
                opacity: 1,
              },
            },
          }),
        }}
      >
        <ProjectPhoto className={"photo"} alt={alt} {...imageProps} />
        <OverlayFill className={"willHide overlayFill"} />

        <figcaption
          className={"willHide"}
          css={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "1rem",

            color: colors.PRIMARY,
          }}
        >
          <h3
            css={{
              ...CODE_TYPE,
              fontSize: "1.33rem",
              fontWeight: 800,
              lineHeight: 1.2,
              textTransform: "initial",
            }}
          >
            {title[0].text} =>
          </h3>
          <h4
            css={{
              ...SANS_TYPE,
              color: colors.ACCENT,
              fontSize: "1.66rem",
              ...onTabletMedia({
                fontSize: "2rem",
                lineHeight: 1.2,
              }),
              textTransform: "initial",
              fontStyle: "italic",
              fontWeight: 200,
            }}
          >
            {subtitle}
          </h4>

          {tags && tags.length > 0 && (
            <TokenList>{tags.map(({ label }) => label)}</TokenList>
          )}
        </figcaption>
      </figure>
    </Link>
  )
}

export default ProjectCover
