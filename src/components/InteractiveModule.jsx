/** @jsx jsx */
import React, { Fragment } from "react"
import { jsx } from "@emotion/core"

import { mixin, moduleContainerStyles, flex } from "../styles"
import { moduleProps } from "../util/props"
import ProjectPhoto from "./ProjectPhoto"

export const InteractiveModule = props => {
  const { image, imageAlt, imageFill, url, type, text, id } = props
  return (
    <figure
      css={[
        moduleContainerStyles(),
        {
          // how to make container resizeable?
          display: "block",
          width: "100%",
          height: "80vh",
          overflow: "auto",
        },
      ]}
      dangerouslySetInnerHTML={{ __html: text }}
    >
      {/* <iframe title={text} src={url} frameBorder="0"></iframe> */}
    </figure>
  )
}
InteractiveModule.propTypes = moduleProps
