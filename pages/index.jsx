// https://nextjs.org/docs/
import { HtmlHead } from '../src/components/head'
// import { Head as NextHead } from 'next/head'

const Home = props => {
  return (
    <div>
      <HtmlHead pageTitle={'Home page test'} />
      <h1>Welcome to next.js!</h1>
      <img src="static/logos/logo-master.svg" alt="logo" />
    </div>
  )
}

export default Home
