import React from "react"
import { css, jsx } from "@emotion/react"
import Img from "gatsby-image"

export const ProjectPhoto = ({ alt, url: src, dimensions, ...props }) => (
  <img
    src={src}
    // srcSet={srcSet}
    // sizes={sizes}
    width={dimensions?.width}
    height={dimensions?.height}
    alt={alt}
    css={{
      display: "block",
      width: "100%",
      height: "auto",
    }}
  />
)

export default ProjectPhoto
