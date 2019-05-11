/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import axios from 'axios'
// import PropTypes from 'prop-types'

// Components
import Footer from '../components/footer'
import Head from '../components/head'
import PageLayout from '../components/pageLayout'

// Utility
import { mixin, colors, typography } from '../styles'
import mockGraphqlData from '../util/mock'
const moduleContainer = css`
  margin: 4rem 0;
  box-shadow: -0.5rem 0.5rem 0.5rem 0px hsla(0, 0%, 0%, 0.85);
`

const ImageModule = props => {
  const { type, sizes } = props.module
  return (
    <figure
      css={[
        moduleContainer,
        css`
          width: 100%;
          img {
            object-fit: fill;
            ${mixin.size('100%', '100%')};
          }
        `
      ]}
    >
      <img src={sizes['_1400']} />
    </figure>
  )
}

// <img class="js-project-module--picture" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png" srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/eb636e75805377.5c57a09602e94.png 600w,https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb636e75805377.5c57a09602e94.png 1200w,https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png 1400w,https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb636e75805377.5c57a09602e94.png 1920w,https://mir-s3-cdn-cf.behance.net/project_modules/2800/eb636e75805377.5c57a09602e94.png 2800w,https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/eb636e75805377.5c57a09602e94.png 3300w," sizes="(max-width: 1400px) 100vw, 1400px">

const TextModule = props => {
  const { text } = props
  return (
    <figure css={[moduleContainer]}>
      <p>{text}</p>
    </figure>
  )
}

const mapModules = modules => {
  return modules.map((module, index) => {
    switch (module.type) {
      case 'image':
        return <ImageModule module={module} key={index} />
      case 'text':
        return <TextModule module={module} key={index} />
      default:
        throw new Error(
          `Could not find matching Component for Module:${module.type}`
        )
    }
  })
}

const ProjectView = props => {
  const { project } = props
  const { name, description, modules } = project

  const projectView = css`
    ${mixin.flex('column')}
    align-items: center;
    background: ${colors.muteGray};
  `

  const headingStyle = css`
    ${mixin.flex('column')}
    align-items: center;
    // max-width: 40rem;

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
    // @media screen and (min-width: 700px) {
    // }
  `
  return (
    <PageLayout
      title={`${project.name} by Manny`}
      description={`${project.name}, ${project.description} by Manny Ikomi`}
      isSideMenuDisabled={true}
    >
      <article css={projectView}>
        <header css={headingStyle}>
          <h1>{name}</h1>
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
            {mapModules(modules)}
          </div>
        </main>
        {/* <footer>
          <h3>You might also like...</h3>
        </footer> */}
      </article>
    </PageLayout>
  )
}

const axiosGraphql = axios.create({
  method: 'POST',
  baseURL: 'http://localhost:3001',
  url: 'graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// const ProjectPage = withRouter(props => <ProjectView {...props} />)

ProjectView.getInitialProps = async context => {
  const { query } = context
  try {
    console.log(query.slug)
    const response = await axiosGraphql({
      data: JSON.stringify({
        query: `{
          projects(slug: "${query.slug}") {
            id
            name
            description
            slug
            fields
            tags
            covers {
              original
              _404
              _808
            }
            modules{
              ...on ImageModule {
                type
                sizes{
                  original
                  _1400
                  disp
                }
              }
              
            ...on TextModule{
              type
              text
              text_plain
            }
            }
          }
        }
      `
      })
    })
    console.log(response.data.data)
    const { projects } = await response.data.data
    return { project: projects[0] }
  } catch (err) {
    console.error(err.error)
    // const projects = mockGraphqlData.data.projects.filter(
    //   project => project.slug.toUpperCase() === query.slug.toUpperCase()
    // )
    // return { project: projects[0] }
  }
}

export default ProjectView
