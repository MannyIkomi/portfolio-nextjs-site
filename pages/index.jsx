/** @jsx jsx */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// Utility
import { css, jsx, Global } from '@emotion/core'
import { GlobalStyles, mixin, typography, colors } from '../styles/index'
import mockGraphqlData from '../util/mock'
import graphqlQuery from '../util/http'

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
      <PageLayout
        title={''}
        description={''}
        isSideMenuDisabled={false}
        persistDockedMenu={false}
      >
        {/* <h1
          css={css`
            font-family: ${typography.serif};
            font-weight: 400;
            line-height: 0.75;

            color: ${colors.darkGray};

            margin: 0 2rem;
          `}
        >
          the werk
        </h1> */}
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

HomePage.getInitialProps = async () => {
  try {
    const response = await graphqlQuery(`{
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
    }`)
    const { projects } = await response.data.data
    return { projects }
  } catch (err) {
    console.log(err.error)
    // const { projects } = mockGraphqlData.data
    // return { projects }
  }
}
export default HomePage
