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

const Contact = props => {
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
        Embed Instagram and Twitter feeds <br />
        then contact form for email
      </PageLayout>
    </Fragment>
  )
}

// Contact.getInitialProps = async () => {
// get Instagram/Twttier feeds
// }
export default Contact
