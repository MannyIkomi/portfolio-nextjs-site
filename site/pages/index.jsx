/** @jsx jsx */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { css, jsx, Global } from '@emotion/core'

// Utility
import { CMS_URL } from '../config'

// Components

import Gallery from '../components/portfolio/projectGallery'
import PageLayout from '../components/pageLayout'
import { ProjectCover } from '../components/portfolio/projectCover'
import Axios from 'axios'

const HomePage = props => {
  const { projects, url } = props // from getInitialProps Next.js
  // use url to determine the :active navigation link
  // console.log('URL from Next.js\n', url)

  return (
    <Fragment>
      <PageLayout
        // title={''}
        // description={''}
        isSideMenuDisabled={false}
        persistDockedMenu={false}
      >
        <Gallery id={0}>
          {projects.map(project => (
            <ProjectCover project={project} key={project.id} />
          ))}
        </Gallery>
      </PageLayout>
    </Fragment>
  )
}

HomePage.getInitialProps = async () => {
  try {
    const response = await Axios(`${CMS_URL}/projects`)

    /* graphqlQuery(`{
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
    }`) */

    const projects = response.data
    console.log(projects)
    return { projects }
  } catch (err) {
    console.error(err.error)
    // const { projects } = mockGraphqlData.data
    // return { projects }
  }
}
export default HomePage
