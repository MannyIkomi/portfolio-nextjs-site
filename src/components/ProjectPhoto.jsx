import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const ProjectPhoto = ({
  alt,
  sizes,
  srcSet,
  src,
  publicURL, //for fallback GIF support
  ...rest
}) => (
  <img
    src={src || publicURL}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    css={{
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    }}
    {...rest}
  />
)

export default ProjectPhoto
