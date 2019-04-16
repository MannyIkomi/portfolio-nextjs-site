// https://nextjs.org/docs#populating-head
import Head from 'next/head'

const HtmlHead = props => {
  const { pageTitle, children } = props
  return (
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/esl0nbd.css" />
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  )
}

export default HtmlHead
