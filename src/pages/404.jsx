import React from "react"

import TypeMotif from "../static/typemotif.png"
import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { TypesetLink } from "../components/TypesetLink"
import {
  colors,
  firaCode,
  firaSans,
  flex,
  hoverTypesetTransform,
  typesetAnimation,
} from "../styles"
import RelativeContainer from "../components/RelativeContainer"
import { Heading } from "../components/Heading"

const NotFoundPage = ({ data }) => (
  <Layout>
    <HtmlHead
      title="404: Not found"
      description={`Sorry, that page doesn't exist!`}
      // data={data}
    />
    <section
      css={{
        backgroundColor: colors.WHITE,
      }}
    >
      <RelativeContainer
        css={{
          ...flex("column"),
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <div
          css={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.125,

            backgroundImage: `url(${TypeMotif})`,
            backgroundRepeat: "repeat",
            backgroundSize: "10vmax",

            textAlign: "center",
          }}
        ></div>
        <Heading
          level={1}
          css={{
            ...firaCode,

            textAlign: "center",
            fontSize: "50vmin",
            ...firaSans,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          <span css={typesetAnimation({ animationDelay: "0.5s" })}>4</span>
          <span css={typesetAnimation({ animationDelay: "0.75s" })}>0</span>
          <span css={typesetAnimation({ animationDelay: "1.25s" })}>4</span>
        </Heading>
        <p css={{ color: colors.PRIMARY, textAlign: "center" }}>
          Sorry, that page doesn't exist!
        </p>
        <TypesetLink
          to={"/"}
          css={{ color: colors.PRIMARY, textAlign: "center" }}
        >
          Take me home!
        </TypesetLink>
      </RelativeContainer>
    </section>
  </Layout>
)

export default NotFoundPage
