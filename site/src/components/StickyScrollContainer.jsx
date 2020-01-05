/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
export const StickyScrollContainer = ({ children, ...props }) => {
  return (
    <div css={{ position: "relative" }} {...props}>
      {/* children are {position: sticky} and will scroll within this container */}
      {children}
    </div>
  )
}

export default StickyScrollContainer
