import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export const SubtitleIcon = ({ icon }) => {
  const icondata = icon.gatsbyImageData[0]
  return (
    <>
      <div className="w-8 h-8">
        <GatsbyImage image={icondata} />
      </div>
      <div className="w-8 h-8">
        <GatsbyImage image={icondata} />
      </div>
      <div className="w-8 h-8">
        <GatsbyImage image={icondata} />
      </div>
    </>
  )
}
