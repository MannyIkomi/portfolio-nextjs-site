/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { InlineLink } from "./InlineLink"

export const Expertise = props => {
  const { url, description } = props
  return (
    <span>
      {url ? <InlineLink to={url}>{description}</InlineLink> : description}
    </span>
  )
}
