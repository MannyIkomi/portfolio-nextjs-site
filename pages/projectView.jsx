import React, { Fragment } from 'react'
import axios from 'axios'

const ImageModule = props => {
  const { image } = props
  return (
    <figure>
      <img src={image.sizes['_1400']} />
    </figure>
  )
}

const TextModule = props => {
  const { text } = props
  return (
    <figure>
      <p>{text}</p>
    </figure>
  )
}

// <img class="js-project-module--picture" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png" srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/eb636e75805377.5c57a09602e94.png 600w,https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb636e75805377.5c57a09602e94.png 1200w,https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb636e75805377.5c57a09602e94.png 1400w,https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb636e75805377.5c57a09602e94.png 1920w,https://mir-s3-cdn-cf.behance.net/project_modules/2800/eb636e75805377.5c57a09602e94.png 2800w,https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/eb636e75805377.5c57a09602e94.png 3300w," sizes="(max-width: 1400px) 100vw, 1400px">

const ProjectView = props => {
  const { project } = props
  const { id, name, description, modules } = project
  return (
    <article>
      <header>
        <h1>{name}</h1>
        <h2>{description}</h2>
      </header>
      <main className="project modules">
        {modules.map(module => {
          switch (module.type) {
            case 'Image':
              return <ImageModule module={module} />
            case 'Type':
              return <TypedModule module={module} />
            default:
              throw new Error(
                `Could not find matching Component for Module:${module}`
              )
          }
        })}
        {/* modules.map(module => <Component module={module}/>) */}
      </main>
    </article>
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

ProjectView.getInitialProps = async ({ query }) => {
  try {
    const response = await axiosGraphql({
      data: JSON.stringify({
        query: `{
          projects(id: ${query.id}) {
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
              text
            }
            }
          }
        }
        `
      })
    })
    const { project } = await response.data.data
    return { project }
  } catch (err) {
    console.error(err.error)

    return {
      project: [
        {
          id: '75805377',
          name: 'An Empire of Shattered Glass',
          description:
            'Short Story Collection Book Cover\nhttp://www.readshortfiction.com/2017/09/an-empire-of-shattered-glass-by-gunnar-de-winter/',
          slug: 'An-Empire-of-Shattered-Glass',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png'
          }
        }
      ]
    }
  }
}
export default ProjectView
