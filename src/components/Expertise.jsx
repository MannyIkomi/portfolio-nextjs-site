/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { styleTransition, textLink } from "../styles"

export const Expertise = props => {
  const { url, description } = props
  return (
    <span>
      {url ? (
        <a css={{ ...styleTransition(), ...textLink }} href={url}>
          {description}
        </a>
      ) : (
        description
      )}
    </span>
  )
}
