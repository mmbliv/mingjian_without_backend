import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    file(name: { eq: "CV_mingjian" }) {
      publicURL
    }
  }
`
const PeopleCardTest = ({ people, img, pi }) => {
  const { html, email, name, website, frontmatter, cv } = people
  // console.log(img)
  // console.log(description)
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mx-0  sm:pb-0 text-center">
            {img.map(p => {
              if (p.relativePath === frontmatter.photo) {
                return (
                  <GatsbyImage
                    image={p.childImageSharp.gatsbyImageData}
                    alt={name}
                    className="h-32 w-32 headshot sm:mr-4 "
                  />
                )
              }
            })}
            {/* <GatsbyImage
              image={photo.localFile.childImageSharp.gatsbyImageData}
              alt={name}
              className="h-32 w-32 headshot sm:mr-4 "
            /> */}
          </div>
          <div className="text-sm self-center text-center sm:text-left">
            <p className="text-lg font-semibold">{frontmatter.name}</p>
            {/* <p className="w-max">{title}</p> */}
            <p className="text-slate-800">{frontmatter.email}</p>
            <p>{website}</p>

            {pi && (
              <p className="markdown">
                <a href={data.file.publicURL}>CV</a>
              </p>
            )}
          </div>
        </div>
        <p className="text-sm mt-5">
          <ReactMarkdown
            children={frontmatter.description}
            className="markdown"
          />
        </p>
        {/* <p className="text-sm mt-5">{description}</p> */}
      </div>
    </>
  )
}
export default PeopleCardTest
