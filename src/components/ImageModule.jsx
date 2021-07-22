/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import { mixin, moduleContainerStyles, flex } from "../styles"
import { moduleProps } from "../util/props"
import ProjectPhoto from "./ProjectPhoto"

export const ImageModule = props => {
  const { image, imageAlt, imageFill, type, text, id } = props
  const imageProps = image.childImageSharp ? image.childImageSharp.fluid : image // for fallback GIF support

  return (
    <figure
      css={[
        moduleContainerStyles(),
        {
          ...flex("column"),
          width: "100%",
          height: "auto",
        },
      ]}
    >
      <ProjectPhoto
        alt={imageAlt}
        css={{
          objectFit: imageFill ? "cover" : "contain",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
        {...imageProps}
      />
    </figure>
  )
}
ImageModule.propTypes = moduleProps
