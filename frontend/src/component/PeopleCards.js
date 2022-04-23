import React from "react"
import PeopleCard from "./PeopleCard"

const PeopleCards = ({ people, title }) => {
  return (
    <div id="people">
      <h2 className="text-center">PEOPLE</h2>
      <h2 className="text-center pb-5 people-title">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-11">
        {people.map(p => {
          return (
            <div key={p.id}>
              <PeopleCard people={p} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PeopleCards
