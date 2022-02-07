import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { graphql } from "gatsby"
import { firaCode } from "../styles"

export const List = ({
  ordered = false,
  marker = true,
  children,
  ...props
}) => {
  const ListTag = ordered ? "ol" : "ul"

  const hasMarker = marker
    ? {
        "::marker": {
          ...firaCode,
          content: `"::"`,
        },
      }
    : {}

  const listStyle = ordered
    ? null
    : {
        listStyle: "none",
        paddingLeft: "1.25rem",
        li: hasMarker,
      }

  return (
    <ListTag css={listStyle} {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ListTag>
  )
}

export const ListElements = ({ children, ...props }) => (
  <List marker={false} {...props} css={{ padding: 0 }}>
    {children}
  </List>
)
