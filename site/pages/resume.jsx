/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Component } from 'react'

import Axios from 'Axios'
import { cms } from '../util/http'
import { formatDate } from '../util/dates'
import { typography, colors, ulStyles, mixin } from '../styles'

import PageLayout from '../components/pageLayout'
import Debug from './Debug'
import Markdown from '../components/markdown'
import useToggleSwitch from '../hooks/useToggleSwitch'

const Entity = ({ url, title, styles, ...props }) => {
  const headingStyle = {
    textTransform: 'initial',
    fontFamily: typography.sans,
    fontSize: '1.5rem'
  }
  return (
    <React.Fragment>
      {url ? (
        <a
          href={url}
          css={{
            ...typography.linkStyles,
            ...typography.typesetAnimation,
            ...styles
          }}
        >
          <h2 css={headingStyle}>{title}</h2>
        </a>
      ) : (
        <h2 css={{ headingStyle, ...styles }}>{title}</h2>
      )}
    </React.Fragment>
  )
}

const TimeFrame = ({ start, end, styles, ...props }) => {
  const getMonthYear = date =>
    formatDate({ month: 'long', year: 'numeric' }, date)

  return (
    <span
      css={{
        fontFamily: typography.sans,
        fontSize: '0.9rem',
        fontStyle: 'italic',
        ...styles
      }}
    >
      {getMonthYear(start)} — {end ? getMonthYear(end) : 'Present'}
    </span>
  )
}

const ToggleButton = ({ toggled, handleClick, children, styles, ...props }) => {
  return (
    <button
      css={[
        {
          display: 'block'
        },
        styles
      ]}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  )
}

const Experience = ({
  url,
  organization,
  roles,
  summary,
  details,
  started,
  ended
}) => {
  const [toggled, setToggle] = useToggleSwitch(false)
  return (
    <section
      css={{
        ...mixin.flex('column'),
        position: 'relative'
      }}
    >
      <header
        css={{
          ...mixin.positionSticky(),
          background: colors.muteGray,
          padding: '0.5rem 0',
          borderBottom: `0.1rem solid ${colors.darkGray20}`
        }}
      >
        <Entity
          title={organization}
          url={url}
          // styles={}
        />
        <br />
        <span
          css={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
        >
          {roles}
        </span>{' '}
        <br />
        <TimeFrame
          styles={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
          start={started}
          end={ended}
        />
      </header>
      <main>
        {summary && <Markdown>{summary}</Markdown>}
        {/* {details && <React.Fragment>&hellip;</React.Fragment>} */}
        {details && toggled && (
          <React.Fragment>
            <hr css={{ color: colors.darkGray20 }} />
            <Markdown
              styles={{
                padding: '0 1rem',
                'h2,h3,h4,h5': {
                  fontFamily: typography.sans,
                  textTransform: 'capitalize'
                }
              }}
            >
              {details}
            </Markdown>
          </React.Fragment>
        )}
      </main>

      {details && (
        <ToggleButton
          styles={{
            fontFamily: typography.sans,
            fontSize: '1rem',
            backgroundColor: colors.darkGray20,
            color: colors.darkGray,
            // borderTop: `0.1rem solid ${colors.orange}`,
            borderBottom: `0.1rem solid ${colors.orange}`,

            padding: '0.5rem'
            // alignSelf: 'flex-end'
          }}
          handleClick={setToggle}
        >
          {toggled ? (
            'Close'
          ) : (
            <React.Fragment>More on {organization}&hellip;</React.Fragment>
          )}
        </ToggleButton>
      )}
    </section>
  )
}

const Education = ({
  school,
  started,
  ended,
  description,
  concentration,
  details,
  ...props
}) => {
  return (
    <section>
      <header
        css={{
          ...mixin.positionSticky(),
          background: colors.muteGray,
          padding: '0.5rem 0',
          borderBottom: `0.1rem solid ${colors.darkGray20}`
        }}
      >
        <Entity title={school} {...props} />
        <br />
        <span
          css={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
        >
          {concentration}
        </span>{' '}
        <TimeFrame start={started} end={ended} />
      </header>
      <main>
        <Markdown>{description}</Markdown>
      </main>

      {details && (
        <ToggleButton
          styles={{
            fontFamily: typography.sans,
            fontSize: '1rem',
            backgroundColor: colors.darkGray20,
            color: colors.darkGray,
            // borderTop: `0.1rem solid ${colors.orange}`,
            borderBottom: `0.1rem solid ${colors.orange}`,

            padding: '0.5rem'
            // alignSelf: 'flex-end'
          }}
          handleClick={setToggle}
        >
          {toggled ? (
            'Close'
          ) : (
            <React.Fragment>More on {organization}&hellip;</React.Fragment>
          )}
        </ToggleButton>
      )}
    </section>
  )
}

const Expertise = ({ description, url }) => {
  return (
    <li css={{ whiteSpace: 'pre-wrap' }}>
      {url ? (
        <a
          href={url}
          css={{
            display: 'inline',
            ...typography.linkStyles,
            ...typography.typesetAnimation
          }}
        >
          {description}
        </a>
      ) : (
        description
      )}
    </li>
  )
}

const ResumeSection = ({ styles, children, ...props }) => {
  return (
    <article
      css={{
        borderTop: 'solid',
        margin: '2rem 0',
        h1: {
          fontWeight: '100',
          textAlign: 'right',
          color: colors.orange
        },
        ...styles
      }}
    >
      {children}
    </article>
  )
}

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
      <nav>
        <a href="#experience">Work Experience</a>
        <a href="#volunteering">Volunteering</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#tools">Tools</a>
      </nav>
      <article css={{ padding: '1rem' }}>
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
