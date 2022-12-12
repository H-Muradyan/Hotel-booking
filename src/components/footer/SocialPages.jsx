import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialPages({ socialPages }) {
  return (
    <div className="col-start-1 col-span-3 md:col-start-5 lg:col-start-10 mt-14">
      <div className="flex">
        {socialPages.map((elem) => {
          return (
            <div key={elem.id} className="cursor-pointer mr-5 ">
              <Link to={elem.link}  target="_blank">
                  <img className='hover:bg-[#d0bd6e] rounded-full' src={elem.image} alt="socialIcon" />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
