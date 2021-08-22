import React from "react"
import {
  colors,
  typesetTransform,
  TOUCH_TARGET,
  styleTransition,
  onMedia,
  onHover,
} from "../styles"

import { ReactSVG } from "react-svg"

export const SocialIcon = props => {
  const { url, icon } = props
  return (
    <a
      href={url.url}
      css={{
        color: colors.ACCENT,
      }}
    >
      <ReactSVG src={icon.url} css={{ svg: { fill: "currentcolor" } }} />
    </a>
  )
}
