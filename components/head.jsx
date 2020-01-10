// https://nextjs.org/docs#populating-head
import Head from 'next/head'
import PropTypes from 'prop-types'

const HtmlHead = props => {
  const { pageTitle, description } = props
  return (
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/ygb3hbx.css"></link>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  )
}

HtmlHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default HtmlHead
