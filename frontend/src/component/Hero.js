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
        className="object-cover w-full h-60 opacity-60 block mx-auto"
      />
      <div className="relative -top-40 text-center text-3xl tracking-widest font-bold text-gray-900 w-10/12 my-0 mx-auto border-black border-2 rounded-md">
        <p className="uppercase">{hero[0].title}</p>
      </div>
      <div className="relative -top-36 my-0 mx-auto w-full text-center text-gray-900 ">
        <p className="uppercase">{hero[0].subtitle}</p>
      </div>
    </div>
  )
}
