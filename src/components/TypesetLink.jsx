/** @jsx jsx */
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css, jsx } from "@emotion/core"

import {
  typesetHover,
  linkActive,
  linkText,
  styleTransition,
  onMedia,
} from "../styles"

export const TypesetLink = props => {
  const { to, title, children, ...rest } = props

  const internal = /^\/(?!\/)/.test(to) // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links

  const linkStyles = [
    linkText,
    { position: "relative" },
    styleTransition(),
    onMedia("hover: hover", {
      ...typesetHover(),
    }),
  ]

  return internal ? (
    <GatsbyLink
      to={to}
      title={title}
      activeStyle={linkActive()}
      css={linkStyles}
      {...rest}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} title={title} css={linkStyles} {...rest}>
      {children}
    </a>
  )
}

const accessibleTouch = {
  // make inline links have a larger hit box area when on touch based devices
  // [`@media (pointer: coarse)`]: {}
  // "::before": {
  //   content: '""',
  //   display: "block",
  //   position: "absolute",
  //   // minHeight: touchTarget,
  //   // minWidth: touchTarget,
  //   marginTop: "-60%",
  //   marginLeft: "-60%",
  //   height: "120%",
  //   width: "120%",
  //   top: "60%",
  //   left: "60%",
  // },
}
