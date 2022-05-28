/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"
import { RichText } from "prismic-reactjs"
import htmlSerializer from "./htmlSerializer"

import {
  colors,
  moduleContainerStyles,
  typography,
  maxLineMeasure,
  maxTypeWidth,
  onTabletMedia,
} from "../../styles"
import { moduleProps } from "../../util/props"
import { List } from "../List"
import ProjectPhoto from "../ProjectPhoto"
import { ImageBlock } from "./ImageBlock"

import { DebugDataPre } from "../DebugDataPre"
import { parseRichText } from "../../templates/ProjectTemplate"

export const QuoteBlock = props => {
  const block = props
  // TODO: Design a quote block in figma
  return (
    <div>
      <p>{parseRichText(block)}</p>
    </div>
  )
}
