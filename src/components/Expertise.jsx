/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import { styleTransition, linkText } from "../styles"

export const Expertise = props => {
  const { url, description } = props
  return (
    <span>
      {url ? (
        <a css={{ ...styleTransition(), ...linkText }} href={url}>
          {description}
        </a>
      ) : (
        description
      )}
    </span>
  )
}
