/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
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
} from "../styles"
import { MotifRight } from "./Motif"

export const Footer = props => {
  const socialMedia = useSocialMedia()
  return (
    <footer
      css={{
        position: "relative",
        // overflow: "visible hidden",

        minHeight: "100vh",

        ...flex(),
        alignItems: "center",
        justifyContent: "space-around",

        color: colors.muteGray,
        backgroundColor: colors.darkGray,
        fontFamily: typography.sans,
        textAlign: "center",

        section: {
          margin: "2rem 0",
        },
        p: {
          fontFamily: typography.sans,
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
      <MotifRight
        css={{
          position: "absolute",
          bottom: "calc(100% - 1px)",
          right: "0",

          transform: "rotateX(180deg)",
          width: "12.5%",

          fill: colors.darkGray,
        }}
      />
      <LogoMaster
        css={{
          minWidth: TOUCH_TARGET,
          maxWidth: "20rem",

          width: "33%",

          svg: {
            ...styleTransition(),
            fill: colors.muteGray,
          },

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
      <section css={{ ...flex("column"), alignItems: "center" }}>
        <TypesetLink to={`mailto:design@mannyikomi.com`}>
          design@
          <wbr />
          mannyikomi.com
        </TypesetLink>
        <div
          css={{
            ...flex("row"),
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {socialMedia.map(social => (
            <SocialIcon
              key={social.platform}
              {...social}
              css={{
                svg: { fill: "white" },
                margin: "1rem",
                maxWidth: TOUCH_TARGET,
              }}
            />
          ))}
        </div>
      </section>
      <section>
        <p>
          Oh, and{" "}
          <TypesetLink to={"https://github.com/MannyIkomi/portfolio-site"}>
            I code too!
          </TypesetLink>
          {` `}🦄
          <br />
          <br />I built my portfolio site with
          {` `} <br />
          <TypesetLink to={"https://reactjs.org/"}>React</TypesetLink>,{` `}
          <TypesetLink to={"https://strapi.io/"}>Strapi</TypesetLink>
          {` `}and{` `}
          <TypesetLink to={"https://www.gatsbyjs.org/"}>Gatsby</TypesetLink>
          <br />
          Deployed with{` `}
          <TypesetLink to={"https://www.netlify.com/"}>Netlify</TypesetLink>
        </p>
      </section>

      <section>
        <p>
          Member{` `}
          <TypesetLink to={"https://www.aiga.org/"}>AIGA</TypesetLink>
          <br />
          <TypesetLink to={"/resume"}>Résumé</TypesetLink>
        </p>
        <br />
        <footer>Copyright © {new Date().getFullYear()} Manny Ikomi</footer>
      </section>
    </footer>
  )
}
