import React, { Component } from 'react'
import PageLayout from '../components/pageLayout'
import Axios from 'Axios'
import { cms } from '../util/http'
import Markdown from '../components/markdown'

const Resume = ({ education, experience, expertise }) => {
  console.log(experience)
  return (
    <PageLayout hasSideMenu={false} persistDockedMenu={true}>
      <article>
        <header>
          <h1>Resume</h1>
        </header>

        <main>
          <section>
            <h1>experience</h1>
            {experience.map(exp => {
              const organization = exp.url ? (
                <a href={exp.url}>
                  <h2>{exp.organization}</h2>
                </a>
              ) : (
                <h2>{organization}</h2>
              )

              return (
                <React.Fragment key={exp.organization}>
                  {organization}
                  <span>{exp.roles}</span>
                  <br />
                  <span>{exp.started}</span>
                  <Markdown>{exp.description}</Markdown>
                </React.Fragment>
              )
            })}
          </section>
          <section>
            <h1>education</h1>
          </section>
          <section>
            <h1>skills</h1>
          </section>
          <section>
            <h1>tools</h1>
          </section>
        </main>
        <footer></footer>
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
