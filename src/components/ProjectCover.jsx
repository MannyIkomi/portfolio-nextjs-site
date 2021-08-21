/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/react"

import { OverlayFill } from "./FillOverlay"

import { ProjectPhoto } from "./ProjectPhoto"
import { DebugDataPre } from "../components/DebugDataPre"
import { TokenList } from "./TokenList"
import {
  colors,
  onTabletMedia,
  maxTypeWidth,
  onMedia,
  styleTransition,
  TOUCH_TARGET,
  SANS_TYPE,
  CODE_TYPE,
} from "../styles"

export const ProjectCover = ({ slugs, id, data, ...props }) => {
  const { date, description, title, subtitle, cover_image, tags } = data
  const { alt, url: coverSrc, dimensions } = cover_image

  // Refactor this imageProps operations for the new Prismic API on responsive images
  const coverImage = cover_image.childImageSharp
    ? cover_image.childImageSharp.fluid
    : cover_image // for fallback GIF support

  return (
    <Link
      to={"/" + id}
      title={title.text}
      css={{
        display: "block",
        width: "100%",
      }}
    >
      <figure
        css={{
          width: "100%",
          minWidth: "15rem",
          ...maxTypeWidth,
          cursor: "pointer",
          backgroundColor: "white",
        }}
      >
        <img
          src={coverImage.url}
          alt={coverImage.alt}
          height={coverImage.dimensions.height}
          width={coverImage.dimensions.width}
          css={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />

        <figcaption
          css={{
            padding: "1rem",
            color: colors.LIGHT_GRAY,
            backgroundColor: colors.PRIMARY,
          }}
        >
          <h2
            css={{
              color: colors.COMPLEMENTARY,
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {title.text}
          </h2>
          <h3
            css={{
              ...SANS_TYPE,
              color: colors.LIGHT_GRAY,
              textTransform: "initial",

              fontWeight: 200,
            }}
          >
            {subtitle}
          </h3>

          {tags && tags.length > 0 && (
            <TokenList
              css={{
                li: {
                  backgroundColor: colors.LIGHT_GRAY,
                  color: colors.PRIMARY,
                },
              }}
            >
              {tags.map(({ label }) => label)}
            </TokenList>
          )}
        </figcaption>
      </figure>
    </Link>
  )
}

export default ProjectCover
