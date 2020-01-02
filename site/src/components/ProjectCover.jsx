import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { useHoverState } from "../hooks/useHoverState"
import { FillOverlay } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
import { aspectRatioLetter, typography } from "../styles"

export const ProjectCover = ({
  id,
  name,
  description,
  cover,
  slug,
  title,
  coverAlt,
  ...props
}) => {
  const [isHovered, handleHover] = useHoverState()
  return (
    <figure
      className={"projectCover"}
      css={{
        ...aspectRatioLetter,
        position: "relative",
        overflow: "hidden", // clips aspect ratio overflow
        position: "relative",
        // marginBottom: "4rem",
        width: "100%",
        cursor: "pointer",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      // {...props}
    >
      <Link>
        <ProjectPhoto src={cover.publicURL} alt={coverAlt} />
        {isHovered && (
          <FillOverlay>
            <figcaption
              css={{
                color: "white",
                h1: {
                  fontFamily: typography.sans,
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textTransform: "initial",
                },
                h2: {
                  fontSize: "1rem",
                  textTransform: "initial",
                  fontFamily: typography.serif,
                  fontStyle: "italic",
                  fontWeight: 100,
                },
              }}
            >
              <h1>{title}</h1>
              <h2>{description}</h2>
            </figcaption>
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}
