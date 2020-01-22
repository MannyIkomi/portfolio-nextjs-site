import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const ProjectPhoto = ({ src, alt, childImageSharp, ...props }) => (
  <Img fixed={childImageSharp.fixed} />
  // <img
  //   css={{
  //     display: "block",
  //     width: "100%",
  //     height: "auto%",
  //     objectFit: "cover",
  //   }}
  //   src={src}
  //   alt={alt}
  // />
)

export default ProjectPhoto
