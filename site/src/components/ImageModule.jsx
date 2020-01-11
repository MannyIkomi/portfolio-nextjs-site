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
        moduleContainer(),
        {
          width: "100%",
          height: "auto",

          maxWidth: "80rem",
          // maxHeight: "90vh",
        },
      ]}
    >
      <img
        css={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
        }}
        src={image.publicURL}
        alt={imageAlt}
      />
    </figure>
  )
}
ImageModule.propTypes = moduleProps
