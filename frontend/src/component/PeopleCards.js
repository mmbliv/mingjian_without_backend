import React from "react"
import PeopleCard from "./PeopleCard"
import { useStaticQuery, graphql } from "gatsby"
import { SubtitleIcon } from "./SubtitleIcon"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
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

const PeopleCards = ({ graduates, pi }) => {
  const data = useStaticQuery(query)
  return (
    <div id="people">
      <>
        <h2 className="text-center pt-16">PEOPLE</h2>
        <div className="flex flex-row justify-center mb-10 ">
          {data.file.childrenImageSharp === [] ? (
            <SubtitleIcon icon={data.file.childrenImageSharp} smaller />
          ) : (
            <SubtitleIconSvg icon={data.file.publicURL} smaller />
          )}
        </div>
      </>
      <div>
        <h2 className="text-center sm:text-left people-title sm:pl-11">
          Principal Investigator
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5">
          <PeopleCard people={pi[0]} />
        </div>
      </div>
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
    </div>
  )
}
export default PeopleCards
