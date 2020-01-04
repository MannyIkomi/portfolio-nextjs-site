/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

// Utility
import Axios from 'axios'
import { CMS_URL } from '../config'
import { typography } from '../styles'

// Components
import Gallery from '../components/project/Gallery'
import PageLayout from '../components/pageLayout'
import { Cover } from '../components/project/Cover'

const HomePage = props => {
  const { projects, url } = props // from getInitialProps Next.js
  // use url to determine the :active navigation link
  // console.log('URL from Next.js\n', url)

  return (
    <>
      <PageLayout
        // title={''}
        // description={''}
        hasSideMenu={true}
        persistDockedMenu={false}
      >
        <Gallery id={0}>
          {projects.map(project => (
            <Cover project={project} key={project.id} />
          ))}
        </Gallery>
      </PageLayout>
    </>
  )
}

HomePage.getInitialProps = async () => {
  try {
    const response = await Axios(`${CMS_URL}/projects`)
    const projects = response.data
    return { projects }
  } catch (err) {
    console.error(err)
    throw new Error('Oops, looks like I cant load my projects right now 😔.')
    // const { projects } = mockGraphqlData.data
    // return { projects }
  }
}
export default HomePage
