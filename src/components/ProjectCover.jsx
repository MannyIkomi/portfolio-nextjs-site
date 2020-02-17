import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import { useHoverState } from "../hooks/useHoverState"
import { OrangeOverprint, Motif } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
import {
  aspectRatioLetter,
  typography,
  SANS_HEADING,
  SERIF_HEADING,
  colors,
  onTabletMedia,
  maxLineMeasure,
  onMedia,
  styleTransition,
  onMediaWidth,
} from "../styles"

export const ProjectCover = ({
  id,
  name,
  subtitle,
  cover,
  slug,
  title,
  coverAlt,
  draft,
  ...props
}) => {
  const [isHovered, handleHover] = useHoverState()
  const imageProps = cover.childImageSharp ? cover.childImageSharp.fluid : cover // for fallback GIF support
  return (
    <Link to={"/" + slug} /* css={{ display: "block" }} */>
      <figure
        className={"project-cover"}
        css={{
          ...aspectRatioLetter,
          position: "relative",
          overflow: "hidden", // clips aspect ratio overflow

          width: "100%",
          minWidth: "15rem",
          ...maxLineMeasure,
          cursor: "pointer",
          backgroundColor: "white",

          boxShadow: `0rem 1rem 1rem 0.5rem hsla(0, 0%, 0%, 0.5)`,

          ...onMedia("hover: none", {
            // user agent does not have :hover (touch devices)

            ".willHide.OrangeOverprint": {
              opacity: 0,
            },
            ".willHide": {
              opacity: 0,

              // ...onMediaWidth("800px", {
              //   // Render text ontop of covers?
              //   // Need to resolve legibility issues
              //   opacity: 1,
              //   textShadow: "0px 0px 0.2rem rgba(0, 0, 0, 1)",
              // }),
            },
          }),

          ...onMedia("hover: hover", {
            ...styleTransition(),
            ".willHide, img": {
              ...styleTransition(),
            },

            ".willHide": {
              // color: colors.orange,
              textShadow: "0px 0px 0.2rem rgba(0, 0, 0, 1)",
              opacity: 0,
            },

            "&:hover, &:focus": {
              // when one project is hovered should all others dim to gray? to further increase contrast.
              zIndex: 2,
              transform: "scale(1.05)",
              transformOrigin: "center",

              img: {
                filter: "blur(3px)", // matte finish
                // grayscale(50%) contrast(66%) using additional filters hurts firefox performance?
              },
              ".willHide": {
                opacity: 1,
              },
            },
          }),
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        // {...props}
      >
        <ProjectPhoto alt={coverAlt} {...imageProps} />

        <OrangeOverprint className={"willHide OrangeOverprint"} />

        <figcaption
          className={"willHide"}
          css={{
            position: "absolute",
            bottom: 0,
            left: 0,

            padding: "1rem",

            color: colors.muteGray,

            h1: {
              ...SANS_HEADING,
              color: colors.muteGray,
              fontSize: "1.33rem",
              lineHeight: 1.2,
              textTransform: "initial",
              // fontWeight: "bold",
            },
            h2: {
              ...SERIF_HEADING,
              color: colors.muteGray,
              fontSize: "1.66rem",
              ...onTabletMedia({
                fontSize: "2rem",
                lineHeight: 1.2,
                // fontSize: "1.33rem",
              }),
              textTransform: "initial",
              fontStyle: "italic",
              fontWeight: 100,
            },
          }}
        >
          <h1>{title}</h1>
          <h2>{subtitle}</h2>

          {draft && (
            <span style={{ color: "blue", textTransform: "uppercase" }}>
              DRAFT
            </span>
          )}
        </figcaption>
        {/* <Motif
          css={{
            fill: colors.darkGray,
            position: "absolute",
            top: -1,
            right: -1,
            width: "50%",
          }}
        /> */}
      </figure>
    </Link>
  )
}

export default ProjectCover
