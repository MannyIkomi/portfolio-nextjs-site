import * as React from "react"
import { Link as GatsbyLink } from "gatsby"

export const InternalLink = document => {
  const link = document.data.example_link
  return <GatsbyLink to={link.url}>Link to a doc</GatsbyLink>
}
