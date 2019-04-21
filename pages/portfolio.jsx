import React, { Fragment } from 'react'
// import { withRouter } from 'next/router'
import axios from 'axios'

import '../sass/projectView.scss'
import Footer from '../components/footer'
import Head from '../components/head'

const ImageModule = props => {
  const { type, sizes } = props.module

  return (
    <figure className={`module image`}>
      <img src={sizes['_1400']} />
    </figure>
  )
}

// <img class="js-project-module--picture" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png" srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/eb636e75805377.5c57a09602e94.png 600w,https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb636e75805377.5c57a09602e94.png 1200w,https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png 1400w,https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb636e75805377.5c57a09602e94.png 1920w,https://mir-s3-cdn-cf.behance.net/project_modules/2800/eb636e75805377.5c57a09602e94.png 2800w,https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/eb636e75805377.5c57a09602e94.png 3300w," sizes="(max-width: 1400px) 100vw, 1400px">

const TextModule = props => {
  const { text } = props
  return (
    <figure className={`module text`}>
      <p>{text}</p>
    </figure>
  )
}

const mapModules = modules => {
  return modules.map(module => {
    switch (module.type) {
      case 'image':
        return <ImageModule module={module} />
      case 'text':
        return <TextModule module={module} />
      default:
        throw new Error(
          `Could not find matching Component for Module:${module.type}`
        )
    }
  })
}

const ProjectView = props => {
  const { project } = props
  const { id, name, description, modules } = project
  return (
    <Fragment>
      <Head pageTitle={`${project.name} by Manny`} description={description} />
      <article className={`project viewer`}>
        <header>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </header>
        <main className={`modules`}>
          <div className={`offset`}>{mapModules(modules)}</div>
        </main>
        <footer>
          <h3>You might also like...</h3>
        </footer>
      </article>
      <Footer />
    </Fragment>
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
              text_plain
              text
            }
            }
          }
        }
        
        `
      })
    })
    const { projects } = await response.data.data
    return { project: projects[0] }
  } catch (err) {
    console.error(err.error)
    // return {
    //   projects: [
    //     {
    //       id: '75810981',
    //       name: 'NuFlow',
    //       description: 'Personal Finance Lifestyle Magazine',
    //       slug: 'NuFlow',
    //       covers: {
    //         original:
    //           'https://mir-s3-cdn-cf.behance.net/projects/original/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
    //         _404:
    //           'https://mir-s3-cdn-cf.behance.net/projects/404/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
    //         _808:
    //           'https://mir-s3-cdn-cf.behance.net/projects/808/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png'
    //       },
    //       modules: [
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/c6b08475810981.5c57a6c9aff02.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c6b08475810981.5c57a6c9aff02.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c6b08475810981.5c57a6c9aff02.png'
    //           }
    //         },
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/8b19b175810981.5c57a6c9b0dc9.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b19b175810981.5c57a6c9b0dc9.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8b19b175810981.5c57a6c9b0dc9.png'
    //           }
    //         },
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/18eb1c75810981.5c57a6c9af919.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/18eb1c75810981.5c57a6c9af919.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/18eb1c75810981.5c57a6c9af919.png'
    //           }
    //         },
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/4d616475810981.5c57a6c9af4cc.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4d616475810981.5c57a6c9af4cc.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4d616475810981.5c57a6c9af4cc.png'
    //           }
    //         },
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/58f8bb75810981.5c57a6c9b0465.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/58f8bb75810981.5c57a6c9b0465.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/58f8bb75810981.5c57a6c9b0465.png'
    //           }
    //         },
    //         {
    //           type: 'image',
    //           sizes: {
    //             original:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/source/d44ef675810981.5c57a6c9afbbc.png',
    //             _1400:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d44ef675810981.5c57a6c9afbbc.png',
    //             disp:
    //               'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d44ef675810981.5c57a6c9afbbc.png'
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // }
  }
}

export default ProjectView
