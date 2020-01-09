import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { graphql } from "gatsby"
import { ulStyles } from "../styles"

export const List = props => {
  const { ordered, children, ...rest } = props
  const ListTag = ordered ? "ol" : "ul"
  const listStyle = ordered ? null : ulStyles

  return (
    <ListTag css={listStyle}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ListTag>
  )
}
