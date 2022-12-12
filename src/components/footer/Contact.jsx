import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts({ contacts }) {
  return (
    <div className="col-start-1 col-span-3 md:col-start-5 lg:col-start-10">
      <p className="text-white mb-6 font-semibold text-lg mt-20 lg:mt-0">
        Contacts
      </p>
      {contacts.map((elem) => {
        return (
          <div key={elem.id} className="flex items-center mt-4 ">
            <div className=" w-6">
              <img className='hover:text-[#d0bd6e]' src={elem.image} alt="icon" />
            </div>
            <div className="w-80 ml-3">
              <Link to={elem.link} className="text-white hover:text-[#d0bd6e]">
                  {elem.text}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
