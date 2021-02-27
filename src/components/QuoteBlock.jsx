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
          ...flex("column"),
          alignItems: "center",

          // quote body
          ...SANS_TYPE,
          hangingPunctuation: "first", //only supported in safari
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: 200,

          lineHeight: 1.5,
          cite: {
            ...SANS_TYPE,
            fontStyle: "italic",
            fontWeight: 200,

            alignSelf: "flex-end",
          },
        },
      ]}
      {...rest}
    >
      “{children || quote}” {cite && <cite>— {cite} </cite>}
    </blockquote>
  )
}
