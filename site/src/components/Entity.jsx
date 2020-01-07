/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { InlineLink } from "./InlineLink"
import { typography, resumeContentHeading } from "../styles"

export const Entity = props => {
  const { url, title, children, ...rest } = props

  return (
    <>
      {url ? (
        <InlineLink to={url} {...rest}>
          <h2 css={resumeContentHeading}>{children || title}</h2>
        </InlineLink>
      ) : (
        <h2 css={resumeContentHeading} {...rest}>
          {children || title}
        </h2>
      )}
    </>
  )
}
