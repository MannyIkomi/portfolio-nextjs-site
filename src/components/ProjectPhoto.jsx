import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const ProjectPhoto = ({ alt, sizes, srcSet, src, ...rest }) => (
  <img
    src={src}
    srcSet={srcSet}
    sizes={sizes}
    alt={coverAlt}
    css={{
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    }}
  />
)

export default ProjectPhoto
