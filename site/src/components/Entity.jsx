/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { InlineLink } from "./InlineLink"

export const Entity = props => {
  const { url, title, styles, children, ...rest } = props
  const headingStyle = {
    // textTransform: "initial",
    // fontFamily: typography.sans,
    // fontSize: "1.5rem",
  }
  return (
    <>
      {url ? (
        <InlineLink to={url}>
          <h2 css={headingStyle}>{children || title}</h2>
        </InlineLink>
      ) : (
        <h2 css={{ headingStyle, ...styles }}>{children || title}</h2>
      )}
    </>
  )
}
