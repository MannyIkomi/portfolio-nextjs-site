import React from "react"
import { css } from "@emotion/core"

export const TokenList = ({ children, ...restProps }) => {
  return (
    <ul
      css={{
        listStyle: "none",
      }}
    >
      {React.Children.map(children, child => {
        return (
          <li css={{ display: "inline-block", marginRight: "1rem" }}>
            {child}
          </li>
        )
      })}
    </ul>
  )
}
