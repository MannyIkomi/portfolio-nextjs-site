/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  colors,
  flex,
  menubarHeight,
  typography,
  onTabletMedia,
  styleTransition,
  typesetInteraction,
} from "../styles"
import { LogoType } from "./Logo"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { MenuButton } from "./MenuButton"

export const StickyMenuBar = ({ children, ...props }) => {
  const [isToggled, handleToggle] = useToggleSwitch(false)

  const transition = {
    ...styleTransition(),
    transformOrigin: "right center",
    transform: "rotateY(90deg)", // hides menu from view but doesnt overflow parent container
  }
  const toggleTransition = [
    isToggled
      ? {
          transform: "rotateY(0)",
          opacity: 1,
          pointerEvents: "auto",
        }
      : {
          transform: "rotateY(90deg)",
          opacity: 0,
          pointerEvents: "none",
        },
  ]

  return (
    <nav
      css={[
        {
          position: "sticky",
          zIndex: 99,
          top: 0,
          left: 0,
          padding: "0.5rem",
          backgroundColor: colors.muteGray,
          ...flex("row"),
          justifyContent: "space-between",
          // overflowX: "hidden",
          // overflowY: "visible",
        },
      ]}
    >
      <LogoType
        css={{
          ...styleTransition(),
          ...typesetInteraction(),
          height: `calc(${menubarHeight} - 1rem)`,
          width: "auto",
        }}
      />
      <MenuButton onClick={handleToggle} isToggled={isToggled} />

      <div
        css={[
          {
            position: "absolute",
            zIndex: 999,
            top: `calc(${menubarHeight} - 2px)`,
            right: "-1px",

            width: "100vw",
            height: "100vh",
            padding: `${menubarHeight} 1rem`,

            ...flex("column"),
            alignItems: "flex-end",
            justifyContent: "flex-start",

            background: colors.muteGray,
            background: `url('../nav-bg-top-right.svg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",

            fontFamily: typography.sans,
          },
          [transition, toggleTransition],
          {
            ...onTabletMedia({
              width: "50vw",
            }),
          },
        ]}
      >
        {children}
      </div>
    </nav>
  )
}
