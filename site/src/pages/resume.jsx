/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { menubarHeight, colors, typography } from "../styles"
import { formatDate } from "../util/dates"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"
import { Markdown } from "../components/markdown"
import { SectionBlock } from "../components/SectionBlock"
import { ContentArea } from "../components/ContentArea"
import Debug from "../components/Debug"
import useToggleSwitch from "../hooks/useToggleSwitch"

export const TimeFrame = ({ start, end, styles, ...props }) => {
  const getMonthYear = date =>
    formatDate({ month: "long", year: "numeric" }, date)
  return (
    <span
      css={{
        fontFamily: typography.sans,
        fontSize: "0.9rem",
        fontStyle: "italic",
        ...styles,
      }}
    >
      {getMonthYear(start)} — {end ? getMonthYear(end) : "Present"}
    </span>
  )
}

export const Entity = props => {
  const { url, title, styles, children, ...rest } = props

  const headingStyle = {
    // textTransform: "initial",
    // fontFamily: typography.sans,
    // fontSize: "1.5rem",
  }
  return (
    <>
      {url ? (
        <InlineLink to={url}>
          <h2 css={headingStyle}>{children || title}</h2>
        </InlineLink>
      ) : (
        <h2 css={{ headingStyle, ...styles }}>{children || title}</h2>
      )}
    </>
  )
}

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
  const [toggled, setToggle] = useToggleSwitch(false)

  return (
    <article {...rest}>
      <header>
        <Entity url={url}>{organization}</Entity>
        <br />
        {roles}
        <br />
        <TimeFrame
          styles={{
            fontFamily: typography.sans,
            fontStyle: "italic",
          }}
          start={started}
          end={ended}
        />
      </header>
      {summary && <Markdown>{summary}</Markdown>}

      {details && toggled && (
        <>
          <Markdown>{details}</Markdown>
        </>
      )}
      {details && (
        <button onClick={() => (toggled ? setToggle(false) : setToggle(true))}>
          {toggled ? "Close" : `More on ${organization}…`}
        </button>
      )}
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
