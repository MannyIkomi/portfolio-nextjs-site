/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { maxContainerWidth, maxTypeWidth } from "../styles"

export const ContainerWidth = props => {
  const { children, ...rest } = props
  return (
    <div
      className={"container"}
      css={{ width: "100%", ...maxContainerWidth }}
      {...rest}
    >
      {children}
    </div>
  )
}
