import React from "react"
import {
  colors,
  typesetTransform,
  TOUCH_TARGET,
  styleTransition,
  onMedia,
  onHover,
  s2,
} from "../styles"

import { ReactSVG } from "react-svg"

export const SocialIcon = ({ url, icon, ...props }) => {
  return (
    <a
      href={url.url}
      css={{
        display: "inline-block",
        color: colors.ACCENT,
        width: s2,
        height: s2,
      }}
      {...props}
    >
      <ReactSVG src={icon.url} css={{ svg: { fill: "currentcolor" } }} />
    </a>
  )
}
