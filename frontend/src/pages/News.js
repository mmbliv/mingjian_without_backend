import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"
import { New } from "../component/New"
import { convertHtmlToArray } from "../utils/convertHtmlToArray"

const News = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: news },
  } = data
  const dataArray = convertHtmlToArray(news[0].html)
  return (
    <Layout>
      <New news={dataArray} showGrid />
    </Layout>
  )
}
export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/news/.*/" } }
    ) {
      nodes {
        id
        html
      }
    }
  }
`
export default News
