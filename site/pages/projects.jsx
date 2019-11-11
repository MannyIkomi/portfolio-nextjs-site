/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

// Components
import PageLayout from '../components/pageLayout'
import { ImageModule } from '../components/project/ImageModule'
import { TextModule } from '../components/project/TextModule'
import { CaptionModule } from '../components/project/CaptionModule'

// Utility
import { mixin, typography, colors } from '../styles'
import { cms } from '../util/http'
import { projectProps } from '../util/props'
import Axios from 'axios'

const ProjectPage = ({ project, otherProjects }) => {
  const { title, description, modules, slug, tags, id } = project
  // const { title, description, modules, slug, tags } = otherPro

  const projectView = {
    ...mixin.flex('column'),
    alignItems: 'center',
    background: colors.muteGray
  }

  const headingStyle = {
    ...mixin.flex('column'),
    alignItems: 'center',

    minHeight: '50vh',
    padding: '2rem',
    textAlign: 'center',
    h1: {
      fontFamily: typography.sans,
      fontWeight: '800',
      textTransform: 'initial'
    },
    h2: {
      fontFamily: typography.serif,
      fontSize: '1.5rem',
      fontWeight: '300',
      fontStyle: 'italic',
      textTransform: 'initial'
    }
  }

  return (
    <PageLayout
      title={`${project.title}, ${project.description} by Manny`}
      description={`${project.title}, ${project.description}: ${project.metaDescription}`}
      hasSideMenu={false}
      persistDockedMenu={false}
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
            {modules.map(module => {
              switch (module.type) {
                case 'image':
                  return <ImageModule {...module} key={module.id} />
                case 'text':
                  return <TextModule {...module} key={module.id} />
                case 'caption':
                  return <CaptionModule {...module} key={module.id} />
                // case 'section':
                // use to split
                //   return <div>CREATE SECTION MODULE</div> with glyph
                default:
                  throw new Error(
                    `Could not find matching Component for Module: ${module.type}`
                  )
              }
            })}
          </div>
        </main>
        <footer>
          <h3>
            You might also like...(related project in scrolling carousel,
            grouped by tags)
          </h3>
          {project.tags.map(tag => tag.designTags).join(', ')}
          <br /> <br />
          {otherProjects.map(project => project.title).join(', ')}
          <br /> <br />
          {otherProjects
            // filter current project from total projects list
            .filter(otherProject => otherProject.id !== project.id)
            // filter projects.tags where current.tags match

            .map(otherProject => otherProject.title)
            .join(', ')}
          {
            // find related project
            /* function findRelatedProjects(current, projects){

            } */
          }
        </footer>
      </article>
    </PageLayout>
  )
}
ProjectPage.propTypes = {
  project: projectProps
}

ProjectPage.getInitialProps = async context => {
  /* const getInspirations = () => cms('/inspirations')
  const getAbout = () => cms('/abouts')

  try {
    const [inspirations, about] = await Axios.all([
      getInspirations(),
      getAbout()
    ])
 */
  const { query } = context
  const getProject = () => cms(`/projects?slug=${query.slug}`)
  const getAllProjects = () => cms('/projects')

  try {
    const [project, allProjects] = await Axios.all([
      getProject(),
      getAllProjects()
    ])
    console.log(query.slug)
    // console.log('RESPONSE', response)

    return { project: project.data[0], otherProjects: allProjects.data }
  } catch (err) {
    console.error(err)
    // const projects = mockGraphqlData.data.projects.filter(
    //   project => project.slug.toUpperCase() === query.slug.toUpperCase()
    // )
    // return { project: projects[0] }
  }
}

export default ProjectPage
