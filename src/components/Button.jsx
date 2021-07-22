/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/react"

import {
  colors,
  styleTransition,
  SANS_HEADING,
  onMedia,
  typesetTransform,
} from "../styles"

export const Button = props => {
  const { children, onClick, ...rest } = props
  return (
    <button
      css={{
        ...styleTransition(),
        ...onMedia(
          "hover: hover",
          typesetTransform({
            backgroundColor: colors.orange20,
          })
        ),

        ...SANS_HEADING,

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
