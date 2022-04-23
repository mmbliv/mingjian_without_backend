import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        headings {
          depth
          value
        }
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          stack
        }
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
