/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "../../src/fonts/fira-code-v10-latin/fira-code.css"
import "../../src/fonts/fira-sans-v10-latin/fira-sans.css"
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
  title,
  url,
  path,
  project,
}) {
  // const cmsProjects =
  //   data &&
  //   data.allStrapiProjects.nodes.filter(
  //     ({ draft, feature }) => !draft && true // !feature
  //   )
  // const featureProject = cmsProjects.filter(
  //   project => project.feature === true
  // )[0]

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
    coverImageSrc || (project && project.cover_image.url) || ""
  const metaSocialImageAlt =
    coverImageAlt || (project && project.cover_image.alt) || ""
  const metaOpenGraphType =
    openGraphType || site.siteMetadata.openGraphType || "website"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s — ${site.siteMetadata.title}`}
      // The following required properties are missing:
      // og:url, og:type, og:title, og:image, og:description, fb:app_id
    >
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://use.typekit.net/ygb3hbx.css"></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <style></style>

      <meta name="description" content={metaDescription} />
      {/* OPEN GRAPH */}
      <meta property="og:url" content={metaUrl + path} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaUrl + metaSocialImage} />
      <meta property="og:type" content={metaOpenGraphType} />

      {/* TWITTER */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={metaAuthor} />
      <meta name="twitter:site" content={metaAuthor} />
      <meta name="twitter:image" content={metaUrl + metaSocialImage} />
      <meta name="twitter:image:alt" content={metaSocialImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
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
