import React from "react"
import { FaGithubSquare } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="h-32 w-ful footer bg-gray-200">
      <div className="flex w-full justify-between items-center max-w-5xl mx-auto h-full ">
        <div>
          <p>Contact</p>
          <p>address</p>
          <p>Email: mjwen@lbl.gov</p>
        </div>
        <div>
          <p>
            &copy;&nbsp;{new Date().getFullYear()}
            <span>&nbsp;Mingjian Wen </span>
          </p>
          <div className="flex flex-row gap-2">
            <p>Designed by</p>
            <a
              href="https://github.com/mmbliv"
              className="flex items-center hover:underline hover:text-Button"
            >
              <FaGithubSquare />
              <p className=" pl-2">mmbliv</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    // className="bottom-0 relative mt-11 h-32 w-full bg-slate-400 flex flex-col justify-center items-center"
  )
}
