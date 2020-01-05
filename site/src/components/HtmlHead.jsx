/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function HtmlHead({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s — ${site.siteMetadata.title}`}
      // meta={[
      //   {
      //     name: `description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:title`,
      //     content: title,
      //   },
      //   {
      //     property: `og:description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:type`,
      //     content: `website`,
      //   },
      //   {
      //     name: `twitter:card`,
      //     content: `summary`,
      //   },
      //   {
      //     name: `twitter:creator`,
      //     content: site.siteMetadata.author,
      //   },
      //   {
      //     name: `twitter:title`,
      //     content: title,
      //   },
      //   {
      //     name: `twitter:description`,
      //     content: metaDescription,
      //   },
      // ].concat(meta)}
    >
      <link rel="stylesheet" href="https://use.typekit.net/esl0nbd.css" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  )
}

HtmlHead.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

HtmlHead.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default HtmlHead
