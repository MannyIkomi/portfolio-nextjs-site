/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  colors,
  flex,
  menubarHeight,
  typography,
  onTabletMedia,
} from "../styles"
import { LogoType } from "./Logo"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { MenuButton } from "./MenuButton"
import { Menu } from "./Menu"

export const StickyMenu = ({ children, ...props }) => {
  const [isToggled, handleToggle] = useToggleSwitch(false)

  const animateToggle = {
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    transitionProperty: "transform, opacity",
    transformOrigin: "right center",
    transform: "rotateY(180deg)",
  }
  const showMenu = [
    {
      width: "100vw",
      height: "100vh",
      padding: `${menubarHeight} 1rem`,
      zIndex: 999,
      position: "absolute",
      top: `calc(${menubarHeight} - 1px)`,
      ...flex("column"),
      alignItems: "flex-end",
      justifyContent: "flex-start",
      ...animateToggle,
    },
    isToggled
      ? {
          transform: "rotateY(0)",
          opacity: 1,
          pointerEvents: "auto",
        }
      : {
          opacity: 0,
          pointerEvents: "none",
        },
    {
      background: colors.muteGray,
      background: `url('../nav-bg-top-right.svg')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      fontFamily: typography.sans,
      ...onTabletMedia({
        width: "50vw",
      }),
    },
  ]
  return (
    <nav
      css={[
        {
          position: "sticky",
          zIndex: 999,
          top: 0,
          left: 0,
          padding: "0.5rem",
          backgroundColor: colors.muteGray,
          ...flex("row"),
          justifyContent: "space-between",
        },
        isToggled ? { overflow: "initial" } : { overflow: "hidden" },
      ]}
    >
      <LogoType
        css={{
          height: `calc(${menubarHeight} - 1rem)`,
          width: "auto",
        }}
      />
      <MenuButton onClick={handleToggle} isToggled={isToggled} />

      <Menu
        css={[
          {
            position: "absolute",
            right: "-1px",
            top: "-1px",
          },
          showMenu,
        ]}
      >
        {children}
      </Menu>
    </nav>
  )
}
