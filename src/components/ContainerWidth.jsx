/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import { maxContainerWidth, maxTypeWidth } from "../styles"

export const ContainerWidth = ({ children, ...props }) => {
  return (
    <div
      className={"container"}
      css={{ width: "100%", ...maxContainerWidth }}
      {...props}
    >
      {children}
    </div>
  )
}
