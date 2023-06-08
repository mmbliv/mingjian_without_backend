import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const query = `
{
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content_data\\/graduates\\/.*/"}}
    sort: {fields: frontmatter___date, order: ASC}
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

const GraduatesCards = () => {
  const data = useStaticQuery(query)
  const {
    allMarkdownRemark: { nodes: graduates },
  } = data
  if (graduates.length)
    return (
      <div>
        <h2 className="text-center sm:text-left people-title sm:pl-11 ">
          Graduate Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
          {graduates.map(graduate => {
            return (
              <div key={graduate.id}>
                <PeopleCard people={graduate} />
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default GraduatesCards
