import React, { useState } from 'react'
import logo from '../assets/Photography-Logos-removebg-preview.png'
import SideMenuMobile from '../components/Side-menu-Mobile'
import ProfileMenu from '../components/Profile-Menu'
import { Link, NavLink, Outlet } from 'react-router-dom'

const PixelrartTopNav = (props) => {
  const [showsideBar, setShowSideBar] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  return (
    <>
      <section className="top-bar w-full py-2 bg-primary sticky top-0 z-50 flex justify-around items-center border-b-[.2px] border-[#8080801c] px-4">
        <div className="top-bar-logo flex">
          <img
            src={logo}
            alt="logo"
            className="aspect-[1/1] w-[100px] h-[40px] object-cover"
          />
          &#8482;
        </div>
        <div className="search">
          <form action="">
            <input
              type="search"
              placeholder="search for artists..."
              className="py-2 px-4 rounded-tl-lg rounded-bl-lg bg-[#8080807e] outline-0 border-0"
            />
            <button className="py-2 px-4 rounded-tr-lg hover:duration-300 rounded-br-lg bg-[#8080807e] text-[aqua] hover:text-[white] duration-300">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="menu-actions flex justify-center items-center gap-4">
          <button
            className="duration-300 text-xl bg-bgPrimary p-2 px-4 rounded-lg"
            onClick={() => {
              setShowSideBar(!showsideBar)
            }}
          >
            <i className={`fa ${showsideBar ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div
            className=""
            onClick={() => {
              setShowProfileMenu(!showProfileMenu)
            }}
          >
            <img
              src="https://www.royalreelphotography.co.ke/wp-content/uploads/2021/02/Royal-Reel-Photography-Portrait-Photography-in-Kenya-8.jpg"
              alt=""
              className="w-[40px] h-[40px] rounded-lg object-cover overflow-hidden"
            />
          </div>
        </div>
        {/* SIDEBAR */}
        {showProfileMenu ? <ProfileMenu props={setShowProfileMenu} /> : null}
        {showsideBar ? <SideMenuMobile props={setShowSideBar} /> : null}
        {/* SIDEBAR */}
      </section>
      <Outlet props={setShowProfileMenu} />
    </>
  )
}

export default PixelrartTopNav
