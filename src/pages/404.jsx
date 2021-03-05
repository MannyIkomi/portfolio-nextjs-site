import React from "react"

import TypeMotif from "../../static/typemotif.svg"
import Layout from "../components/Layout"
import HtmlHead from "../components/HtmlHead"
import { TypesetLink } from "../components/TypesetLink"
import {
  CODE_TYPE,
  colors,
  flex,
  hoverTypesetTransform,
  SANS_TYPE,
  typesetAnimation,
} from "../styles"
import RelativeContainer from "../components/RelativeContainer"

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
        <h1
          css={{
            ...CODE_TYPE,

            textAlign: "center",
            fontSize: "50vmin",
            ...SANS_TYPE,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          <span css={typesetAnimation({ animationDelay: "0.5s" })}>4</span>
          <span css={typesetAnimation({ animationDelay: "0.75s" })}>0</span>
          <span css={typesetAnimation({ animationDelay: "1.25s" })}>4</span>
        </h1>
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
