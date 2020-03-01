/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/core"

import { moduleProps } from "../util/props"
import {
  SANS_HEADING,
  styleTransition,
  typesetHover,
  colors,
  moduleContainer,
  onMediaWidth,
  onMedia,
} from "../styles"

export const LinkModule = props => {
  const { url, text } = props

  const isExternalLink = true
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
  // ensure local path links used Gatsby Link component
  if (!url) {
    throw new Error("The LinkModule requires a URL")
  }

  return (
    <a
      css={{
        ...moduleContainer(),
        ...styleTransition(),

        ...onMedia("hover: hover", {
          ...typesetHover({
            ":hover": {
              color: colors.orange,
              backgroundColor: colors.muteGray,
              borderBottom: `0.25rem solid ${colors.orange}`,
            },
          }),
        }),

        padding: "1rem",

        ...SANS_HEADING,
        fontWeight: "bold",
        fontSize: "2rem",
        textAlign: "center",

        color: colors.muteGray,
        backgroundColor: colors.orange,
        borderBottom: `0.25rem solid ${colors.muteGray}`,
      }}
      title={text}
      href={url}
    >
      {text}
    </a>
  )
}

// <Button>

// </Button>
// <figure
//   css={[
//     moduleContainer(),
//     {
//       // how to make container resizeable?
//       display: "block",
//       width: "100%",
//       maxHeight: "90vh",
//       height: "90vh",
//       overflow: "auto",
//     },
//   ]}
//   dangerouslySetInnerHTML={{ __html: text }}
// >
//   {/* <iframe title={text} src={url} frameBorder="0"></iframe> */}
// </figure>
LinkModule.propTypes = moduleProps
