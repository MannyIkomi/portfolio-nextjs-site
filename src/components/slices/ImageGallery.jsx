/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/react"
import { RichText } from "prismic-reactjs"
import {
  colors,
  maxTypeWidth,
  maxContainerWidth,
  flex,
  captionText,
  onTabletMedia,
} from "../../styles"
import htmlSerializer from "./htmlSerializer"
import { switchRichContentToComponent } from "./RichContentSlice"

export const ImageGallerySlice = props => {
  const { primary, items } = props

  return (
    <section
      css={[
        {
          color: colors.PRIMARY,
          width: "100%",
          padding: "0 1rem",
          margin: "1rem",
          ...maxTypeWidth,
        },
        onTabletMedia({
          padding: 0,
        }),
      ]}
    >
      <div css={{ ...maxTypeWidth }}>
        <RichText
          render={primary.gallery_title.raw}
          // serializeHyperlink={CustomLink}
          htmlSerializer={htmlSerializer}
        />
      </div>
      <div
        css={[
          {
            // progressive enhance from single column vertical scroll
            width: "100%",
            // maxWidth: "100vw",
            // padding: "2rem",
          },
        ]}
      >
        <div
          css={[
            {
              overflowX: "scroll",
              ...flex("row"),
              flexWrap: "nowrap",
              justifyContent: "initial",
            },
          ]}
        >
          {items.map(photo => (
            <figure
              key={photo.image.url}
              css={{
                margin: "0 1rem",
              }}
            >
              <img
                css={{
                  minWidth: "15rem",

                  width: "100%",
                  height: "auto",
                  maxWidth: "66vw",
                }}
                alt={photo.image.alt}
                src={photo.image.url}
                width={photo.image.dimensions.width}
                height={photo.image.dimensions.height}
              />
              <figcaption css={[captionText]}>{photo.image_caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallerySlice
