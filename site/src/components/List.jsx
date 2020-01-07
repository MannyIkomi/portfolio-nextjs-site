import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { graphql } from "gatsby"

export const List = props => {
  const { ordered, children, ...rest } = props
  const ListTag = ordered ? "ol" : "ul"
  return (
    <ListTag>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ListTag>
  )
}
