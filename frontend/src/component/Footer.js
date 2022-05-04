import React from "react"
import { FaGithubSquare } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="h-32 w-full bg-gray-200 ">
      <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto h-full">
        <div>
          <p>Contact</p>
          <p>address</p>
          <p>Email: mjwen@lbl.gov</p>
        </div>
        <div>
          <p>Website Designed by:</p>
          <a
            href="https://github.com/mmbliv"
            className="flex items-center hover:underline hover:text-Button w-full justify-center sm:justify-start"
          >
            <FaGithubSquare />
            <p>mmbliv</p>
          </a>
        </div>
      </div>
    </div>
    // className="bottom-0 relative mt-11 h-32 w-full bg-slate-400 flex flex-col justify-center items-center"
  )
}
