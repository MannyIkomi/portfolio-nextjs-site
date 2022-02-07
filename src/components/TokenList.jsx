import React from "react"
import { css, jsx } from "@emotion/react"
import { firaCode, colors, tokenize } from "../styles"

export const TokenList = ({ children, ...restProps }) => {
  return (
    <ul
      css={{
        listStyle: "none",
        padding: 0,
      }}
      {...restProps}
    >
      {React.Children.map(children, child => {
        return (
          <li
            css={{
              ...tokenize(),
              ...firaCode,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              fontWeight: 600,
              whiteSpace: "nowrap",

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
