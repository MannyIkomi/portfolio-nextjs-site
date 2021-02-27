import { graphql, useStaticQuery } from "gatsby"

export const useSocialMedia = () => {
  const data = useStaticQuery(graphql`
    query SocialMedia {
      allStrapiSocials(sort: {order: DESC, fields: id}) {
    nodes {
      href
      alt
      platform
    }
  }
    }
  `)
  const socialMedia = data.allStrapiSocials.nodes
  return socialMedia
}
