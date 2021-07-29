/** @jsx jsx */
import React, { Fragment } from "react"
import { css, jsx } from "@emotion/react"

import { moduleProps } from "../../../util/props"
import {
  SANS_HEADING,
  styleTransition,
  typesetHover,
  colors,
  moduleContainerStyles,
  onMediaWidth,
  onMedia,
  onHover,
  CODE_TYPE,
  hoverTypesetTransform,
} from "../../styles"
import { TypesetLink } from "../TypesetLink"

export const LinkModule = props => {
  const { url, text, type } = props

  const isExternalLink = true
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
  // ensure local path links used Gatsby Link component
  if (!url) {
    throw new Error("The LinkModule requires a URL")
  }

  return (
    <TypesetLink
      css={{
        ...moduleContainerStyles(),
        // ...styleTransition(),

        // ...hoverTypesetTransform({
        //   color: colors.YELLOW,
        //   backgroundColor: colors.LIGHT_GRAY,
        //   borderBottom: `0.25rem solid ${colors.YELLOW}`,
        // }),

        padding: "1rem",

        ...CODE_TYPE,
        fontWeight: "bold",
        fontSize: "2rem",
        textAlign: "center",

        color: colors.NAVY_BLUE,
        backgroundColor: colors.YELLOW,
        textDecoration: "none",
        // borderBottom: `0.25rem solid ${colors.YELLOW}`,
      }}
      title={text}
      href={url}
    >
      {text}&nbsp;=>
    </TypesetLink>
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
