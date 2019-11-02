/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

// Components
import PageLayout from '../components/pageLayout'
import { ImageModule } from '../components/project/ImageModule'
import { TextModule } from '../components/project/TextModule'

// Utility
import { mixin, typography, colors } from '../styles'
import { cms } from '../util/http'
import { projectProps } from '../util/props'

const renderModules = modules => {
  return modules.map(module => {
    switch (module.type) {
      case 'image':
        return <ImageModule module={module} key={module.id} />
      case 'text':
        return <TextModule module={module} key={module.id} />
      default:
        throw new Error(
          `Could not find matching Component for Module:${module.type}`
        )
    }
  })
}

const ProjectPage = props => {
  const { project } = props
  const { title, description, modules, slug } = project

  const projectView = css`
    ${mixin.flex('column')}
    align-items: center;
    background: ${colors.muteGray};
  `

  const headingStyle = css`
    ${mixin.flex('column')}
    align-items: center;

    min-height: 50vh;
    padding: 2rem;
    text-align: center;
    h1 {
      font-family: ${typography.sans};
      font-weight: 800;
      text-transform: initial;
    }
    h2 {
      font-family: ${typography.serif};
      font-size: 1.5rem;
      font-weight: 300;
      font-style: italic;
      text-transform: initial;
    }
  `
  return (
    <PageLayout
      title={`${project.title} by Manny`}
      description={`${project.title}, ${project.description} by Manny Ikomi`}
      isSideMenuDisabled={true}
      persistDockedMenu={true}
    >
      <article css={projectView}>
        <header css={headingStyle}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </header>
        <main
          css={css`
            margin: 2rem 0;
            background-color: ${colors.darkGray};
            padding: 0 2rem;
            width: 100%;
          `}
        >
          <div // offset modules to overlap the heading area
            css={css`
              position: relative;
              top: -25vh;
              max-width: 50rem;
              margin: auto;
            `}
          >
            {renderModules(modules)}
          </div>
        </main>
        {/* <footer>
          <h3>You might also like...</h3>
        </footer> */}
      </article>
    </PageLayout>
  )
}
ProjectPage.propTypes = {
  project: projectProps
}

ProjectPage.getInitialProps = async context => {
  const { query } = context
  try {
    console.log(query.slug)
    const response = await cms(`/projects?slug=${query.slug}`)
    const projects = response.data
    return { project: projects[0] }
  } catch (err) {
    console.error(err)
    // const projects = mockGraphqlData.data.projects.filter(
    //   project => project.slug.toUpperCase() === query.slug.toUpperCase()
    // )
    // return { project: projects[0] }
  }
}

export default ProjectPage
