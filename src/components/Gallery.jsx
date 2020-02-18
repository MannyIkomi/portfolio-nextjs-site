/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  colors,
  flex,
  supportsGrid,
  onTabletMedia,
  TOUCH_TARGET,
} from "../styles"

export const Gallery = ({ children, css, ...props }) => {
  return (
    <section
      // className={"gallery"}
      css={{
        // backgroundColor: colors.darkGray,
        width: "100%",
        ...flex("column"),
        alignItems: "center",

        ...onTabletMedia({
          ...supportsGrid({
            // padding: TOUCH_TARGET,
            gridTemplateColumns: "1fr 1fr",
            gridGap: `calc(${TOUCH_TARGET} / 2)`,
            gridAutoFlow: "row",
          }),
        }),
      }}
      {...props}
    >
      {children}
    </section>
  )
}
