/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { colors } from "../styles"

export const ResumeSection = props => {
  const { children, heading, ...rest } = props
  return (
    <article
      css={{
        // borderTop: 'solid',
        margin: "2rem 0",
      }}
      {...rest}
    >
      <h1
        css={{
          fontWeight: "100",
          textAlign: "right",
          color: colors.orange,
        }}
      >
        {heading}
      </h1>
      {children}
    </article>
  )
}
