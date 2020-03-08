import React from "react"
import { css } from "@emotion/core"
import { colors, tokenize } from "../styles"

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
              ...tokenize(),
              fontSize: "1rem",

              margin: "0.33rem 0",
              marginRight: "0.66rem",

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
