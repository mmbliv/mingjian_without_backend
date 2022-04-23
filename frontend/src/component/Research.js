import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { SubtitleIcon } from "./SubtitleIcon"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(name: { eq: "research" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`

export const Research = ({ researches, showLink }) => {
  const data = useStaticQuery(query)
  return (
    <article
      id="research"
      className="px-14 sm:w-4/5 mx-auto sm:pt-20 max-w-5xl"
    >
      <h2 className="text-center">
        {showLink ? <Link to="Researches">RESEARCH</Link> : "RESEARCH"}
      </h2>
      <div className="flex flex-row justify-center mb-10">
        {data.file.childrenImageSharp === [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} />
        )}
      </div>
      <ul className="grid gap-5">
        {researches.map(item => {
          return (
            <AnchorLink
              to={`/Researches#${item.title}`}
              key={item.id}
              className="pb-6 w-full"
            >
              <p className="subTitle">{item.title}</p>
              <hr />
              {showLink ? (
                <p>{item.descrip.split(0, 200)}...</p>
              ) : (
                <p>{item.descrip}</p>
              )}

              <GatsbyImage
                image={item.img.localFile.childImageSharp.gatsbyImageData}
                alt={item.title}
                className="w-96 mx-auto block"
              />
            </AnchorLink>
          )
        })}
      </ul>
    </article>
  )
}
