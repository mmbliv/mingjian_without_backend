import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
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
      <div className=" w-14 h-14 mx-auto mb-2">
        <Link to="/News">
          <img src="icon/News.svg" alt="news" />
        </Link>
        <hr />
      </div>
      <div className={`${!showGrid && "overflow-scroll h-128 p-4"}`}>
        {news.map(item => {
          return (
            <AnchorLink to={`/News#${item.title}`} key={item.id}>
              <ul className=" mb-5">
                <li className="pb-8">
                  <div className="flex flex-row">
                    <p className="subTitle text-sm">{item.date}</p>
                  </div>
                  {/* <p>{item.content}</p> */}
                  <div className={`${showGrid ? "mk mk-page" : "mk"}`}>
                    <ReactMarkdown children={item.content} />
                  </div>
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
