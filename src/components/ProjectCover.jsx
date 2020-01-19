import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

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
  return (
    <figure
      className={"project-cover"}
      css={{
        ...aspectRatioLetter,
        position: "relative",
        overflow: "hidden", // clips aspect ratio overflow
        position: "relative",
        // marginBottom: "4rem",
        width: "100%",
        cursor: "pointer",
        backgroundColor: "white",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      // {...props}
    >
      <Link to={"/" + slug}>
        <ProjectPhoto src={cover.publicURL} alt={coverAlt} />
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
              <span style={{ color: "blue", textTransform: "uppercase" }}>
                {draft && "DRAFT"}
              </span>
            </figcaption>
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}

export default ProjectCover
