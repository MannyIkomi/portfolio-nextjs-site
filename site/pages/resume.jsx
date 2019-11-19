/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import Axios from 'Axios'
import { cms } from '../util/http'
import { ulStyles, typography } from '../styles'

import PageLayout from '../components/pageLayout'
import Debug from '../components/Debug'
import { Education } from '../components/resume/Education'
import { Expertise } from '../components/resume/Expertise'
import { ResumeSection } from '../components/resume/ResumeSection'
import { Experience } from '../components/resume/Experience'

const Resume = ({ education, experience, expertise }) => {
  const work = experience.filter(exp => exp.isPaid === true)
  const volunteering = experience.filter(exp => !exp.isPaid)
  const skills = expertise.filter(({ type }) => type === 'skill')
  const tools = expertise.filter(({ type }) => type === 'tool')

  return (
    <PageLayout
      hasSideMenu={false}
      persistDockedMenu={true}
      title={`Résumé — Manny Ikomi`}
      description={`Manny Ikomi's work experience, education, volunteer work, skills and tools`}
    >
      <nav
        css={{
          margin: 'auto',
          a: { padding: '0.5rem' },
          ...typography.maxReadingWidth
        }}
      >
        <a href="#experience">Work Experience</a>
        <a href="#volunteering">Volunteering</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#tools">Tools</a>
      </nav>
      <article
        css={{ padding: '1rem', ...typography.maxReadingWidth, margin: 'auto' }}
      >
        <header>
          <h1>Resume</h1>
        </header>
        <main>
          <ResumeSection>
            <h1 id="experience">Experience</h1>
            {work.map(exp => (
              <Experience {...exp} key={exp.organization} />
            ))}
          </ResumeSection>
          <ResumeSection>
            <h1 id="volunteering">Volunteering</h1>
            {volunteering.map(exp => (
              <Experience {...exp} key={exp.organization} />
            ))}
          </ResumeSection>
          <ResumeSection>
            <h1 id="education">Education</h1>
            {education.map(edu => (
              <Education {...edu} />
            ))}
          </ResumeSection>
          <ResumeSection>
            <h1 id="skills">Skills</h1>
            <ul css={ulStyles}>
              {/* sort alphabetically ? */}
              {skills.map(skill => (
                <Expertise {...skill} />
              ))}
            </ul>
          </ResumeSection>
          <ResumeSection>
            <h1 id="tools">Tools</h1>
            <ul css={ulStyles}>
              {tools.map(tool => (
                <Expertise {...tool} />
              ))}
            </ul>
          </ResumeSection>
        </main>
        <footer>footer ?</footer>
        <Debug {...education} />
        <Debug {...expertise} />
      </article>
    </PageLayout>
  )
}

Resume.getInitialProps = async context => {
  // const { query } = context
  const getEducation = () => cms(`/educations`)
  const getExperience = () => cms(`/experiences`)
  const getExpertise = () => cms('/expertise')

  try {
    const [education, experience, expertise] = await Axios.all([
      getEducation(),
      getExperience(),
      getExpertise()
    ])
    // console.log('RESPONSE', response)

    return {
      education: education.data,
      experience: experience.data,
      expertise: expertise.data
    }
  } catch (err) {
    console.error(err)
    // const projects = mockGraphqlData.data.projects.filter(
    //   project => project.slug.toUpperCase() === query.slug.toUpperCase()
    // )
    // return { project: projects[0] }
  }
}

export default Resume
