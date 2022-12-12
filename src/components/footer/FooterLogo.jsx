import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/images/logo.png";

export default function FooterLogo() {
  return (
    <div className="mb-20 col-span-2 lg:col-start-2">
      <div className="cursor-pointer">
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  )
}
