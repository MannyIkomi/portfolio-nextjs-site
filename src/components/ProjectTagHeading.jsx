/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import { colors, onTabletMedia, onMediaWidth, onDesktopMedia } from "../styles"

export const ProjectTagHeading = ({ children, ...restProps }) => {
  return (
    <h2
      css={[
        {
          fontSize: "2rem",
          color: colors.YELLOW,
          ...onTabletMedia({
            fontSize: "2.5rem",
          }),
          ...onDesktopMedia({
            fontSize: "3rem",
          }),
        },
        { textAlign: "left", marginBottom: "1rem", color: colors.YELLOW },
        onMediaWidth("500px", { textAlign: "center" }),
      ]}
      {...restProps}
    >
      {children}
    </h2>
  )
}
