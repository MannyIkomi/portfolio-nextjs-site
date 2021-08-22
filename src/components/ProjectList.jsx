/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import {
  colors,
  flex,
  supportsGrid,
  onTabletMedia,
  TOUCH_TARGET,
  maxContainerWidth,
  grid,
} from "../styles"

export const ProjectList = ({ children, css, ...props }) => {
  return (
    <ul
      css={{
        listStyle: "none",
        padding: 0,
        li: {
          "::marker": {
            content: "initial",
          },
        },
      }}
      {...props}
    >
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}
