import React from "react"
import { LogoMaster } from "./Logo"
import { useSocialMedia } from "../hooks/useSocialMedia"
import { getYear } from "../util/dates"
import { SocialIcon } from "./SocialIcon"
import { InlineLink } from "./InlineLink"

export const Footer = props => {
  const socialMedia = useSocialMedia()
  return (
    <footer>
      <LogoMaster />
      <section>
        <InlineLink to={`mailto:design@mannyikomi.com`}>
          design@
          <wbr />
          mannyikomi.com
        </InlineLink>
        <div>
          {socialMedia.map(social => (
            <SocialIcon key={social.platform} {...social} />
          ))}
        </div>
      </section>
      <section>
        <p>
          Member{` `}
          <InlineLink to={"https://www.aiga.org/"}>AIGA</InlineLink>
          <br />
          <InlineLink to={"/resume"}>Résumé</InlineLink>
          <br />
          <br />
          Oh, and{" "}
          <InlineLink to={"https://github.com/MannyIkomi/portfolio-site"}>
            I code too!
          </InlineLink>
          {` `}🦄
          <br />I built my portfolio site with
          {` `} <br />
          <InlineLink to={"https://reactjs.org/"}>React</InlineLink>,{` `}
          <InlineLink to={"https://strapi.io/"}>Strapi</InlineLink>
          {` `}and{` `}
          <InlineLink to={"https://www.gatsbyjs.org/"}>Gatsby</InlineLink>
          <br /> <br />
          Served with{` `}
          <InlineLink to={"https://www.netlify.com/"}>Netlify</InlineLink>
        </p>
      </section>

      <section> Copyright © {getYear("numeric")} Manny Ikomi</section>
    </footer>
  )
}
