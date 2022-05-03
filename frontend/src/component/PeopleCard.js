import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PeopleCards from "./PeopleCards"

const PeopleCard = ({ people }) => {
  const { description, email, name, website, photo, title } = people
  console.log(people)

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mx-0  sm:pb-0 text-center">
            <GatsbyImage
              image={photo.localFile.childImageSharp.gatsbyImageData}
              alt={name}
              className="h-28 w-28 rounded-full ring-2 ring-white sm:mr-4 "
            />
          </div>
          <div className="text-sm self-center text-center sm:text-left ">
            <p className="text-lg font-extrabold">{name}</p>
            <p>{title}</p>
            <p className="text-slate-900">{email}</p>
            <p>{website}</p>
          </div>
        </div>
        <p className="text-sm mt-5">{description}</p>
      </div>
    </>
  )
}
export default PeopleCard
