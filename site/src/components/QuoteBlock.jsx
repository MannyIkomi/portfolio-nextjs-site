/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { flex, maxLineMeasure, typography } from "../styles"
export const QuoteBlock = props => {
  const { cite, quote, children, ...rest } = props
  return (
    <blockquote
      css={{
        ...flex("column"),
        alignItems: "center",
        ...maxLineMeasure,
        padding: "1rem",
        // quote body
        fontFamily: typography.sans,
        fontSize: "1.5rem",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: 1.5,
        cite: {
          // name
          alignSelf: "flex-end",
          fontFamily: typography.serif,
          fontStyle: "italic",
          fontWeight: "normal",
        },
      }}
      {...rest}
    >
      “{children || quote}”<cite>— {cite} </cite>
    </blockquote>
  )
}
