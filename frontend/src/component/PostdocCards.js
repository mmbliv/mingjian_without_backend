import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PeopleCardTest from "./PeopleCard"
const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content_data/people/postdoc/.*/" }
      }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          Email
          name
          date
          photo
          description
        }
        id
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "peopel/postdoc/postdoc_photo" } }
    ) {
      nodes {
        relativePath
        extension
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

const PostdocCards = () => {
  const data = useStaticQuery(query)
  const {
    allMarkdownRemark: { nodes: postdoc },
    allFile: { nodes: photo },
  } = data
  if (postdoc.length)
    return (
      <div>
        <h2 className="text-center sm:text-left people-title sm:pl-11 ">
          Postdoc
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
          {postdoc.map(p => {
            return (
              <div key={p.id}>
                {/* <PeopleCard people={graduate} /> */}
                <PeopleCardTest people={postdoc} img={photo} />
              </div>
            )
          })}
        </div>
      </div>
    )
  else return null
}

export default PostdocCards
