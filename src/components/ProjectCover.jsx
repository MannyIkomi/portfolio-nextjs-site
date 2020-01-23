import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import { useHoverState } from "../hooks/useHoverState"
import { OrangeOverprint } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
import {
  aspectRatioLetter,
  typography,
  sansHeading,
  serifHeading,
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

          // marginBottom: "4rem",
          width: "100%",
          minWidth: "10rem",
          ...maxLineMeasure,
          cursor: "pointer",
          backgroundColor: "white",

          ...onMedia("hover: none", {
            // user agent does not have :hover (touch devices)

            ".willHide.OrangeOverprint": {
              opacity: 0,
            },
            ".willHide": {
              opacity: 0,
              // h2: {
              //   fontSize: "1rem",
              //   display: "block",
              //   backgroundColor: colors.darkGray,
              //   color: colors.muteGray,
              //   backgroundBlendMode: "multiply",
              // },

              ...onMediaWidth("800px", {
                opacity: 1,
                // color: "black",
                textShadow: "0px 0px 0.2rem rgba(0, 0, 0, 1)",
                // mixBlendMode: "exclusion",
              }),
            },
          }),

          ...onMedia("hover: hover", {
            ".willHide, img": {
              ...styleTransition(),
            },

            ".willHide": {
              textShadow: "0px 0px 0.2rem rgba(0, 0, 0, 1)",
              opacity: 0,
            },

            "&:hover, &:focus": {
              // when one project is hovered should all others dim to gray? to further increase contrast.
              img: {
                filter: "grayscale(50%) contrast(66%) blur(2px)", // matte finish
                transform: "scale(1.1)",
                transformOrigin: "center",
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
        {/* convert figcaption to trigger on CSS :hover for accessibility
        on :hover {
          filter grayscale,
        }
  using React state removes heading from the DOM instead of visibility hiding

*/}

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
              color: colors.muteGray,
              ...sansHeading,
              // fontSize: "2rem",
              fontWeight: "bold",
              textTransform: "initial",
            },
            h2: {
              fontSize: "1rem",
              ...onTabletMedia({
                fontSize: "1.33rem",
              }),
              textTransform: "initial",
              ...serifHeading,
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
      </figure>
    </Link>
  )
}

export default ProjectCover
