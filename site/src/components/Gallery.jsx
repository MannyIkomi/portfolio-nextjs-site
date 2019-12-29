import React from "react"
import { colors } from "../styles"
export const Gallery = ({ children, ...props }) => {
  return (
    <section
      css={{
        backgroundColor: colors.darkGray,
        width: "100%",
        padding: "2rem",
      }}
    >
      {children}
    </section>
  )
}
