/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  flex,
  maxLineMeasure,
  typography,
  SANS_TYPE,
  SERIF_TYPE,
  FUTURA_BODY_SIZE,
} from "../styles"
export const QuoteBlock = props => {
  const { cite, quote, children, ...rest } = props
  return (
    <blockquote
      css={{
        ...flex("column"),
        alignItems: "center",
        ...maxLineMeasure,
        padding: "2rem",
        // quote body
        ...SANS_TYPE,
        hangingPunctuation: "first last",
        // ...futuraBodySize,
        fontSize: "2rem",
        fontStyle: "normal",
        fontWeight: "normal",

        lineHeight: 1.5,
        cite: {
          ...FUTURA_BODY_SIZE,
          ...SERIF_TYPE,
          fontStyle: "italic",
          fontWeight: "normal",

          alignSelf: "flex-end",
        },
      }}
      {...rest}
    >
      “{children || quote}”<cite>— {cite} </cite>
    </blockquote>
  )
}
