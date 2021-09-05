/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import {
  colors,
  flex,
  MENUBAR_HEIGHT,
  typography,
  onTabletMedia,
  styleTransition,
  typesetTransform,
  TOUCH_TARGET,
  SANS_HEADING,
  onMedia,
  CODE_TYPE,
  hoverTypesetTransform,
} from "../styles"
import useToggleSwitch from "../hooks/useToggleSwitch"
import { MenuButton } from "./MenuButton"
import { TypesetLink } from "./TypesetLink"
import { MENU_LINKS } from "../util/menuLinks"

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
    padding: "0.5rem 1rem",
    marginBottom: TOUCH_TARGET,

    ...CODE_TYPE,
    color: colors.NAVY_BLUE,
    backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
    textTransform: "uppercase",
    // boxShadow: "0 0.25rem 1rem 0px rgba(0,0,0,0.5)",
  }

  return (
    <nav
      id={"mobile"}
      css={[
        {
          position: "fixed",
          zIndex: 99,
          top: 0,
          right: 0,

          // padding: "0.5rem",
          // maxHeight: MENUBAR_HEIGHT,

          ...flex("row"),
          justifyContent: "flex-end",
        },
      ]}
    >
      <MenuButton
        css={{ margin: "1rem" }}
        onClick={handleToggle}
        isToggled={isToggled}
      />

      <ul
        css={[
          {
            position: "absolute",
            zIndex: 999,
            top: TOUCH_TARGET,
            right: 0,

            padding: `${TOUCH_TARGET} 0 ${TOUCH_TARGET} ${TOUCH_TARGET}`,

            ...flex("column"),
            alignItems: "flex-end",

            fontFamily: typography.CODE_TYPE,
            fontWeight: 700,
            overflow: "hidden",
          },
          togglePointerEvents,
        ]}
      >
        {MENU_LINKS.map(([label, path]) => (
          <li css={[transition, slideInOut]} key={label}>
            <TypesetLink
              to={path}
              key={label}
              css={[menuLink, { whiteSpace: "nowrap" }]}
            >
              {label}
            </TypesetLink>
          </li>
        ))}

        {children}
      </ul>
    </nav>
  )
}
