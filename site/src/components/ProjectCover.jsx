import React from "react"
import { Link } from "gatsby"
import { useHoverState } from "../hooks/useHoverState"
import { FillOverlay } from "./FillOverlay"
import { ProjectPhoto } from "./ProjectPhoto"
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
    <figure onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Link>
        <ProjectPhoto src={cover.publicURL} alt={coverAlt} />
        {isHovered && (
          <FillOverlay>
            <figcaption>
              <h1>{title}</h1>
              <h2>{description}</h2>
            </figcaption>
          </FillOverlay>
        )}
      </Link>
    </figure>
  )
}
