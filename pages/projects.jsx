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
  const { id, name, description, modules } = project

  const projectView = css`
    ${mixin.flex('column')}
    align-items: center;
    background: ${colors.muteGray};
  `

  const headingStyle = css`
    ${mixin.flex('column')}
    align-items: center;
    max-width: 40rem;

    min-height: 50vh;
    padding: 2rem;
    text-align: center;
    h1 {
      font-family: ${typography.sans};
      font-weight: 500;
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
    <PageLayout title={`${project.name} by Manny`}>
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
              max-width: 40rem;
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

    const projects = [
      {
        id: '75805377',
        name: 'An Empire of Shattered Glass',
        description: 'Short Story Collection Book Cover',
        slug: 'An-Empire-of-Shattered-Glass',
        fields: ['Graphic Design', 'Illustration', 'Typography'],
        tags: ['book cover', 'monkey', 'Baboon', 'gif', 'short story'],
        covers: {
          original:
            'https://mir-s3-cdn-cf.behance.net/projects/original/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
          _404:
            'https://mir-s3-cdn-cf.behance.net/projects/404/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png',
          _808:
            'https://mir-s3-cdn-cf.behance.net/projects/808/72f45c75805377.Y3JvcCwxMTgyLDkyNSwxMDIsNzk.png'
        },
        modules: [
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/1c004675805377.5c57954a31059.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1c004675805377.5c57954a31059.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1c004675805377.5c57954a31059.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/450ad675805377.5c57954a31a52.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/450ad675805377.5c57954a31a52.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/450ad675805377.5c57954a31a52.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/0586d475805377.5c57954a31615.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0586d475805377.5c57954a31615.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/0586d475805377.5c57954a31615.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/2a0ba975805377.5c57a09603632.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2a0ba975805377.5c57a09603632.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2a0ba975805377.5c57a09603632.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/42499e75805377.5c5765a66bb56.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/42499e75805377.5c5765a66bb56.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/42499e75805377.5c5765a66bb56.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/67b80375805377.5c57a09602bf3.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/67b80375805377.5c57a09602bf3.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/67b80375805377.5c57a09602bf3.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/7e7ecc75805377.5c5765a66d192.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7e7ecc75805377.5c5765a66d192.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7e7ecc75805377.5c5765a66d192.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/22d59a75805377.5c5765a66da60.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/22d59a75805377.5c5765a66da60.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/22d59a75805377.5c5765a66da60.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/72ece575805377.5c5765a66e206.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/72ece575805377.5c5765a66e206.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/72ece575805377.5c5765a66e206.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/40551175805377.5c57a096033f1.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/40551175805377.5c57a096033f1.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/40551175805377.5c57a096033f1.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/b5d4cb75805377.5c57951c43178.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b5d4cb75805377.5c57951c43178.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b5d4cb75805377.5c57951c43178.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/0209e075805377.5c57951c425c8.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0209e075805377.5c57951c425c8.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/0209e075805377.5c57951c425c8.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/d4f5b975805377.5c57951c42dcf.png',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4f5b975805377.5c57951c42dcf.png',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d4f5b975805377.5c57951c42dcf.png'
            }
          },
          {
            type: 'image',
            sizes: {
              original:
                'https://mir-s3-cdn-cf.behance.net/project_modules/source/a77dd875805377.5c577ba3e0afb.gif',
              _1400:
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a77dd875805377.5c577ba3e0afb.gif',
              disp:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a77dd875805377.5c577ba3e0afb.gif'
            }
          },
          {
            type: 'text',
            text:
              '<div style="text-align:center;"><a href="http://www.readshortfiction.com/2017/09/an-empire-of-shattered-glass-by-gunnar-de-winter/" target="_blank">Read <span class="texteditor-inline-fontfamily" style="font-family:helvetica,arial,sans-serif;">"</span>An Empire of Shattered Glass" by Gunnar De Winter</a><br></div>',
            text_plain:
              'Read "An Empire of Shattered Glass" by Gunnar De Winter'
          }
        ]
      }
    ]

    return { project: projects[0] }
  }
}

export default ProjectView
