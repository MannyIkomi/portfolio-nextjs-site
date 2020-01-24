/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { graphql } from "gatsby"

import { menubarHeight, flex, colors } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { TypesetLink } from "../components/TypesetLink"
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
    ({ isPaid, draft }) => isPaid && !draft
  )
  const volunteering = data.allStrapiExperience.nodes.filter(exp => !exp.isPaid)
  const skills = data.allStrapiExpertise.nodes.filter(
    ({ type, draft }) => type === "skill" && !draft
  )
  const tools = data.allStrapiExpertise.nodes.filter(
    ({ type, draft }) => type === "tool" && !draft
  )
  const education = data.allStrapiEducation.nodes.filter(
    ({ certification, draft }) => !certification && !draft
  )
  const certificates = data.allStrapiEducation.nodes.filter(
    ({ certification, draft }) => certification && !draft
  )

  return (
    <Layout>
      <HtmlHead
        title={"Résumé"}
        description={`Work experience, education, volunteer work, skills and go-to tools`}
      />

      <StickyScrollContainer>
        <StickyMenuBar />
        <main>
          <article
            css={{
              ...flex(),
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.muteGray,
            }}
          >
            <header>
              <nav
                css={{
                  ...flex("row"),
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  padding: "1rem",
                }}
              >
                <TypesetLink css={{ padding: "1rem" }} to={"#experience"}>
                  Experience
                </TypesetLink>
                <TypesetLink css={{ padding: "1rem" }} to={"#education"}>
                  Education
                </TypesetLink>
                <TypesetLink css={{ padding: "1rem" }} to={"#certifications"}>
                  Certifications
                </TypesetLink>
                <TypesetLink css={{ padding: "1rem" }} to={"#volunteering"}>
                  Volunteering
                </TypesetLink>
                <TypesetLink css={{ padding: "1rem" }} to={"#skills"}>
                  Skills
                </TypesetLink>
                <TypesetLink css={{ padding: "1rem" }} to={"#tools"}>
                  Tools
                </TypesetLink>
              </nav>
            </header>
            <ContentArea>
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
              <ResumeSection id={`certifications`} heading={"Certifications"}>
                {certificates.map(edu => (
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
              {/* <footer>resume footer</footer> */}
            </ContentArea>
          </article>
        </main>
      </StickyScrollContainer>
      {/* <Debug {...data} /> */}
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
        draft
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
        draft
        description
        concentration
        id
        certification
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
