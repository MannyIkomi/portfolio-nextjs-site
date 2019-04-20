// https://nextjs.org/docs/
import React, { Fragment } from 'react'

import HtmlHead from '../components/head'
import axios from 'axios'
import {
  WithNavigationToggle,
  MobileMenu,
  SideMenu,
  NavLink,
  Logo,
  MenuNav
} from '../components/navigation'
import Portfolio from '../components/portfolio/portfolio'
import {
  ProjectCover,
  WithHoverState
} from '../components/portfolio/projectCover'
import Footer from '../components/footer'
import '../sass/base.scss'
import '../sass/portfolio.scss'

const Home = props => {
  const { projects, url } = props // from getInitialProps Next.js

  console.log('URL from Next.js', url) //use url to determine the :active navigation link
  // console.log('PORTFOLIO PROPS:', projects)

  return (
    <Fragment>
      <HtmlHead
        pageTitle={'Design Thinker, Lifetime Learner — Manny Ikomi'}
        description={`Design thinker, lifetime learner, adoring guncle. I like making great things for good people.`}
      />
      {/* <header className={`dock-sidebar`}>
          <Logo lockup={`master`} />
          <MenuNav />
        </header> */}
      <header className={`dock-bottom`}>
        <WithNavigationToggle
          render={(navToggledState, handler) => {
            return <MobileMenu toggle={navToggledState} handler={handler} />
          }}
        />
      </header>
      <main>
        {/* Categorize <Gallery/> by #ui, #Identity Design*/}
        <h1>the werk</h1>
        <Portfolio id={``}>
          {projects.map(project => (
            <ProjectCover project={project} key={project.id} />
          ))}
        </Portfolio>
      </main>
      <Footer />
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

Home.getInitialProps = async () => {
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
              size_404
              size_808
            }
          }
        }`
      })
    })
    const { projects } = await response.data.data
    return { projects }
  } catch (err) {
    console.error(err.error)

    return {
      projects: [
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
        },
        {
          id: '75810981',
          name: 'NuFlow',
          description: 'Personal Finance Lifestyle Magazine',
          slug: 'NuFlow',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/c49aa175810981.Y3JvcCwxMzgzLDEwODIsNiww.png'
          }
        },
        {
          id: '75799775',
          name: 'Breaking Up With God',
          description:
            'Literary Magazine Feature Illustration: Tell, Spring 2018 https://bhcc.digication.com/Tellmagazine/Links_to_Faculty_e-Portfolios/\n',
          slug: 'Breaking-Up-With-God',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/4e4a5e75799775.Y3JvcCwxMzgzLDEwODIsNiww.png'
          }
        },
        {
          id: '52442951',
          name: 'Coca Cola Logo',
          description: 'International Style Logo using the Coca Cola Brand',
          slug: 'Coca-Cola-Logo',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/0288cf52442951.Y3JvcCwzMDQ0LDIzODEsMTA1LDgy.png'
          }
        },
        {
          id: '50678567',
          name: 'Mystic Parker Printing Identity',
          description: 'Identity System Refresh',
          slug: 'Mystic-Parker-Printing-Identity',
          covers: {
            original:
              'https://mir-s3-cdn-cf.behance.net/projects/original/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            size_404:
              'https://mir-s3-cdn-cf.behance.net/projects/404/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg',
            size_808:
              'https://mir-s3-cdn-cf.behance.net/projects/808/c4544f50678567.Y3JvcCwxNDAwLDEwOTUsMCwzMjMz.jpg'
          }
        }
      ]
    }
  }
}
export default Home
