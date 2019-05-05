/** @jsx jsx */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// Styles
import { css, jsx, Global } from '@emotion/core'
import { GlobalStyles, mixin } from '../styles/index'

// Components
import HtmlHead from '../components/head'
import {
  WithSwitchToggle,
  DockedMenu,
  SideMenu,
  NavLink,
  Logo,
  NavContainer
} from '../components/navigation/navigation'

import Gallery from '../components/portfolio/projectGallery'
import PageLayout from '../components/pageLayout'
import {
  ProjectCover,
  WithHoverState
} from '../components/portfolio/projectCover'

import Footer from '../components/footer'
// import '../sass/base.scss'
// import '../sass/portfolio.scss'

const HomePage = props => {
  const { projects, url } = props // from getInitialProps Next.js

  console.log('URL from Next.js\n', url)
  // use url to determine the :active navigation link
  // console.log('PORTFOLIO PROPS:', projects)

  return (
    <Fragment>
      <PageLayout title={''} description={''} isSideMenuDisabled={false}>
        <h1>the werk</h1>
        <Gallery id={0}>
          {/* WithInteractiveLink render=ProjectImg */}
          {projects.map(project => (
            <ProjectCover project={project} key={project.id} />
          ))}
        </Gallery>
      </PageLayout>
    </Fragment>
  )
}

// https://graphql.org/graphql-js/graphql-clients/
// sending GraphQL queries without frameworks like Apollo

