/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { graphql } from "gatsby"

import { menubarHeight } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { InlineLink } from "../components/InlineLink"
import { List } from "../components/List"
import { Footer } from "../components/Footer"
import { SectionBlock } from "../components/SectionBlock"
import { ContentArea } from "../components/ContentArea"
import Debug from "../components/Debug"
import { Expertise } from "../components/Expertise"
import { Experience } from "../components/Experience"
import { ResumeSection } from "../components/ResumeSection"
import { convertEpochToDate } from "../util/dates"
import { Education } from "../components/Education"

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
            <ResumeSection id={`experience`} heading={"Experience"}>
              {employment.map(employer => (
                <Experience {...employer} key={employer.id} />
              ))}
            </ResumeSection>
            <ResumeSection id={`volunteering`} heading={"Volunteering"}>
              {volunteering.map(organization => (
                <Experience {...organization} key={organization.id} />
              ))}
            </ResumeSection>
            <ResumeSection id={`education`} heading={"Education"}>
              {education.map(edu => (
                <Education {...edu} key={edu.id} />
              ))}
            </ResumeSection>
            <ResumeSection id={`skills`} heading={"Skills"}>
              <List>
                {skills.map(skill => (
                  <Expertise {...skill} key={skill.id} />
                ))}
              </List>
            </ResumeSection>
            <ResumeSection id={`tools`} heading={"Tools"}>
              <List>
                {tools.map(tool => (
                  <Expertise {...tool} key={tool.id} />
                ))}
              </List>
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
