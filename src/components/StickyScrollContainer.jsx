/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import RelativeContainer from "./RelativeContainer"
export const StickyScrollContainer = ({ children, ...props }) => {
  return (
    <RelativeContainer {...props}>
      {/* children are {position: sticky} and will scroll within this container */}
      {children}
    </RelativeContainer>
  )
}

export default StickyScrollContainer
