/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { colors, flex, styleTransition } from "../styles"

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

          cursor: "pointer",

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
        isToggled && animateHamburger,
      ]}
      {...props}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </button>
  )
}
