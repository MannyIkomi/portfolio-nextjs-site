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
import { TypesetLink } from "./TypesetLink"

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
          maxHeight: menubarHeight,

          ...flex("row"),
          justifyContent: "space-between",
          // alignItems: "center",
          // overflowX: "hidden",
          // overflowY: "visible",
          backgroundColor: colors.muteGray,
          boxShadow: "0 0.25rem 1rem 0px rgba(0,0,0,0.5)",
          // boxShadow: "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.5)",
        },
      ]}
    >
      <LogoType
        css={{
          ...styleTransition(),
          ...typesetInteraction(),
          width: "8rem",
          // maxHeight: `calc(${menubarHeight} - 1rem)`,
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

            // boxShadow: "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.85)",
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
        <TypesetLink css={{ padding: "1rem" }} to={"/"}>
          Werk
        </TypesetLink>
        <TypesetLink css={{ padding: "1rem" }} to={"/about"}>
          About
        </TypesetLink>
        <TypesetLink css={{ padding: "1rem" }} to={"/resume"}>
          Resume
        </TypesetLink>
        {/* <TypesetLink css={{ padding: "1rem" }} to={"/contact"}>
          Say Hello
        </TypesetLink> */}
        {children}
      </div>
    </nav>
  )
}
