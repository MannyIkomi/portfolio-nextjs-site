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
import { log } from 'util'
import Cover from '../components/project/Cover'

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

  const removeCurrentProject = (thisProject, otherProjects) =>
    // filter current project from total projects list
    otherProjects.filter(otherProject => otherProject.id !== thisProject.id)
  // filter projects.tags where current.tags match

  const arrIntersect = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item))
  }

  const findRelatedProjects = (thisProject = {}, otherProjects = []) => {
    const currentTags = thisProject.tags.map(obj => obj.designTags)

    return otherProjects.filter(otherProject => {
      const otherTags = otherProject.tags.map(obj => obj.designTags)
      return arrIntersect(currentTags, otherTags).length > 0
    })
  }

  return (
    <PageLayout
      title={`${project.title}, ${project.description} by Manny`}
      description={`${project.title}, ${project.description}: ${project.metaDescription}`}
      hasSideMenu={false}
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
          <h3>You might also like...</h3>
          <br /> <br />
          {findRelatedProjects(
            project,
            removeCurrentProject(project, otherProjects)
          ).map(related => (
            <Cover project={related} key={related.id} />
          ))}
        </footer>
      </article>
    </PageLayout>
  )
}

ProjectPage.propTypes = {
  project: projectProps
}

ProjectPage.getInitialProps = async context => {
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
