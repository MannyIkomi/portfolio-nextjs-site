import React from "react"
import { css, jsx } from "@emotion/react"
import Img from "gatsby-image"

export const ProjectPhoto = ({
  alt,
  url: src,

  ...rest
}) => (
  <img
    src={src}
    // srcSet={srcSet}
    // sizes={sizes}
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
