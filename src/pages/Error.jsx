import React from 'react'
import error from "/images/error.webp"

const Error = () => {
  return (
    <div className='flex justify-center items-center mt-14'>
        <img src={error} alt="error GIF" />
    </div>
  )
}

export default Error