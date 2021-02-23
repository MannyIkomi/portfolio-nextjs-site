/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { TypesetLink } from "./TypesetLink"
import { typography, resumeContentHeading } from "../styles"

export const ResumeTitle = props => {
  const { url, title, children, ...rest } = props

  return (
    <h2 css={resumeContentHeading} {...rest}>
      {children || title}
    </h2>
  )
}
