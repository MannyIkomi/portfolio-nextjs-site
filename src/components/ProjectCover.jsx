import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import { useHoverState } from "../hooks/useHoverState"
import { FillOverlay } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
import {
  aspectRatioLetter,
  typography,
  sansHeading,
  serifHeading,
  colors,
  onTabletMedia,
  maxLineMeasure,
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
  console.log(cover)

  const [isHovered, handleHover] = useHoverState()
  const responsiveImage = cover.childImageSharp.fluid
  return (
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
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      // {...props}
    >
      <Link to={"/" + slug} css={{ display: "block" }}>
        <ProjectPhoto alt={coverAlt} {...responsiveImage} />

        {isHovered && (
          <FillOverlay>
            <figcaption
              css={{
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
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}

export default ProjectCover
