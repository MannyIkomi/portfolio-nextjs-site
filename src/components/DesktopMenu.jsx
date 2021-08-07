/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

import {
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  menuLink,
  styleTransition,
  onHover,
  CODE_TYPE,
  typeset,
} from "../styles"
import { LogoMaster } from "./Logo"
import { TypesetLink } from "./TypesetLink"
import { SocialIcon } from "./SocialIcon"
import { useSocialMedia } from "../hooks/useSocialMedia"
import { MENU_LINKS } from "../util/menuLinks"

export const DesktopMenu = ({ ...restProps }) => {
  // const socialMedia = useSocialMedia()
  return (
    <nav
      id={"desktop"}
      css={{
        ...flex("column"),
        alignItems: "flex-start",

        width: "10rem",
        height: "100vh",
        padding: "1rem",

        position: "sticky",
        zIndex: 999,
        top: 0,
        left: 0,

        boxShadow: "0.25rem 0.25rem 5rem 0px rgba(0,0,0,0.33)",
        backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
      }}
    >
      <LogoMaster
        stroke={colors.TURQUOISE}
        css={{
          minWidth: TOUCH_TARGET,
          width: "66%",
          margin: "25% 0",

          ...onHover({
            ...typeset,
          }),
        }}
      />
      <ul css={{ ...flex("column"), alignItems: "flex-start" }}>
        {MENU_LINKS.map(([label, path]) => (
          <li key={label}>
            <TypesetLink
              css={[
                menuLink,
                {
                  display: "block",
                  margin: `1rem 0`,
                  padding: `0.25rem`,

                  ...CODE_TYPE,
                  fontWeight: 800,
                  textTransform: "uppercase",
                },
              ]}
              to={path}
              key={label}
            >
              {label}
            </TypesetLink>
          </li>
        ))}
      </ul>
      {/* <div
        css={{
          ...flex("column"),
          alignItems: "flex-start",
          justifyContent: "space-between",
          // width: "50%",
          margin: "25% 0",
        }}
      >
        {socialMedia.map(social => (
          <SocialIcon
            key={social.platform}
            {...social}
            css={{
              fill: colors.NAVY_BLUE,
              width: "2rem",
              minWidth: "initial",
              // width: "25%",
            }}
          />
        ))}
      </div> */}
    </nav>
  )
}
