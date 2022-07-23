import React from "react"
import { FaGithubSquare } from "react-icons/fa"
import { GrDocument } from "react-icons/gr"
import { Link } from "gatsby"
import { SubtitleIcon } from "./SubtitleIcon"
import { useStaticQuery, graphql } from "gatsby"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
import ReactMarkdown from "react-markdown"
const query = graphql`
  {
    file(name: { eq: "code" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`

export const Code = ({ codes, showLink, showGrid }) => {
  const data = useStaticQuery(query)

  return (
    <div id="codes" className="w-full pt-12 mb-32">
      <h2 className="text-center pt-8">
        {showLink ? <Link to="Codes">CODES</Link> : "CODES"}
      </h2>
      <div className="flex flex-row justify-center pb-6 mb-10">
        {data.file.childrenImageSharp === [] ? (
          <SubtitleIcon icon={data.file.childrenImageSharp} />
        ) : (
          <SubtitleIconSvg icon={data.file.publicURL} />
        )}
      </div>
      <ul
        className={`${
          showGrid
            ? "grid grid-cols-1 place-content-center w-full place-items-center gap-7"
            : "px-14 grid grid-cols-1 sm:grid-cols-2 gap-16"
        }`}
      >
        {codes.map(item => {
          return (
            <li
              key={item.id}
              className="border-yellow-600 border-b-4 rounded-lg p-5 bg-slate-100 shadow-xl max-w-3xl"
            >
              <p className="subTitle">{item.title}</p>
              <p>
                <ReactMarkdown children={item.content} className="markdown" />
              </p>
              {/* <p>{item.content}</p> */}

              <a
                href={item.github}
                className="pt-2 flex items-center hover:underline hover:text-Button"
              >
                <FaGithubSquare />
                <p className="pl-3 ">GitHub</p>
              </a>
              <a
                href={item.document}
                className="pt-2 flex items-center hover:underline hover:text-Button"
              >
                <GrDocument />
                <p className="pl-3 ">Documentation</p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
