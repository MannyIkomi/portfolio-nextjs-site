/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import {
  colors,
  styleTransition,
  typesetInteraction,
  SANS_HEADING,
  onMedia,
} from "../styles"

export const Button = props => {
  const { children, onClick, ...rest } = props
  return (
    <button
      css={{
        ...styleTransition(),
        ...onMedia(
          "hover: hover",
          typesetInteraction({
            backgroundColor: colors.orange50,
          })
        ),

        ...SANS_HEADING,
        // fontSize: "1.1rem",
        // fontWeight: "bold",

        color: colors.darkGray,
        backgroundColor: colors.darkGray20,
        borderBottom: `0.25rem solid ${colors.orange}`,

        padding: "0.5rem",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
