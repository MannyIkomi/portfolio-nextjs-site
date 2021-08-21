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
      className={"gallery"}
      css={{
        listStyle: "none",
        // backgroundColor: colors.darkGray,
        ...flex("column"),
        alignItems: "center",
        width: "100%",
        padding: 0,
        li: {
          "::marker": {
            content: "initial",
          },
        },
        ...onTabletMedia(
          grid({
            // padding: TOUCH_TARGET,
            gridTemplateColumns: "1fr 1fr",
            gridGap: `2rem`,
            gridAutoFlow: "row",
          })
        ),
      }}
      {...props}
    >
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}
