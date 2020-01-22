import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

export const ProjectPhoto = ({ alt, childImageSharp }) => (
  <Img
    fluid={childImageSharp.fluid}
    alt={alt}
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      minWidth: " 100px",
      // overflow: "initial",
      picture: {
        width: "100%",
      },
    }}
    // imgStyle={{
    //   display: "block",
    //   width: "100%",
    //   height: "auto",
    // }}
  />
  // <img
  //   css={{
  //     display: "block",
  //     width: "100%",
  //     height: "auto",
  //     objectFit: "cover",
  //   }}
  //   src={src}
  //   alt={alt}
  // />
)

export default ProjectPhoto
