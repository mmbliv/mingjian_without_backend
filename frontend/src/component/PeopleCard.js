import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PeopleCards from "./PeopleCards"

const PeopleCard = ({ people }) => {
  const { description, email, name, website, photo } = people

  if (people) {
    return (
      <>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mx-0 pb-2 sm:pb-0 text-center pl-5">
              <GatsbyImage
                image={photo.localFile.childImageSharp.gatsbyImageData}
                alt={name}
                className="h-24 w-24 rounded-full ring-2 ring-white mr-6"
              />
            </div>
            <div className="text-sm self-center text-center sm:text-left">
              <p>{name}</p>
              <p>{email}</p>
              <p>{website}</p>
              <hr />
            </div>
          </div>
          <p className="text-sm mt-5">{description}</p>
        </div>
      </>
    )
  }
}
export default PeopleCard
