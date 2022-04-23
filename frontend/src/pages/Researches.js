import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"
import { Research } from "../component/Research"

const Researches = ({ data }) => {
  const {
    allStrapiRes: { nodes: researches },
  } = data

  return (
    <Layout>
      <Research researches={researches} />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiRes(sort: { fields: id, order: DESC }) {
      nodes {
        id
        title
        descrip
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
export default Researches
