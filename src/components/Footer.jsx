/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import { LogoMaster } from "./Logo"
import { useSocialMedia } from "../hooks/useSocialMedia"
import { SocialIcon } from "./SocialIcon"
import { TypesetLink } from "./TypesetLink"
import {
  flex,
  colors,
  typography,
  onTabletMedia,
  supportsGrid,
  styleTransition,
  TOUCH_TARGET,
  CODE_TYPE,
  maxContainerWidth,
  grid12Columns,
  onSupport,
  TINT_TURQUOISE,
  grid,
  onMediaWidth,
} from "../styles"
import { MENU_LINKS } from "../util/menuLinks"
import { ContainerWidth } from "./ContainerWidth"

export const Footer = props => {
  const socials = useSocialMedia()
  return (
    <footer
      css={[
        {
          // backgroundColor: colors.LIGHT_GRAY_FOREGROUND,
          color: colors.PRIMARY,
          fontFamily: typography.SANS_TYPE,
          padding: "1rem",
        },
        onMediaWidth("70rem", { position: "sticky", bottom: 0 }),
      ]}
      {...props}
    >
      <div
        css={{
          // minHeight: "100vh",
          ...maxContainerWidth,
          margin: "auto",

          ...flex(),
          alignItems: "flex-start",
          justifyContent: "space-around",

          section: {
            margin: "2rem 0",
          },
          p: {
            fontFamily: typography.SANS_TYPE,
          },
        }}
      >
        <LogoMaster
          fill={colors.PRIMARY}
          stroke={colors.ACCENT}
          css={{
            minWidth: TOUCH_TARGET,
            maxWidth: "6rem",
            margin: "1rem 0",
          }}
        />

        <ul
          css={[
            {
              ...flex("column"),
              padding: 0,
              li: { listStyle: "none", "::marker": { content: '""' } },
            },
          ]}
        >
          {socials.map(platform => {
            return (
              <li key={platform.label}>
                <SocialIcon {...platform} />
              </li>
            )
          })}
        </ul>

        <ContainerWidth>
          <p
            css={{
              ...CODE_TYPE,
              fontSize: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            <small css={{ color: colors.TINT_TURQUOISE }}>
              Copyright © {new Date().getFullYear()}
              <br /> Manny Ikomi
            </small>
          </p>
        </ContainerWidth>
      </div>
    </footer>
  )
}
