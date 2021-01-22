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

function HtmlHead({
  openGraphType,
  coverImageSrc,
  coverImageAlt,
  socialMention,
  description,
  author,
  lang,
  meta,
  title,
  url,
  data,
}) {
  const cmsProjects = data.allStrapiProjects.nodes.filter(
    ({ draft, feature }) => !draft && true // !feature
  )
  const featureProject = cmsProjects.filter(
    project => project.feature === true
  )[0]
  console.log(featureProject)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            socialMention
            url
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaUrl = url || site.siteMetadata.url
  const metaSocialMention = socialMention || site.siteMetadata.socialMention
  const metaAuthor = author || site.siteMetadata.author
  const metaSocialImage =
    coverImageSrc || featureProject.cover.childImageSharp.fluid.src
  const metaSocialImageAlt = coverImageAlt || featureProject.cover.coverAlt
  const metaOpenGraphType = openGraphType || site.siteMetadata.openGraphType

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s — ${site.siteMetadata.title}`}
      // The following required properties are missing:
      // og:url, og:type, og:title, og:image, og:description, fb:app_id
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // OPEN GRAPH
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaSocialImage,
        },
        {
          property: `og:image:alt`,
          content: metaSocialImageAlt,
        },
        {
          property: `og:type`,
          content: metaOpenGraphType,
        },
        // TWITTER

        {
          name: `twitter:creator`,
          content: metaSocialMention,
        },

        {
          name: `twitter:card`,
          content: `summary_large_image`, // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
        },
        {
          name: `twitter:site`,
          content: metaSocialMention,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:image`,
          content: metaSocialImage,
        },
        {
          name: `twitter:image:alt`,
          content: metaSocialImageAlt,
        },
      ].concat(meta)}
    >
      <link rel="stylesheet" href="https://use.typekit.net/ygb3hbx.css"></link>
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
