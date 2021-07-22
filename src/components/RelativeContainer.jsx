/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
export const RelativeContainer = ({ children, ...props }) => {
  return (
    <div css={{ position: "relative" }} {...props}>
      {/* children are {position: sticky} and will scroll within this container */}
      {children}
    </div>
  )
}

export default RelativeContainer
