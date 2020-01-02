/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { LogoMaster } from "./Logo"
import { useSocialMedia } from "../hooks/useSocialMedia"
import { SocialIcon } from "./SocialIcon"
import { InlineLink } from "./InlineLink"
import {
  flex,
  colors,
  typography,
  onTabletMedia,
  supportsGrid,
} from "../styles"

export const Footer = props => {
  const socialMedia = useSocialMedia()
  return (
    <footer
      css={{
        minHeight: "100vh",

        ...flex(),
        alignItems: "center",
        justifyContent: "space-between",

        color: colors.muteGray,
        backgroundColor: colors.darkGray,
        fontFamily: typography.sans,

        section: {
          margin: "2rem 0",
        },

        ...onTabletMedia({
          ...supportsGrid({
            gridTemplateAreas: `'logo social' 'code quote'`,
            gridTemplateColumns: "1fr 1fr",
            gridGap: "2rem",
            padding: "4rem",
            justifyContent: "stretch",
          }),
        }),
      }}
    >
      <LogoMaster
        css={{
          width: "25%",

          margin: "2rem 0",
          "@media screen and (min-width: 500px)": {
            maxWidth: "10rem",

            ...onTabletMedia({
              ...supportsGrid({
                gridArea: "logo",
                width: "8rem",
                margin: "auto",
              }),
            }),
          },
        }}
      />
      <section>
        <InlineLink to={`mailto:design@mannyikomi.com`}>
          design@
          <wbr />
          mannyikomi.com
        </InlineLink>
        <div
          css={{
            ...flex("row"),
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {socialMedia.map(social => (
            <SocialIcon key={social.platform} {...social} />
          ))}
        </div>
      </section>
      <section>
        <p>
          Oh, and{" "}
          <InlineLink to={"https://github.com/MannyIkomi/portfolio-site"}>
            I code too!
          </InlineLink>
          {` `}🦄
          <br />
          <br />I built my portfolio site with
          {` `} <br />
          <InlineLink to={"https://reactjs.org/"}>React</InlineLink>,{` `}
          <InlineLink to={"https://strapi.io/"}>Strapi</InlineLink>
          {` `}and{` `}
          <InlineLink to={"https://www.gatsbyjs.org/"}>Gatsby</InlineLink>
          <br />
          Served with{` `}
          <InlineLink to={"https://www.netlify.com/"}>Netlify</InlineLink>
        </p>
      </section>

      <section>
        <p>
          Member{` `}
          <InlineLink to={"https://www.aiga.org/"}>AIGA</InlineLink>
          <br />
          <InlineLink to={"/resume"}>Résumé</InlineLink>
        </p>
        <br />
        <footer>Copyright © {new Date().getFullYear()} Manny Ikomi</footer>
      </section>
    </footer>
  )
}
