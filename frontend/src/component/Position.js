import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SubtitleIcon } from "./SubtitleIcon"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
const query = graphql`
  {
    file(name: { eq: "position" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`

export const Position = ({ positions }) => {
  const data = useStaticQuery(query)
  return (
    <div id="position">
      <h2 className=" text-center">OPENINGS</h2>
      <div className="flex flex-row justify-center mb-10">
        {data.file.childrenImageSharp === [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} smaller />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} smaller />
        )}
      </div>
      <ul className="sm:w-128 flex mx-auto mb-10 w-5/6 flex-col">
        {positions.map(p => {
          return (
            <li key={p.id} className=" mb-7">
              <h2 className="text-center sm:text-left people-title pb-2">
                {p.title}
              </h2>
              <p>{p.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
