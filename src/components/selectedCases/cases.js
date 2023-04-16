import React from 'react'
import './cases.css'
import Case from '../cases component/case'

const Cases = () => {
  return (
    <section id="cases">
      <h1 className="cases-heading reveal">
        "Behold, a showcase of some of the fun and wacky web projects I've
        conjured up on my journey through the coding universe!"
      </h1>
      <Case />
      <button className="for-enquiry reveal" valign="bottom">
        FOR ENQUIRY
      </button>
    </section>
  )
}
export default Cases
