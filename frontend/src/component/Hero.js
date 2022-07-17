import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allStrapiHero {
      nodes {
        background {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        title
        subtitle
      }
    }
  }
`

export const Header = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiHero: { nodes: hero },
  } = data
  return (
    <div className="mt-11 w-full ">
      <GatsbyImage
        image={hero[0].background.localFile.childImageSharp.gatsbyImageData}
        alt={hero[0].title}
        className="object-cover w-full h-60 opacity-50 block mx-auto"
      />

      <div className="relative -top-40 text-center text-4xl tracking-wider w-fit font-bold text-gray-900 max-w-6xl my-0 mx-auto p-1 border-b-2 border-black">
        <p className="uppercase hero-title">{hero[0].title}</p>
      </div>
      <div className="relative -top-36 my-0 mx-auto w-full text-center text-gray-900 ">
        <p className="uppercase hero-subtitle">{hero[0].subtitle}</p>
      </div>
    </div>
  )
}
