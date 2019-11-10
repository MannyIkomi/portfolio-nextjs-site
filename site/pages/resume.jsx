import React, { Component } from 'react'
import PageLayout from '../components/pageLayout'

class Resume extends Component {
  state = {}
  render() {
    return (
      <PageLayout hasSideMenu={true}>
        <article>
          <h1>Resume</h1>
        </article>
      </PageLayout>
    )
  }
}

export default Resume
