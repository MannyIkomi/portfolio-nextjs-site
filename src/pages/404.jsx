import React from "react"

import Layout from "../components/layout"
import HtmlHead from "../components/HtmlHead"
import { TypesetLink } from "../components/TypesetLink"
import { colors, flex, SANS_TYPE } from "../styles"
import { fon } from "../styles/index"

const NotFoundPage = () => (
  <Layout>
    <HtmlHead title="404: Not found" />
    <section
      css={{
        textAlign: "center",

        ...flex("column"),
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",

        background: colors.darkGray10,
      }}
    >
      <h1 css={{ textAlign: "center", fontSize: "50vmin", ...SANS_TYPE }}>
        404
      </h1>
      <p>
        Sorry, that page doesn't exist! <br />
        <TypesetLink to={"/"}>Take me home!</TypesetLink>
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
