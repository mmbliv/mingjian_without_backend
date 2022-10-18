import React from "react"

import manual from "../icon/manual.png"
export const Manual = () => {
  return (
    <div className="w-full absolute -bottom-28 left-0">
      <a
        href="https://www.chee.uh.edu/faculty/wen-mingjian"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={manual} alt="book" className="m-auto w-2/3" />
      </a>
    </div>
  )
}
