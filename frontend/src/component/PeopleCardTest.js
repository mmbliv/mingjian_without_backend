import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"

const PeopleCardTest = ({ people, img }) => {
  const { html, email, name, website, frontmatter, cv } = people
  // console.log(img)
  // console.log(description)
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
            {/* <p>
              <ReactMarkdown children={cv} className="markdown" />
            </p> */}
            {frontmatter.CV && (
              <p className="markdown">
                <a href={frontmatter.CV}>CV</a>
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
