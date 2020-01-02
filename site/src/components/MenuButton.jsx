/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { colors, flex } from "../styles"

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
          backgroundColor: "initial",
          padding: 0,
          margin: 0,
          cursor: "pointer",
          ...flex("column"),
          justifyContent: "space-between",
          alignItems: "center",
          ".line": {
            display: "block",
            width: "1.75rem",
            height: "0.1875rem",
            backgroundColor: colors.darkGray,
            transition: "all 300ms ease-in-out",
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
