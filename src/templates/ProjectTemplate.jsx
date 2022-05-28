/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  MENUBAR_HEIGHT,
  flex,
  colors,
  onTabletMedia,
  onMedia,
  onSupport,
  onDesktopMedia,
  CODE_TYPE,
  SANS_TYPE,
  maxTypeWidth,
  maxContainerWidth,
  grid,
  captionText,
  onMediaWidth,
} from "../styles"

import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { StickyScrollContainer } from "../components/StickyScrollContainer"
import { StickyMenuBar } from "../components/StickyMenuBar"
import { ContainerWidth } from "../components/ContainerWidth"
import { Footer } from "../components/Footer"

// Refactor Modules into Prismic Slices
import { ImageBlock } from "../components/blocks/ImageBlock"
import {
  ParagraphBlock,
  switchRichContentToComponent,
} from "../components/blocks/ParagraphBlock"

import { TokenList } from "../components/TokenList"
import {
  TOGGLE,
  HEADING_1,
  HEADING_2,
  DIVIDER,
  HEADING_3,
  IMAGE,
  PARAGRAPH,
  QUOTE,
} from "../util/blockTypes"

import {
  Heading1Block,
  Heading2Block,
  Heading3Block,
} from "../components/blocks/HeadingBlock"

import { DividerBlock } from "../components/blocks/DividerBlock"
import { QuoteBlock } from "../components/blocks/QuoteBlock"

export function parseRichText(props) {
  const { type } = props
  const block = props[type]
  // TODO: Add support for annotations like bold, italic, underline
  return block.rich_text.map(ast => <span>{ast.text.content}</span>)
}

export function parseCaption(props) {
  const { type } = props
  const block = props[type]
  return block.caption.map(ast => ast.text.content).join(" ")
}

function switchBlockToComponent(block) {
  switch (block.type) {
    case HEADING_1:
      return <Heading1Block {...block} key={block.id}></Heading1Block>
    case HEADING_2:
      return <Heading2Block {...block} key={block.id}></Heading2Block>
    case HEADING_3:
      return <Heading3Block {...block} key={block.id}></Heading3Block>

    case IMAGE:
      return <ImageBlock {...block} key={block.id} />
    case DIVIDER:
      return <DividerBlock {...block} />
    case QUOTE:
      return <QuoteBlock {...block} />
    case PARAGRAPH:
      return <ParagraphBlock {...block} key={block.id} />

    default:
      console.warn(`Could not find matching Component for Block: ${block.type}`)
      return (
        <div css={{ backgroundColor: "red" }}>
          Could not find matching Component for Slice: {block.type}
        </div>
      )
  }
}

const ProjectTemplate = ({ data, site }) => {
  const thisProject = data.notionPage
  const { id, children, properties } = thisProject

  const { Role, Status, Name } = properties
  const title = Name.title[0].plain_text

  return (
    <Layout>
      <HtmlHead
        title={`${title}`}
        // description={description}
        project={thisProject}
        path={`/${id}`}
      />
      <StickyScrollContainer
        css={{ backgroundColor: colors.LIGHT_GRAY_FOREGROUND }}
      >
        <main>
          <article
            css={{
              ...flex("column"),
              alignItems: "center",
            }}
          >
            <header
              css={[
                {
                  color: colors.PRIMARY,
                  ...flex("row"),
                  alignItems: "center",
                  width: "100%",
                  ...maxTypeWidth,
                  margin: "2rem 0",
                  padding: "0 1rem",
                },
                onTabletMedia({
                  minHeight: "50vh",
                  minHeight: "33vh",
                  padding: 0,
                }),
              ]}
            >
              <ContainerWidth>
                <h1>{title}</h1>

                <TokenList>
                  {Role.multi_select.map(role => role.name)}
                </TokenList>
              </ContainerWidth>
            </header>
            <div
              css={[{ ...flex("column"), alignItems: "center", width: "100%" }]}
            >
              {children.map(switchBlockToComponent)}
            </div>
          </article>
        </main>

        <Footer
          css={onMediaWidth("70rem", { position: "sticky", bottom: 0 })}
        />
      </StickyScrollContainer>
    </Layout>
  )
}

export const query = graphql`
  # project has slug
  query($uid: String!) {
    #gets the single requested project data for viewing
    notionPage(id: { eq: $uid }) {
      id
      notionId
      properties {
        Name {
          title {
            plain_text
          }
        }
        Cover {
          type
          id
          files {
            file {
              url
            }
          }
        }
        Cover_Alt {
          rich_text {
            plain_text
          }
        }
        Link {
          url
        }
        Role {
          multi_select {
            name
          }
        }
        Status {
          select {
            name
          }
        }
        Subtitle {
          rich_text {
            plain_text
          }
        }
        Description {
          rich_text {
            plain_text
          }
        }
      }
      children {
        ... on NotionBlock_toggle {
          type
          notionId
          toggle {
            color
            rich_text {
              annotations {
                bold
                code
                color
                italic
                strikethrough
                underline
              }
              plain_text
              text {
                content
              }
              type
            }
          }
        }
        ... on NotionBlock_table_of_contents {
          id
          type
        }
        ... on NotionBlock_table {
          id
          type
        }
        ... on NotionBlock_quote {
          id
          type
          quote {
            rich_text {
              annotations {
                bold
                code
                color
                italic
                strikethrough
                underline
              }
              plain_text
              type
              text {
                content
              }
            }
          }
        }
        ... on NotionBlock_paragraph {
          id
          type
          paragraph {
            rich_text {
              href
              plain_text
              type
              text {
                content
              }
            }
          }
        }
        ... on NotionBlock_numbered_list_item {
          id
          type
          numbered_list_item {
            rich_text {
              plain_text
              type
              text {
                content
              }
            }
          }
        }
        ... on NotionBlock_image {
          id
          type
          image {
            caption {
              plain_text
              text {
                content
              }
              type
            }
            file {
              url
            }
            external {
              url
            }
          }
        }
        ... on NotionBlock_heading_3 {
          id
          type
          heading_3 {
            rich_text {
              plain_text
              type
              text {
                content
              }
            }
          }
        }
        ... on NotionBlock_heading_2 {
          id
          type
          heading_2 {
            rich_text {
              plain_text
              text {
                content
              }
              type
            }
          }
        }
        ... on NotionBlock_heading_1 {
          id
          type
          heading_1 {
            rich_text {
              plain_text
              type
              text {
                content
              }
            }
          }
        }
        ... on NotionBlock_divider {
          type
          id
        }
        ... on NotionBlock_callout {
          id
          type
        }
        ... on NotionBlock_bulleted_list_item {
          id
          type
          bulleted_list_item {
            rich_text {
              plain_text
              annotations {
                bold
                code
                color
                italic
                strikethrough
                underline
              }
              text {
                content
              }
              type
            }
          }
        }
        ... on NotionBlock_code {
          id
          type
        }
      }
    }
  }
`

export default ProjectTemplate
