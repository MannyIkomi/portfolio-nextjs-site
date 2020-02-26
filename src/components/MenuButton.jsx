/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { colors, flex, styleTransition, TOUCH_TARGET } from "../styles"
import { MotifNegative, MotifRight } from "./Motif"

export const MenuButton = ({ isToggled, ...props }) => {
  const distance = "0.66rem"
  const animateHamburger = {
    ".line:nth-of-type(1)": {
      transform: `translateY(${distance}) rotate(45deg)`,
    },
    ".line:nth-of-type(2)": {
      opacity: "0",
    },
    ".line:nth-of-type(3)": {
      transform: `translateY(-${distance}) rotate(-45deg)`,
    },
  }

  const motifToggled = {
    "#motif-negative": {
      fill: "transparent",
    },

    "#motif-right, #motif-left": {
      fill: colors.orange,
    },

    // transform: "rotate(90deg)",
  }
  return (
    <button
      type={`button`}
      css={[
        {
          ...flex("column"),
          justifyContent: "space-between",
          alignItems: "center",

          backgroundColor: "initial",
          padding: 0,
          margin: 0,
          minWidth: "1rem",
          width: "2rem",
          height: "auto",
          maxWidth: TOUCH_TARGET,

          cursor: "pointer",

          "#motif-negative": {
            ...styleTransition(),
            fill: colors.darkGray,
          },
          "#motif-right, #motif-left": {
            ...styleTransition(),
            fill: "transparent",
          },

          ".line": {
            display: "block",
            width: "1.75rem",
            height: "0.1875rem",
            backgroundColor: colors.darkGray,
            // transition: "all 300ms ease-in-out",
            ...styleTransition(),
          },
          ":hover": {
            ".line": {
              backgroundColor: colors.orange,
            },
          },
        },
        isToggled && motifToggled,
      ]}
      {...props}
    >
      <svg
        css={{ width: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80.90195 72.49195"
      >
        <g id="motif-menu" data-name="Layer 1">
          <g id={"motif-negative"}>
            <rect
              class="cls-1"
              x="64.22959"
              y="67.65919"
              width="16.67236"
              height="4.83276"
            />
            <polygon
              class="cls-2"
              points="33.95 19.331 27.344 19.331 27.344 14.499 50.433 14.499 50.433 9.666 12.748 9.666 12.748 4.833 7.552 4.833 7.552 0 0 0 0 38.662 7.552 38.662 7.552 43.495 12.748 43.495 12.748 48.328 50.433 48.328 50.433 53.161 27.344 53.161 27.344 57.994 33.95 57.994 33.95 62.826 80.902 62.826 80.902 33.83 64.23 33.83 64.23 28.997 80.902 28.997 80.902 24.164 33.95 24.164 33.95 19.331"
            />
          </g>
          <g id={"motif-left"} className={"motif"}>
            <polygon
              class="cls-3"
              points="33.95 62.826 33.95 57.994 27.344 57.994 27.344 53.161 50.433 53.161 50.433 48.328 12.748 48.328 12.748 43.495 7.553 43.495 7.553 38.662 0 38.662 0 43.495 0 48.328 0 53.161 0 57.994 0 62.826 0 67.659 0 72.492 64.23 72.492 64.23 67.659 80.902 67.659 80.902 62.826 33.95 62.826"
            />
          </g>

          <g id={"motif-right"} className={"motif"}>
            <rect
              class="cls-4"
              x="64.22998"
              y="28.99683"
              width="16.67188"
              height="4.83276"
            />
            <polygon
              class="cls-4"
              points="7.553 0 7.553 4.833 12.748 4.833 12.748 9.666 50.433 9.666 50.433 14.499 27.344 14.499 27.344 19.331 33.95 19.331 33.95 24.164 80.902 24.164 80.902 19.331 80.902 14.499 80.902 9.666 80.902 4.833 80.902 0 7.553 0"
            />
          </g>
        </g>
      </svg>
      {/* 
      <MotifNegative
        css={{
          width: "100%",
          // height: "100%",
        }}
      />
       */}
      {/* <span className="line" />
      <span className="line" />
      <span className="line" /> */}
    </button>
  )
}
