import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title="Mingjian Wen">
      <meta name="description" content="This is Mingjian Wen's website" />
    </Helmet>
  )
}

export default SEO
