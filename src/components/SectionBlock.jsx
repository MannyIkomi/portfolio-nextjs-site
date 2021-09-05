/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import { colors, flex } from "../styles"
export const SectionBlock = props => {
  const { children, ...rest } = props
  return (
    <section
      css={{
        ...flex("column"),
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "1rem",
      }}
      {...rest}
    >
      {children}
    </section>
  )
}
