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
  flex,
} from "../styles"

export const ProjectCover = ({ slugs, uid, data, ...props }) => {
  const { date, description, title, subtitle, cover_image, tags } = data

  // Refactor this imageProps operations for the new Prismic API on responsive images
  const coverImage = cover_image

  return (
    <Link
      to={"/" + uid}
      title={title.text}
      css={{
        display: "block",
        width: "100%",
      }}
      {...props}
    >
      <div
        css={{
          ...flex(),
          width: "100%",
          minWidth: "15rem",
          ...maxTypeWidth,
          cursor: "pointer",
          backgroundColor: "white",
        }}
      >
        <img
          // src={coverImage.fluid.src}
          srcSet={coverImage.fluid.srcSet}
          // sizes={coverImage.fluid.sizes}
          alt={coverImage.alt}
          height={coverImage.dimensions.height}
          width={coverImage.dimensions.width}
          css={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />

        <div
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
        </div>
      </div>
    </Link>
  )
}

export default ProjectCover
