import React from "react"
import Layout from "../component/Layout"
import { Code } from "../component/Code"
import { graphql } from "gatsby"

const Codes = ({ data }) => {
  const {
    allStrapiCodes: { nodes: codes },
  } = data

  return (
    <Layout>
      <Code codes={codes} showGrid />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCodes(sort: { fields: id, order: DESC }) {
      nodes {
        content
        github
        document
        id
        title
      }
    }
  }
`
export default Codes
