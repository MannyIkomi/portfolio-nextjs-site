// https://nextjs.org/docs/
import HtmlHead from '../components/head'
import DockedHeader from '../components/navigation/mobileNav.jsx'
import Gallery from '../components/gallery/gallery.jsx'
import '../sass/base.scss'
// import { Head as NextHead } from 'next/head'

const Home = props => {
  return (
    <div>
      <HtmlHead pageTitle={'Welcome! 🤓 — Manny Ikomi'} />
      <h1>Portfolio Page</h1>
      <Gallery />
      {/* <img src="static/logos/logo-master.svg" alt="logo" /> */}
    </div>
  )
}

export default Home
