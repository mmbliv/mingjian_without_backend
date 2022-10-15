import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Manual } from "./Manual"

export const New = ({ news, showGrid }) => {
  return (
    <div
      id="news"
      className={`${
        showGrid
          ? "w-2/3 mx-auto max-w-3xl"
          : "pt-8 h-128 border-2 rounded-xl p-4 bg-slate-100 shadow-md flex flex-col mt-16 relative"
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
          if (!showGrid) {
            return (
              <AnchorLink to={`/News#${item.title}`} key={item.id}>
                <ul className=" mb-5">
                  <li className=" pb-5">
                    <div className="flex flex-row" id={item.title}>
                      <p className="subTitle text-sm">{item.date}</p>
                    </div>
                    {/* <p>{item.content}</p> */}
                    <div
                      className={`${
                        showGrid ? "mk mk-page markdown" : "mk markdown"
                      }`}
                    >
                      <ReactMarkdown
                        children={item.content}
                        // className="markdown"
                      />
                    </div>
                  </li>
                  <hr />
                </ul>
              </AnchorLink>
            )
          }
          return (
            <ul className=" mb-5">
              <li className=" pb-5">
                <div className="flex flex-row" id={item.title}>
                  <p className="subTitle text-sm">{item.date}</p>
                </div>
                {/* <p>{item.content}</p> */}
                <div
                  className={`${
                    showGrid ? "mk mk-page markdown" : "mk markdown"
                  }`}
                >
                  <ReactMarkdown
                    children={item.content}
                    // className="markdown"
                  />
                </div>
              </li>
              <hr />
            </ul>
          )
        })}
      </div>
      <Manual />
    </div>
  )
}
