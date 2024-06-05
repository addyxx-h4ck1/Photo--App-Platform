import React from 'react'
import Sidebar from './Sidebar'
import icon from '../assets/Photography-Logos-removebg-preview.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { sidebarActions } = props

  return (
    <article className="navbar-container bg-primary z-50 mb-3 flex justify-around items-center text-[17px] sticky top-0 px-5 py-2">
      <div className="navbar-logo flex">
        <img
          src={icon}
          alt="logo"
          className="aspect-[1/1] w-[100px] h-[40px] object-cover "
        />
        <i className="fa fa-trademark text-xs"></i>
      </div>
      <div className="navbar-links flex gap-6 items-center text-nowrap">
        <p>Collection</p>
        <p>Market place</p>
        <p>Community</p>
        <Link
          preventScrollReset={true}
          to={'/auth/signup'}
          className="top-btn duration-500 hover:duration-500 hover:border-[#22c1c3] py-3 px-4 hover:bg-[#22c1c3] border-2 rounded-3xl hover:text-primary font-semibold"
        >
          Get Started
        </Link>
      </div>
      <button className="menu-btn text-xl" onClick={sidebarActions}>
        <i className="fa fa-bars"></i>
      </button>
    </article>
  )
}

export default Navbar
