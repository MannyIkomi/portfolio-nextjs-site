/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { maxReadingWidth } from "../styles"
export const ContentArea = props => {
  const { children, ...rest } = props
  return (
    <div className={"content"} css={{ ...maxReadingWidth }} {...rest}>
      {children}
    </div>
  )
}
