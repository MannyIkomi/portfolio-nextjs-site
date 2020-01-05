/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"

import { menubarHeight } from "../styles"
import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenu } from "../components/StickyMenu"
import { InlineLink } from "../components/InlineLink"
import { Footer } from "../components/Footer"
import { ImageModule } from "../components/ImageModule"
import { CaptionModule } from "../components/CaptionModule"
import { TextModule } from "../components/TextModule"

const ProjectTemplate = ({ data }) => {
  const project = data.allStrapiProjects.nodes[0]
  const {
    slug,
    title,
    modules,
    coverAlt,
    description,
    metaDescription,
  } = project
  return (
    <Layout>
      <HtmlHead title={project.title} />
      <StickyScrollContainer
        css={{
          "::before": {
            content: "",
            display: "block",
            width: "100%",
            maxHeight: menubarHeight,
          },
        }}
      >
        <StickyMenu>
          <InlineLink to={"/"}>Werk</InlineLink>
          <InlineLink to={"/about"}>About</InlineLink>
          <InlineLink to={"/resume"}>Resume</InlineLink>
          <InlineLink to={"/contact"}>Say Hello</InlineLink>
        </StickyMenu>

        {/* <aside>
          <nav>side bar menu</nav>
        </aside> */}
        <main>
          Dynamic Project Page
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <article>
            <header>
              <h1>{title}</h1>
              <h1>{description}</h1>
            </header>
            <main>
              {modules.map(module => {
                console.log(module)

                switch (module.type) {
                  case "image":
                    return <ImageModule {...module} key={module.id} />
                  case "text":
                    return <TextModule {...module} key={module.id} />
                  case "caption":
                    return <CaptionModule {...module} key={module.id} />
                  // case 'section':
                  // use to split
                  //   return <div>CREATE SECTION MODULE</div> with glyph
                  default:
                    throw new Error(
                      `Could not find matching Component for Module: ${module.type}`
                    )
                }
              })}
            </main>
          </article>
        </main>
      </StickyScrollContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allStrapiProjects(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        modules {
          id
          imageAlt
          text
          type
          image {
            publicURL
          }
        }
        tags {
          designTags
        }
        title
        coverAlt
        description
        metaDescription
      }
    }
  }
`

export default ProjectTemplate
