import React from "react"
import { css } from "@emotion/core"

export const ProjectPhoto = ({ src, alt, ...props }) => (
  <img
    css={{
      display: "block",
      width: "100%",
      height: "auto%",
      objectFit: "cover",
    }}
    src={src}
    alt={alt}
  />
)

export default ProjectPhoto
