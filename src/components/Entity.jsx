/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { TypesetLink } from "./TypesetLink"
import { typography, resumeContentHeading } from "../styles"

export const TitleResume = props => {
  const { url, title, children, ...rest } = props

  return (
    <>
      {url ? (
        <TypesetLink to={url} {...rest}>
          <h2 css={resumeContentHeading}>{children || title}</h2>
        </TypesetLink>
      ) : (
        <h2 css={resumeContentHeading} {...rest}>
          {children || title}
        </h2>
      )}
    </>
  )
}
