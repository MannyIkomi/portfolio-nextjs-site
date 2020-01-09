/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  flex,
  maxLineMeasure,
  typography,
  sansType,
  serifType,
  futuraBodySize,
} from "../styles"
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
        ...sansType,
        // ...futuraBodySize,
        fontSize: "2rem",
        fontStyle: "normal",
        fontWeight: "normal",

        lineHeight: 1.5,
        cite: {
          ...futuraBodySize,
          ...serifType,
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
