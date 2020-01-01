/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {
  supportsGrid,
  colors,
  flex,
  menubarHeight,
  typography,
} from "../styles"
import { LogoType } from "../components/Logo"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { InlineLink } from "../components/InlineLink"
import useToggleSwitch from "../hooks/useToggleSwitch"

const MenuButton = ({ isToggled, ...props }) => {
  const distance = "0.66rem"

  const animateHamburger = {
    ".line:nth-of-type(1)": {
      transform: `translateY(${distance}) rotate(45deg)`,
    },
    ".line:nth-of-type(2)": {
      opacity: "0",
    },
    ".line:nth-of-type(3)": {
      transform: `translateY(-${distance}) rotate(-45deg)`,
    },
  }
  return (
    <button
      type={`button`}
      // onClick={handleToggle}
      css={[
        {
          backgroundColor: "initial",
          padding: 0,
          margin: 0,
          cursor: "pointer",

          ...flex("column"),
          justifyContent: "space-between",
          alignItems: "center",

          ".line": {
            width: "2rem",
            height: "0.1875rem",
            backgroundColor: colors.darkGray,
            display: "block",
            // margin: '0.5rem auto',
            transition: "all 0.5s ease-in-out",
          },
        },
        isToggled && animateHamburger,
      ]}
      {...props}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </button>
  )
}
const Menu = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

const StickyMenu = ({ children, ...props }) => {
  const [isToggled, handleToggle] = useToggleSwitch(false)

  const showMenu = [
    {
      zIndex: 999,
      position: "absolute",
      top: menubarHeight,
      // bottom: 0,
      ...flex("column"),
      // flexWrap: "nowrap",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      // ...animateToggle,
    },
    isToggled
      ? "transform: rotateY(0); opacity: 1; pointer-events: auto;"
      : "opacity: 0; pointer-events: none;",

    {
      width: "50vw",
      height: "100vh",
      padding: `${menubarHeight} 1rem`,

      background: colors.muteGray,
      background: `url('../nav-bg-top-right.svg')`,

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      fontFamily: typography.sans,

      /* [`@media (${tabletMediaWidth})`]: {
        bottom: "initial",
        top: "0",
        right: "0",

        flexWrap: "nowrap",
        justifyContent: "flex-start",
        width: "66%",

        background: colors.muteGray,
        background: `url('/static/nav-bg-top-right.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      },

      [`@media screen and (orientation: landscape) and (max-height: 450px) `]: {
        background: colors.muteGray,
        width: "100%",
        ...mixin.flex("row"),
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }, */
    },
  ]

  return (
    <nav
      css={{
        top: 0,
        left: 0,
        position: "sticky",
        padding: "0.5rem",
        zIndex: 9999,
        backgroundColor: colors.muteGray,
        ...flex("row"),
        justifyContent: "space-between",
      }}
    >
      <LogoType
        css={{
          height: `calc(${menubarHeight} - 1rem)`,
          width: "auto",
        }}
      />
      <MenuButton onClick={handleToggle} isToggled={isToggled} />

      <Menu
        css={[
          {
            position: "absolute",
            right: 0,
            top: 0,
          },
          showMenu,
        ]}
      >
        {children}
      </Menu>
    </nav>
  )
}
const IndexPage = ({ data }) => {
  const projects = data.allStrapiProjects.nodes

  // Window.matchMatch(CSSMediaQuery via JS)
  return (
    <Layout>
      <HtmlHead title="Home" />
      <StickyScrollContainer
        css={{
          "::before": {
            content: "",
            display: "block",
            width: "100%",
            maxHeight: menubarHeight,
          },
        }}
      >
        <StickyMenu>
          <InlineLink to={"/"}>werk</InlineLink>
        </StickyMenu>
        <Header siteTitle={"Manny Ikomi"}></Header>
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          <Gallery>
            {projects.map(project => (
              <ProjectCover {...project} key={project.id} />
            ))}
          </Gallery>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProjects(sort: { fields: created_at }) {
      nodes {
        # add {completed} field to keep rendering in chronological order
        id
        coverAlt
        title
        updated_at
        created_at
        description
        slug
        cover {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
