/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import { HEADING_1, INLINE_IMAGE } from "../../util/blockTypes"
import { DebugDataPre } from "../DebugDataPre"
import { parseCaption } from "../../templates/ProjectTemplate"

export const ImageBlock = props => {
  const { image } = props
  const block = props
  const { caption, file, external } = image
  const src = file ? file.url : external.url

  return <img src={src} alt={parseCaption(block)} />
}
