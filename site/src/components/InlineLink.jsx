import React from "react"
export const InlineLink = ({ to, children, ...props }) => {
  return <a href={to}>{children}</a>
}
