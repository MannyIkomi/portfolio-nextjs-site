/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { menubarHeight, colors } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"
import { SectionBlock } from "../components/SectionBlock"
import { ContentArea } from "../components/ContentArea"
import Debug from "../components/Debug"

const Experience = props => {
  const {
    url,
    organization,
    roles,
    summary,
    details,
    started,
    ended,
    ...rest
  } = props

  return (
    <article {...rest}>
      <header>
        {organization} - {roles}
        <br />
        {started} - {ended}
      </header>
      <p>{summary}</p>
      <aside>
        <p>{details}</p>
      </aside>
    </article>
  )
}

const ResumeSection = props => {
  const { children, heading, ...rest } = props
  return (
    <article
      css={{
        // borderTop: 'solid',
        margin: "2rem 0",
      }}
      {...rest}
    >
      <h1
        css={{
          fontWeight: "100",
          textAlign: "right",
          color: colors.orange,
        }}
      >
        {heading}
      </h1>
      {children}
    </article>
  )
}

const ResumePage = ({ data }) => {
  const employment = data.allStrapiExperience.nodes.filter(
    exp => exp.isPaid === true
  )
  const volunteering = data.allStrapiExperience.nodes.filter(exp => !exp.isPaid)
  const skills = data.allStrapiExpertise.nodes.filter(
    ({ type }) => type === "skill"
  )
  const tools = data.allStrapiExpertise.nodes.filter(
    ({ type }) => type === "tool"
  )
  const education = data.allStrapiEducation.nodes

  return (
    <Layout>
      <HtmlHead title={"Résumé"} />

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
        <StickyMenuBar>
          <InlineLink to={"/"}>Werk</InlineLink>
          <InlineLink to={"/about"}>About</InlineLink>
          <InlineLink to={"/resume"}>Resume</InlineLink>
          <InlineLink to={"/contact"}>Say Hello</InlineLink>
        </StickyMenuBar>
        {/* <Header siteTitle={"Manny Ikomi"}></Header> */}
        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          <article>
            <header>header</header>
            <ResumeSection id={`#experience`} heading={"Experience"}>
              {employment.map(employer => (
                <Experience {...employer} key={employer.id} />
              ))}
            </ResumeSection>
            <footer>footer</footer>
          </article>
        </main>
      </StickyScrollContainer>
      <Debug {...data} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiExperience {
      nodes {
        summary
        roles
        organization
        ended(fromNow: false)
        started(fromNow: false)
        isPaid
        details
        url
        id
      }
    }
    allStrapiEducation {
      nodes {
        url
        started(fromNow: false)
        school
        ended(fromNow: false)
        description
        concentration
        id
      }
    }
    allStrapiExpertise {
      nodes {
        description
        id
        url
        type
      }
    }
  }
`

export default ResumePage
