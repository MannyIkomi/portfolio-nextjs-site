import { Head as NextHead } from 'next/head'
// https://nextjs.org/docs#populating-head
const Head = props => {
  const { pageTitle, children } = props
  return (
    <NextHead>
      <link rel="stylesheet" href="https://use.typekit.net/esl0nbd.css" />
      <title>{pageTitle}</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {this.props.children}
    </NextHead>
  )
}

export default Head
