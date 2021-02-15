/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  menuLink,
  styleTransition,
  CODE_TYPE,
} from "../styles"
import { LogoMaster } from "./logo"
import { TypesetLink } from "./TypesetLink"
import { SocialIcon } from "./SocialIcon"
import { useSocialMedia } from "../hooks/useSocialMedia"

export const DesktopMenu = ({ ...restProps }) => {
  const socialMedia = useSocialMedia()
  return (
    <nav
      id={"desktop"}
      css={{
        ...flex("column"),
        alignItems: "center",

        width: "10rem",
        height: "100vh",
        padding: "1rem",

        position: "sticky",
        zIndex: 999,
        top: 0,
        left: 0,

        boxShadow: "0.25rem 0.25rem 1rem 0px rgba(0,0,0,0.5)",
        backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
      }}
    >
      <LogoMaster
        stroke={colors.TURQUOISE}
        css={{
          minWidth: TOUCH_TARGET,
          width: "66%",
          margin: "25%",
        }}
      />
      <div css={{ ...flex("column"), alignItems: "flex-start" }}>
        {[
          ["Work=>", "/"],
          ["About=>", "/about"],
          ["Resume=>", "/resume"],
          // ["Contact=>", "/Contact"],
        ].map(([label, path]) => (
          <TypesetLink
            css={[
              menuLink,
              {
                display: "block",
                // alignSelf: "flex-end",
                ...CODE_TYPE,
                margin: `1rem 0`,
                padding: `0.25rem`,
                textTransform: "uppercase",
              },
            ]}
            to={path}
            key={label}
          >
            {label}
          </TypesetLink>
        ))}
      </div>
      <div
        css={{
          ...flex("row"),
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: "25% 0",
        }}
      >
        {socialMedia.map(social => (
          <SocialIcon
            key={social.platform}
            {...social}
            css={{
              fill: colors.NAVY_BLUE,
              // minWidth: "initial",
              // width: "25%",
            }}
          />
        ))}
      </div>
    </nav>
  )
}
