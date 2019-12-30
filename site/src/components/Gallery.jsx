import React from "react"
import { colors, flex } from "../styles"

export const Gallery = ({ children, ...props }) => {
  return (
    <section
      css={{
        backgroundColor: colors.darkGray,
        width: "100%",
        padding: "2rem",
        ...flex("column"),
      }}
    >
      {children}
    </section>
  )
}
