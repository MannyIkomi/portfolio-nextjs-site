/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex } from "../styles"

const orangeOverlay = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  backgroundColor: colors.orange,
  opacity: 1,
  mixBlendMode: "multiply",
})

const layoutChildren = css({
  width: "100%",
  height: "100%",
  padding: "1rem",

  ...flex("column"),
  justifyContent: "flex-end",

  position: "absolute",
  bottom: 0,
  left: 0,
})

const withMotif = css({
  "::after": {
    content: 'url("../motif-gallery.svg")',
    position: "absolute",
    top: "-1px",
    right: "-1px",
    width: "50%",
    height: "auto",
  },
})

const fillOrange = override =>
  css({
    backgroundColor: colors.orange,
    opacity: 1,

    ...override,
  })

const positionOverlay = override =>
  css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    ...override,
  })

export const Motif = props => (
  <div css={{ fill: "black" }} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.34912 33.82959">
      <defs>
        {/* <style>.a2b08d38-d6e8-4c4f-880f-604fe16a7b6e{fill:#262626;}</style> */}
      </defs>
      <title>motif-gallery</title>
      <g id="aa6f012a-c32a-4f97-a45a-572761dcb288" data-name="Layer 2">
        <g id="bdb8b8fa-c1cf-4191-aa76-6e3c3c34d75e" data-name="Layer 1">
          <rect
            class="a2b08d38-d6e8-4c4f-880f-604fe16a7b6e"
            x="56.67725"
            y="28.99683"
            width="16.67188"
            height="4.83276"
          />
          <polygon
            class="a2b08d38-d6e8-4c4f-880f-604fe16a7b6e"
            points="0 0 0 4.833 5.195 4.833 5.195 9.666 42.88 9.666 42.88 14.499 19.791 14.499 19.791 19.331 26.397 19.331 26.397 24.164 73.349 24.164 73.349 19.331 73.349 14.499 73.349 9.666 73.349 4.833 73.349 0 0 0"
          />
        </g>
      </g>
    </svg>
  </div>
)

export const OrangeOverprint = ({ children, ...restProps }) => (
  <div
    css={[positionOverlay(), fillOrange({ mixBlendMode: "multiply" })]}
    {...restProps}
  >
    {children}
  </div>
)
