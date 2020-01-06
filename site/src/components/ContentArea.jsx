/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { maxLineMeasure } from "../styles"
export const ContentArea = props => {
  const { children, ...rest } = props
  return (
    <div className={"content"} css={{ ...maxLineMeasure }} {...rest}>
      {children}
    </div>
  )
}
