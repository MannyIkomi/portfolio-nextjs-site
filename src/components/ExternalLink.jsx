import * as React from "react"
import { Link as GatsbyLink } from "gatsby"

export const ExternalLink = props => {
  const link = props.data
  return <a href={link.url}>{children}</a>
}
