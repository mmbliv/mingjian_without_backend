import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    file(name: { eq: "people" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(query)

  console.log(data)
  return <div>Blog</div>
}

export default Blog
