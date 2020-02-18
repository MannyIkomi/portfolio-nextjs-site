/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  colors,
  flex,
  MENUBAR_HEIGHT,
  typography,
  onTabletMedia,
  styleTransition,
  typesetInteraction,
  TOUCH_TARGET,
  SANS_HEADING,
  onMedia,
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

  const togglePointerEvents = [
    isToggled
      ? {
          pointerEvents: "auto",
        }
      : {
          pointerEvents: "none",
        },
  ]

  const slideInOut = [
    isToggled
      ? {
          opacity: 1,
          transform: "translateX(0%)",
        }
      : {
          opacity: 0,
          transform: "translateX(101%)",
        },
  ]

  const menuLink = {
    ...SANS_HEADING,
    color: colors.darkGray,
    padding: "0.5rem",
    marginBottom: TOUCH_TARGET,
    backgroundColor: colors.muteGray,
    boxShadow: "0 0.25rem 1rem 0px rgba(0,0,0,0.5)",
    textTransform: "uppercase",
  }

  return (
    <nav
      id={"mobile"}
      css={[
        {
          position: "sticky",
          zIndex: 99,
          top: 0,
          left: 0,

          padding: "0.5rem",
          maxHeight: MENUBAR_HEIGHT,

          ...flex("row"),
          justifyContent: "space-between",

          backgroundColor: colors.muteGray,
          boxShadow: "0 0.25rem 1rem 0px rgba(0,0,0,0.5)",
          // boxShadow: "-0.25rem 0.25rem 1rem 0px hsla(0, 0%, 0%, 0.5)",
        },
      ]}
    >
      <LogoType
        css={{
          ...styleTransition(),
          ...onMedia("hover: hover", {
            ...typesetInteraction(),
          }),
          width: "8rem",
          maxHeight: `calc(${MENUBAR_HEIGHT} - 1rem)`,
        }}
      />
      <MenuButton onClick={handleToggle} isToggled={isToggled} />

      <div
        css={[
          {
            position: "absolute",
            zIndex: 999,
            top: `calc(${MENUBAR_HEIGHT} - 1px)`,
            right: "0",

            padding: `${TOUCH_TARGET} 0 ${TOUCH_TARGET} ${TOUCH_TARGET}`,

            ...flex("column"),
            alignItems: "flex-end",

            fontFamily: typography.sans,
            overflow: "hidden",
          },
          togglePointerEvents,
        ]}
      >
        {[
          ["Work", "/"],
          ["About", "/about"],
          ["Resume", "/resume"],
        ].map(([label, path]) => (
          <TypesetLink css={[menuLink, transition, slideInOut]} to={path}>
            {label}
          </TypesetLink>
        ))}

        {children}
      </div>
    </nav>
  )
}
