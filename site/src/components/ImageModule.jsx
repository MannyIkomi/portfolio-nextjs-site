/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import { mixin, moduleContainer } from "../styles"
import { moduleProps } from "../util/props"

export const ImageModule = props => {
  const { image, imageAlt, type, text, id } = props

  return (
    <figure
      css={[
        moduleContainer,
        {
          width: "100%",
          img: {
            objectFit: "fill",
            width: "100%",
            height: "100%",
          },
        },
      ]}
    >
      <img src={image.publicURL} alt={imageAlt} />
    </figure>
  )
}
ImageModule.propTypes = moduleProps
