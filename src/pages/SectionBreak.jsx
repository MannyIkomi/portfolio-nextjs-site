/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

export const SectionBreak = props => (
  <hr
    css={{
      margin: "5vh",
      height: 1, // ensures safari scrolls to content box
      border: 0,
    }}
    {...props}
  />
)
