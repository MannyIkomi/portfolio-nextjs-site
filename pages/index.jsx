// https://nextjs.org/docs/
import React, { Component, Fragment } from 'react'
import { prettyJson } from '../util/debug'
import HtmlHead from '../components/head'
import axios from 'axios'
import {
  WithNavigationToggle,
  MobileMenu,
  SideMenu,
  NavLink,
  Logo,
  MenuNav
} from '../components/navigation.jsx'
import Portfolio from '../components/portfolio/portfolio.jsx'
import '../sass/base.scss'
import { awaitExpression } from '../node_modules/@babel/types'
// import { Head as NextHead } from 'next/head'

const Home = props => {
  const { portfolio } = props // from getInitialProps Next.js
  console.log('PORTFOLIO PROPS:', portfolio)
  return (
    <Fragment>
      <HtmlHead pageTitle={'Welcome! 🤓 — Manny Ikomi'} />
      {/* <header className={`dock-sidebar`}>
          <Logo lockup={`master`} />
          <MenuNav />
        </header> */}

      <h1>{props.stars}</h1>
      <header className={`dock-bottom`}>
        <WithNavigationToggle
          render={(navToggledState, handler) => {
            return <MobileMenu toggle={navToggledState} handler={handler} />
          }}
        />
      </header>
      <main>
        {/* Categorize <Gallery/> by #ui, #Identity Design, and #Other Works */}
        <h1>the werk</h1>
        <Portfolio id={'identity'} />
      </main>
    </Fragment>
  )
}

// https://graphql.org/graphql-js/graphql-clients/
// sending GraphQL queries without frameworks like Apollo

const GraphReq = axios.create({
  method: 'POST',
  baseURL: 'http://localhost:3001',
  url: 'graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

Home.getInitialProps = async ({ req }) => {
  // try {
  //   const response = await GraphReq({
  //     data: JSON.stringify({
  //       query: `{
  //   portfolio{
  //     projects{
  //       id
  //       name
  //       description
  //       covers{
  //         original
  //         size_404
  //         size_808
  //       }
  //     }
  //   }
  // }`
  //     })
  //   })
  //   const portfolio = await response.data
  //   console.log('AXIOS DATA', prettyJson(portfolio))
  //   return portfolio
}

export default Home
