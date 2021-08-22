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
import { DebugDataPre } from "../DebugDataPre"

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
            width: "100%",
          },
        ]}
      >
        <div
          css={[
            {
              overflowX: "scroll",
              overflowY: "hidden",

              ...flex("row"),
              flexWrap: "nowrap",
              justifyContent: "initial",
            },
          ]}
        >
          {items.map(photo => {
            const staticWidth = photo.image.dimensions.width
            const staticHeight = photo.image.dimensions.height

            return (
              <figure
                key={photo.image.url}
                css={{
                  marginRight: "1rem",
                }}
              >
                <img
                  css={{
                    objectFit: "cover",
                    // objectPosition: "center",

                    aspectRatio: `${staticWidth}/${staticHeight}`,

                    width: "100%",
                    height: "auto",

                    minWidth: "20rem",
                    // maxWidth: "66vw",

                    minHeight: "20rem",
                    // maxHeight: "66vh",
                  }}
                  alt={photo.image.alt}
                  src={photo.image.fluid?.src}
                  srcSet={photo.image.fluid?.srcSet}
                  sizes={photo.image.fluid?.sizes}
                  width={staticWidth}
                  height={staticHeight}
                />
                <figcaption css={[captionText]}>
                  {photo.image_caption}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImageGallerySlice
