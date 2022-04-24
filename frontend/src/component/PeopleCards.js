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

const PeopleCards = ({ people, title }) => {
  const data = useStaticQuery(query)
  return (
    <div id="people">
      {!title && (
        <>
          <h2 className="text-center pt-16">PEOPLE</h2>
          <div className="flex flex-row justify-center">
            {data.file.childrenImageSharp === [] ? (
              <SubtitleIcon icon={data.file.childrenImageSharp} />
            ) : (
              <SubtitleIconSvg icon={data.file.publicURL} />
            )}
          </div>
        </>
      )}
      <h2 className="text-center pb-5 people-title">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11">
        {people.map(p => {
          return (
            <div key={p.id}>
              <PeopleCard people={p} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PeopleCards
