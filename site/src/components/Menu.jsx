/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

export const Menu = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}