const axiosGraphql = axios.create({
  method: 'POST',
  baseURL: 'http://localhost:3001',
  url: 'graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

HomePage.getInitialProps = async () => {
  try {
    const response = await axiosGraphql({
      data: JSON.stringify({
        query: `{
          projects {
            id
            name
            description
            slug
            covers {
              original
              _404
              _808
            }
          }
        }`
      })
    })
    const { projects } = await response.data.data
    return { projects }
  } catch (err) {
    console.log(err.error)

    return {
      projects: [
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
        },
        {
          id: '75810981',
          name: 'NuFlow',
          description: 'Personal Finance Lifestyle Magazine',
          slug: 'NuFlow',
          fields: ['Editorial Design', 'Creative Direction', 'Branding'],
          tags: [
            'Numismatics',
            'cashflow',
            'personal finance',
            'millennial',
            'magazine'
          ],
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
            _404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
            _808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png'
          },
          modules: [
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/8b19b175810981.5c57a6c9b0dc9.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b19b175810981.5c57a6c9b0dc9.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8b19b175810981.5c57a6c9b0dc9.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/18eb1c75810981.5c57a6c9af919.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/18eb1c75810981.5c57a6c9af919.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/18eb1c75810981.5c57a6c9af919.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/4d616475810981.5c57a6c9af4cc.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4d616475810981.5c57a6c9af4cc.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4d616475810981.5c57a6c9af4cc.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/58f8bb75810981.5c57a6c9b0465.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/58f8bb75810981.5c57a6c9b0465.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/58f8bb75810981.5c57a6c9b0465.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/d44ef675810981.5c57a6c9afbbc.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d44ef675810981.5c57a6c9afbbc.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d44ef675810981.5c57a6c9afbbc.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/dc9d8775810981.5c57a6c9b1318.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/dc9d8775810981.5c57a6c9b1318.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dc9d8775810981.5c57a6c9b1318.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/eda61675810981.5c57a6c9b084b.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/eda61675810981.5c57a6c9b084b.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/eda61675810981.5c57a6c9b084b.png'
              }
            }
          ]
        },
        {
          id: '75799775',
          name: 'Breaking Up With God',
          description:
            'Literary Magazine Feature Illustration: Tell, Spring 2018\n',
          slug: 'Breaking-Up-With-God',
          fields: ['Illustration', 'Print Design', 'Editorial Design'],
          tags: ['literary magazine', 'ILLUSTRATION '],
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            _404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            _808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png'
          },
          modules: [
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/32a2be75799775.5c573d495faec.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/32a2be75799775.5c573d495faec.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/32a2be75799775.5c573d495faec.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/2cec9f75799775.5c573d495d114.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2cec9f75799775.5c573d495d114.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2cec9f75799775.5c573d495d114.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/e7354b75799775.5c574440c1038.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7354b75799775.5c574440c1038.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7354b75799775.5c574440c1038.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/3c7cc675799775.5c573d495f18f.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3c7cc675799775.5c573d495f18f.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c7cc675799775.5c573d495f18f.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/00617975799775.5c573d495ef4c.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/00617975799775.5c573d495ef4c.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/00617975799775.5c573d495ef4c.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/0be82975799775.5c573d495f87e.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0be82975799775.5c573d495f87e.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/0be82975799775.5c573d495f87e.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/f19a5775799775.5c573d495df32.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f19a5775799775.5c573d495df32.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/f19a5775799775.5c573d495df32.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/bc73f775799775.5c573d495e62b.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/bc73f775799775.5c573d495e62b.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc73f775799775.5c573d495e62b.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/290a9f75799775.5c573d495cc6c.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/290a9f75799775.5c573d495cc6c.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/290a9f75799775.5c573d495cc6c.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/feb43575799775.5c573d495e9fb.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/feb43575799775.5c573d495e9fb.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/feb43575799775.5c573d495e9fb.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/e07ee675799775.5c573d495f45d.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e07ee675799775.5c573d495f45d.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e07ee675799775.5c573d495f45d.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/cda82475799775.5c573d495daec.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cda82475799775.5c573d495daec.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/cda82475799775.5c573d495daec.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/5fa9e575799775.5c573d495fd55.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fa9e575799775.5c573d495fd55.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5fa9e575799775.5c573d495fd55.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/c29d6b75799775.5c573d495d849.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c29d6b75799775.5c573d495d849.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c29d6b75799775.5c573d495d849.png'
              }
            },
            {
              type: 'text',
              text:
                '<div style="text-align:center;"><a href="https://bhcc.digication.com/Tellmagazine/Links_to_Faculty_e-Portfolios/" target="_blank"><span class="texteditor-inline-fontfamily" style="font-family:helvetica,arial,sans-serif;">BHCC Tell Magazine</span></a></div>',
              text_plain: 'BHCC Tell Magazine'
            }
          ]
        },
        {
          id: '52442951',
          name: 'Coca Cola Logo',
          description: 'International Style redesign using the Coca-Cola brand',
          slug: 'Coca-Cola-Logo',
          fields: ['Branding', 'Graphic Design'],
          tags: [
            'Coca Cola Logo',
            'international style',
            'swiss design',
            'Logo Design',
            'redesign',
            'branding '
          ],
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            _404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            _808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png'
          },
          modules: [
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/ef881852442951.5c3fdea081534.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ef881852442951.5c3fdea081534.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ef881852442951.5c3fdea081534.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/b7b7fe52442951.5c3fdea080b77.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7b7fe52442951.5c3fdea080b77.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b7b7fe52442951.5c3fdea080b77.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/c811d552442951.5c3fdd9a076ed.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c811d552442951.5c3fdd9a076ed.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c811d552442951.5c3fdd9a076ed.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/83ac5952442951.5c3fdd9a0653d.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/83ac5952442951.5c3fdd9a0653d.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/83ac5952442951.5c3fdd9a0653d.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/722fd452442951.5c3fdd9a07c31.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/722fd452442951.5c3fdd9a07c31.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/722fd452442951.5c3fdd9a07c31.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/ad209f52442951.5c3fdd9a06ec4.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ad209f52442951.5c3fdd9a06ec4.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad209f52442951.5c3fdd9a06ec4.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/f33bb752442951.5c3fdd9a0735d.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f33bb752442951.5c3fdd9a0735d.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/f33bb752442951.5c3fdd9a0735d.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/eb369c52442951.5c3fdd9a06855.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb369c52442951.5c3fdd9a06855.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/eb369c52442951.5c3fdd9a06855.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/d5aaf452442951.5c3fdd9a05443.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d5aaf452442951.5c3fdd9a05443.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/d5aaf452442951.5c3fdd9a05443.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/b700c552442951.5c3fdd9a050b6.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b700c552442951.5c3fdd9a050b6.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b700c552442951.5c3fdd9a050b6.png'
              }
            },
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/188d2852442951.5c3fdd9a05784.png',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/188d2852442951.5c3fdd9a05784.png',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/188d2852442951.5c3fdd9a05784.png'
              }
            }
          ]
        },
        {
          id: '50678567',
          name: 'Mystic Parker Printing',
          description: 'Identity System Refresh',
          slug: 'Mystic-Parker-Printing',
          fields: ['Branding', 'Web Design', 'Graphic Design'],
          tags: [
            'branding ',
            'Identity System',
            'printing company',
            'Small Business',
            'brand expression',
            'mystic parker printing',
            'Responsive web design'
          ],
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/27cf9c50678567.Y3JvcCw5ODYsNzcxLDMxLDMzNzc.jpg',
            _404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/27cf9c50678567.Y3JvcCw5ODYsNzcxLDMxLDMzNzc.jpg',
            _808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/27cf9c50678567.Y3JvcCw5ODYsNzcxLDMxLDMzNzc.jpg'
          },
          modules: [
            {
              type: 'image',
              sizes: {
                original:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/source/b4f1ad50678567.58d6890483ea7.jpg',
                _1400:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b4f1ad50678567.58d6890483ea7.jpg',
                disp:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b4f1ad50678567.58d6890483ea7.jpg'
              }
            },
            {
              type: 'text',
              text:
                '<div>The logo form is not my original artwork, the original author is unknown. The logo is displayed in relation to the brand identity system.</div>',
              text_plain:
                'The logo form is not my original artwork, the original author is unknown. The logo is displayed in relation to the brand identity system.'
            }
          ]
        }
      ]
    }
  }
}
export default HomePage
