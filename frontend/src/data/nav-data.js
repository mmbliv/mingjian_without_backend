import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"

export const navData = ["about", "publication", "people", "research", "code"]
export const NavData = ({ side }) => {
  return (
    <>
      {navData.map((item, index) => (
        <li
          key={index}
          className="uppercase hover:text-Hightlight border-orange-600"
        >
          <AnchorLink to={`/#${item}`}>
            <h1 className={`${side ? "side-nav indent-0" : "btn"}`}> {item}</h1>
          </AnchorLink>
        </li>
      ))}
    </>
  )
}
