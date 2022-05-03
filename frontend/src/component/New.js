import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

export const New = ({ news, showGrid }) => {
  return (
    <div
      id="news"
      className={`${
        showGrid
          ? "w-2/3 mx-auto max-w-3xl"
          : "pt-8 h-128 border-2 rounded-xl p-4 bg-slate-100 shadow-md flex flex-col mt-16"
      }`}
    >
      <div className="w-20 h-20 mx-auto mb-4">
        <Link to="/News">
          <img src="icon/News.svg" alt="news" />
        </Link>
        <hr />
      </div>
      <div className={`${!showGrid && "overflow-scroll h-128 p-4"}`}>
        {news.map(item => {
          return (
            <AnchorLink to={`/News#${item.title}`} key={item.id}>
              <ul>
                <li className="pb-8">
                  <div className="flex flex-row">
                    <p className="subTitle text-sm">{item.date}</p>
                  </div>
                  {/* <p>{item.content}</p> */}
                  <ReactMarkdown children={item.content} />
                  {/* {item.img && (
                    <GatsbyImage
                      image={item.img.localFile.childImageSharp.gatsbyImageData}
                      alt={item.title}
                      className="mx-auto block h-80"
                    />
                  )} */}
                  <hr />
                </li>
              </ul>
            </AnchorLink>
          )
        })}
      </div>
    </div>
  )
}
