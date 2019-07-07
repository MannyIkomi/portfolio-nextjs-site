// https://nextjs.org/docs#populating-head
import Head from 'next/head'
import PropTypes from 'prop-types'

const HtmlHead = props => {
  const { pageTitle, description } = props
  return (
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/esl0nbd.css" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      {* <!-- Global site tag (gtag.js) - Google Analytics --> *}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143395225-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-143395225-1');
      </script>
      
    </Head>
  )
}

HtmlHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default HtmlHead
