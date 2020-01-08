/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { TypesetLink } from "./TypesetLink"

export const Expertise = props => {
  const { url, description } = props
  return (
    <span>
      {url ? <TypesetLink to={url}>{description}</TypesetLink> : description}
    </span>
  )
}
