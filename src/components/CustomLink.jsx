/** @jsx jsx */
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css, jsx } from "@emotion/react"

import {
  typesetTransform,
  linkActive,
  linkText,
  styleTransition,
  onMedia,
  onHover,
  hoverTypesetTransform,
} from "../styles"
import { InternalLink } from "./InternalLink"
import { ExternalLink } from "./ExternalLink"

const DOCUMENT_LINK = "Document"
const WEB_LINK = "Web"

export const CustomLink = ({ type, element, content, children, index }) => {
  // const { to, href, title, children, ...rest } = props
  const linkStyles = [linkText, { position: "relative" }, styleTransition()]

  switch (element.data.link_type) {
    case DOCUMENT_LINK:
      return (
        <GatsbyLink
          to={element.data.slug}
          css={linkStyles}
          activeStyle={linkActive()}
          key={element.data.uid}
          // {...rest}
        >
          {content}
        </GatsbyLink>
      )

    case WEB_LINK:
      return (
        <a id={element.data.id} href={element.data.url} css={linkStyles}>
          {content}
        </a>
      )
    default:
      throw new Error(`Missing Switch case for ${element.data.link_type}`)
  }
}
