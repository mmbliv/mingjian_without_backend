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
        <img src={manual} alt="book" className="m-auto w-40 -mb-3" />
      </a>
    </div>
  )
}
