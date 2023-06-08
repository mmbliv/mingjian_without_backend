import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content_data/graduates/.*/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        html
        frontmatter {
          Email
          name
          date
        }
        id
      }
    }
  }
`
const Blog = () => {
  const data = useStaticQuery(query)

  console.log(data)
  return <div>Blog</div>
}

export default Blog
