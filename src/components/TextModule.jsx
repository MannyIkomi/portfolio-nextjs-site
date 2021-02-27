/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import ModuleMarkdown from "./ModuleMarkdown"
import {
  colors,
  moduleContainerStyles,
  typography,
  maxLineMeasure,
} from "../styles"
import { moduleProps } from "../util/props"

export const TextModule = ({ text }) => {
  return (
    <figure
      css={[
        moduleContainerStyles(),
        {
          color: colors.NAVY_BLUE,
          backgroundColor: colors.LIGHT_GRAY,
          padding: "2rem",
        },
      ]}
    >
      <ModuleMarkdown>{text}</ModuleMarkdown>
    </figure>
  )
}
TextModule.propTypes = moduleProps
