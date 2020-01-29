/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  colors,
  flex,
  supportsGrid,
  onTabletMedia,
  touchTarget,
} from "../styles"

export const Gallery = ({ children, css, ...props }) => {
  return (
    <section
      className={"gallery"}
      css={{
        backgroundColor: colors.darkGray,
        width: "100%",
        padding: "2rem",
        ...flex("column"),

        ...onTabletMedia({
          ...supportsGrid({
            padding: touchTarget,
            gridTemplateColumns: "1fr 1fr",
            gridGap: touchTarget,
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
