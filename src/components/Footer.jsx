/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
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
  grid,
} from "../styles"
import { MENU_LINKS } from "../util/menuLinks"
import { ContainerWidth } from "./ContainerWidth"

export const Footer = props => {
  const socialMedia = useSocialMedia()
  return (
    <footer
      css={{
        backgroundColor: colors.NAVY_BLUE,
        color: colors.LIGHT_GRAY,
        fontFamily: typography.SANS_TYPE,
        padding: "1rem",
        ...onTabletMedia({
          padding: TOUCH_TARGET,
        }),
      }}
    >
      <div
        css={{
          position: "relative",
          minHeight: "100vh",
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

          ...grid12Columns({
            gridTemplateRows: `[content] auto [copyright] min-content`,
            alignItems: "end",
          }),

          ...onTabletMedia({
            minHeight: "50vh",
          }),
        }}
      >
        <LogoMaster
          fill={colors.LIGHT_GRAY}
          stroke={colors.YELLOW}
          css={{
            minWidth: TOUCH_TARGET,
            width: "50%",
            maxWidth: "10rem",
            margin: "1rem 0",
            ...supportsGrid({
              gridColumn: "2 / -1",
              ...onTabletMedia({
                width: "100%",
                gridRow: 1,
                gridColumn: "1 / 3",
                margin: 0,
                marginBottom: "-1rem", //aligns baseline with links
              }),
            }),
          }}
        />

        <div
          css={[
            {
              ...flex("row"),
              alignItems: "center",
              justifyContent: "flex-start",
            },
            supportsGrid({
              gridColumn: "2 / 6",
              gridRow: 2,
              ...onTabletMedia({
                gridRow: 1,
                gridColumn: "-1 / 10 ",
                justifyContent: "flex-end",
              }),
            }),
          ]}
        >
          {socialMedia.map(social => (
            <SocialIcon
              key={social.platform}
              {...social}
              css={{
                svg: { fill: colors.YELLOW },
                marginRight: "1rem",
                maxWidth: "2rem",
                ...supportsGrid(
                  onTabletMedia({ marginLeft: "1rem", marginRight: 0 })
                ),
              }}
            />
          ))}
        </div>
        <ul
          css={[
            flex("column"),
            {
              listStyle: "none",
              alignItems: "flex-start",
            },
            supportsGrid({
              gridColumn: "2 / 6",

              ...onTabletMedia({
                gridRow: 1,
                gridColumn: "4 / 8",
                ...flex("row"),
              }),
            }),
          ]}
        >
          {MENU_LINKS.map(([label, to]) => (
            <li key={label}>
              <TypesetLink
                href={to}
                css={[
                  {
                    padding: "1rem 0",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    textDecorationColor: colors.YELLOW,
                  },
                  onTabletMedia({
                    padding: 0,
                    marginRight: "1rem",
                  }),
                ]}
              >
                {label}
              </TypesetLink>
            </li>
          ))}
        </ul>

        <ContainerWidth
          css={{
            alignSelf: "flex-end",
            ...supportsGrid({
              gridColumn: "1 / -1",
            }),
          }}
        >
          <p
            css={{
              ...CODE_TYPE,
              textAlign: "right",
              fontSize: "0.75rem",
              textTransform: "uppercase",

              opacity: 0.5,

              ...onTabletMedia({
                ...supportsGrid({
                  marginTop: TOUCH_TARGET,
                  textAlign: "left",
                }),
              }),
            }}
          >
            Copyright © {new Date().getFullYear()}
            <br /> Manny Ikomi
          </p>
        </ContainerWidth>
      </div>
    </footer>
  )
}
