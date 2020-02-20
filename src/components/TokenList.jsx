import React from "react"
import { css } from "@emotion/core"
import { colors } from "../styles/colors"

export const TokenList = ({ children, ...restProps }) => {
  return (
    <ul
      css={{
        listStyle: "none",
      }}
      {...restProps}
    >
      {React.Children.map(children, child => {
        return (
          <li
            css={{
              fontSize: "1rem",

              display: "inline-block",
              margin: "0.33rem 0",
              marginRight: "1rem",
              padding: "0.1rem 0.33rem",
              backgroundColor: colors.darkGray80,
            }}
          >
            {child}
          </li>
        )
      })}
    </ul>
  )
}
