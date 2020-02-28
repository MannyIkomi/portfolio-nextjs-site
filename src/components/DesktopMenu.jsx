/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useEffect, useState } from "react"
import {
  TOUCH_TARGET,
  colors,
  SANS_HEADING,
  flex,
  menuLink,
  styleTransition,
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
        backgroundColor: colors.muteGray,
      }}
    >
      <LogoMaster
        css={{
          minWidth: TOUCH_TARGET,
          textAlign: "center",
          width: "50%",
          margin: "25%",
          svg: {
            ...styleTransition(),
            fill: colors.darkGray,
          },
        }}
      />
      {[
        ["Work", "/"],
        ["About", "/about"],
        ["Résumé", "/resume"],
      ].map(([label, path]) => (
        <TypesetLink
          css={[
            menuLink,
            {
              display: "block",
              // alignSelf: "flex-end",
              margin: `1rem 0`,
              padding: `0.25rem`,
              ...SANS_HEADING,
              textTransform: "uppercase",
            },
          ]}
          to={path}
          key={label}
        >
          {label}
        </TypesetLink>
      ))}

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
              svg: { fill: colors.darkGray },
              minWidth: "initial",
              width: "25%",
            }}
          />
        ))}
      </div>
    </nav>
  )
}
