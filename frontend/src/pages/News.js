import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"
import { New } from "../component/New"

const News = ({ data }) => {
  const {
    allStrapiNews: { nodes: news },
  } = data

  return (
    <Layout>
      <New news={news} showGrid />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiNews(sort: { fields: id, order: DESC }) {
      nodes {
        content
        id
        title
        date(formatString: "MMMM Do, YYYY")
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
export default News
