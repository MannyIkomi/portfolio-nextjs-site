/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex, supportsGrid, onTabletMedia } from "../styles"

export const Gallery = ({ children, ...props }) => {
  return (
    <section
      css={{
        backgroundColor: colors.darkGray,
        width: "100%",
        padding: "2rem",
        ...flex("column"),

        ...onTabletMedia({
          ...supportsGrid({
            gridTemplateColumns: "1fr 1fr",
            gridGap: "2rem",
            gridAutoFlow: "row",
          }),
        }),
      }}
    >
      {children}
    </section>
  )
}
