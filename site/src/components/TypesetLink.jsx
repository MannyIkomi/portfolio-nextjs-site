/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import {
  typesetInteraction,
  textLink,
  touchTarget,
  styleTransition,
} from "../styles"

export const TypesetLink = ({ to, title, children, ...rest }) => {
  return (
    <a
      href={to}
      title={title}
      css={[
        { position: "relative" },
        styleTransition(),
        typesetInteraction(),
        textLink,
      ]}
      {...rest}
    >
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
