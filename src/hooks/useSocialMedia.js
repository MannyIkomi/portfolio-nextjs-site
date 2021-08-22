import { graphql, useStaticQuery } from "gatsby"

export const useSocialMedia = () => {
  const data = useStaticQuery(graphql`
    query SocialMedia {
      allPrismicSocials {
    nodes {
      data {
        call_to_action
        label
        url {
          url
        }
        icon {
          alt
          url
        }
      }
    }
  }
    }
  `)
  
  return data.allPrismicSocials.nodes.map(node => node.data)
}
