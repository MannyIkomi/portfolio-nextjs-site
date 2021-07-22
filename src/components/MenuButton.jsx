/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import { colors, flex, styleTransition, TOUCH_TARGET, onMedia } from "../styles"

export const OpenMenuIcon = ({}) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14L25 14V17L7 17V14Z"
        fill="#4A9497"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7L25 7L25 10L7 10L7 7Z"
        fill="#4A9497"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 21L25 21L25 24L7 24L7 21Z"
        fill="#4A9497"
      />
      <path
        d="M0 0V-3H-3V0H0ZM32 0H35V-3H32V0ZM32 32V35H35V32H32ZM0 32H-3V35H0V32ZM0 3H32V-3H0V3ZM29 0V32H35V0H29ZM32 29H0V35H32V29ZM3 32V0H-3V32H3Z"
        fill="#4A9497"
      />
    </svg>
  )
}

export const CloseMenuIcon = ({}) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.12137 7.00006L24.6777 22.5564L22.5564 24.6777L7.00005 9.12139L9.12137 7.00006Z"
        fill="#4A9497"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.1214 22.5564L22.6778 7.00002L24.7991 9.12134L9.24272 24.6777L7.1214 22.5564Z"
        fill="#4A9497"
      />
      <path
        d="M0 0V-3H-3V0H0ZM32 0H35V-3H32V0ZM32 32V35H35V32H32ZM0 32H-3V35H0V32ZM0 3H32V-3H0V3ZM29 0V32H35V0H29ZM32 29H0V35H32V29ZM3 32V0H-3V32H3Z"
        fill="#4A9497"
      />
    </svg>
  )
}

export const MenuButton = ({ isToggled, ...props }) => {
  return (
    <button
      type={`button`}
      css={[
        {
          // ...flex("column"),
          // justifyContent: "space-between",
          // alignItems: "center",

          backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
          padding: 0,
          margin: 0,
          minWidth: "1rem",

          width: TOUCH_TARGET,
          height: TOUCH_TARGET,

          cursor: "pointer",
        },
      ]}
      {...props}
    >
      {isToggled ? <CloseMenuIcon /> : <OpenMenuIcon />}
    </button>
  )
}
