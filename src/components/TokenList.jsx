import React from "react"
import { css } from "@emotion/core"
import { CODE_TYPE, colors, tokenize } from "../styles"

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
              ...CODE_TYPE,
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: 500,

              margin: "0.33rem 0",
              marginRight: "0.66rem",

              // backgroundColor: colors.TURQUOISE,
            }}
          >
            {child}
          </li>
        )
      })}
    </ul>
  )
}
