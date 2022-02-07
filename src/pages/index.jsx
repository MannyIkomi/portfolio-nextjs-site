/** @jsx jsx */
import { jsx } from "@emotion/react"
import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { ProjectCover } from "../components/ProjectCover"
import { ProjectList } from "../components/ProjectList"
import { Footer } from "../components/Footer"

import smoothscroll from "smoothscroll-polyfill"

import {
  onTabletMedia,
  TOUCH_TARGET,
  colors,
  flex,
  firaCode,
  maxTypeWidth,
  typesetAnimation,
  grid,
  s1,
  s05,
} from "../styles"
import { StickyScrollContainer } from "../components/StickyScrollContainer"

import { ContainerWidth } from "../components/ContainerWidth"
import { SectionBlock } from "../components/SectionBlock"

import { useSocialMedia } from "../hooks/useSocialMedia"

import { RichContentSlice } from "../components/slices/RichContentSlice"
import { SocialIcon } from "../components/SocialIcon"
import { ProfilePhoto } from "../components/ProfilePhoto"
import { List, ListElements } from "../components/List"
import { Heading } from "../components/Heading"

console.clear()

const IndexPage = ({ data }) => {
  const projects = data.allPrismicProject.nodes
  const about = data.prismicAbout.data
  const socials = useSocialMedia()

  const [scrollId, setScrollId] = useState("")

  const useScrollToId = elementId => {
    useEffect(() => {
      if (typeof document !== "undefined" && elementId) {
        // https://github.com/iamdustan/smoothscroll
        smoothscroll.polyfill()

        const elementArea = document.getElementById(elementId).getClientRects()
        window.scroll({
          top: elementArea[0].top,
          behavior: "smooth",
        })
      }
    })
  }

  useScrollToId(scrollId)

  const typesetAnimationStyle = [
    firaCode,
    { lineHeight: 1.2 },
    typesetAnimation({
      color: colors.ACCENT,
      animationDelay: "2s",
    }),
  ]

  return (
    <Layout>
      <HtmlHead
        title="Portfolio"
        description={`I use design to take people from what-is
        to what-ought-to-be.`}
      />
      <StickyScrollContainer
        css={{ backgroundColor: colors.LIGHT_GRAY_FOREGROUND }}
      >
        <main
          css={{
            width: "100%",
          }}
        >
          <SectionBlock>
            <ContainerWidth
              css={{
                minHeight: "50vh",
                padding: s1,

                ...grid({
                  gridTemplateColumns: "1fr 3fr",
                  gridTemplateRows: `min-content 1fr`,
                  gridTemplateAreas: `"photo title" "socials subtitle" `,
                  gridGap: s1,
                  padding: s05,
                }),
              }}
            >
              <ProfilePhoto
                motif={true}
                photo={about.photo}
                css={{ gridArea: "photo", width: "100%" }}
              />

              <ContainerWidth
                css={{ gridArea: "title", placeSelf: "end start" }}
              >
                <Heading level={1}>Hi, I'm Manny</Heading>
                <p>{about.role}</p>
              </ContainerWidth>

              <Heading
                level={2}
                css={[
                  {
                    gridArea: "subtitle",
                  },
                ]}
              >
                I use <span css={typesetAnimationStyle}>design</span> to take{" "}
                <span css={typesetAnimationStyle}>people</span> from what-is, to
                what-ought-to-be.
              </Heading>

              <ListElements>
                {socials.map(platform => (
                  <SocialIcon key={platform.label} {...platform} />
                ))}
              </ListElements>
            </ContainerWidth>
          </SectionBlock>

          {projects.length > 0 && (
            <>
              <SectionBlock
                css={{
                  overflow: "visible",
                }}
              >
                <ContainerWidth css={{ overflow: "visible" }}>
                  <ProjectList
                    css={{
                      overflow: "visible",
                      ...flex("column"),
                      alignItems: "center",
                    }}
                  >
                    {projects.map(project => (
                      <ProjectCover
                        {...project}
                        css={[maxTypeWidth, { marginBottom: "10vh" }]}
                        key={project.uid}
                      />
                    ))}
                  </ProjectList>
                </ContainerWidth>
              </SectionBlock>
            </>
          )}
          <SectionBlock css={{ minHeight: "100vh" }}>
            <ContainerWidth
              css={[
                { ...maxTypeWidth, margin: "auto" },
                onTabletMedia({
                  ...grid({
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr",
                  }),
                }),
              ]}
            >
              <ProfilePhoto motif={true} photo={about.photo} />
              <div css={{ h3: { color: colors.MID_BLUE } }}>
                <RichContentSlice primary={{ rich_text: about.title }} />
                <RichContentSlice primary={{ rich_text: about.bio }} />
              </div>
            </ContainerWidth>
          </SectionBlock>
        </main>
        <Footer />
      </StickyScrollContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrismicQuery {
    allPrismicProject(sort: { fields: data___date, order: DESC }) {
      nodes {
        id
        uid
        data {
          date
          description
          subtitle
          title {
            text
          }
          cover_image {
            fluid {
              srcSet
              src
              sizes
            }
            alt
            dimensions {
              height
              width
            }
          }
          tags {
            label
          }
        }
      }
    }
    prismicAbout {
      data {
        role
        photo {
          alt
          dimensions {
            height
            width
          }
          fluid {
            srcSet
            sizes
            src
          }
        }
        bio {
          richText
          text
        }
        title {
          richText
          text
        }
      }
    }
    allPrismicSocials {
      nodes {
        data {
          call_to_action
          label
          url {
            url
          }
        }
      }
    }
  }
`

export default IndexPage
