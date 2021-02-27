/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  flex,
  maxTypeWidth,
  typography,
  SANS_TYPE,
  SERIF_TYPE,
  FUTURA_BODY_SIZE,
  onSupport,
  TOUCH_TARGET,
  supportsGrid,
} from "../styles"
export const QuoteBlock = props => {
  const { cite, quote, children, ...rest } = props
  return (
    <blockquote
      css={[
        {
          // quote body
          ...SANS_TYPE,
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: 200,

          textAlign: "left",

          hangingPunctuation: "first", //only supported in safari
          lineHeight: 1.5,

          cite: {
            display: "block",
            ...SANS_TYPE,
            fontStyle: "italic",
            fontWeight: 200,
            textAlign: "right",
            marginLeft: "auto",
          },
        },
      ]}
      {...rest}
    >
      “{children || quote}”{" "}
      {cite && (
        <>
          <br />
          <cite>— {cite}</cite>
        </>
      )}
    </blockquote>
  )
}
