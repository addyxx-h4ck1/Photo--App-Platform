import React, { useState } from 'react'
import logo from '../assets/Photography-Logos-removebg-preview.png'
import SideMenu from '../components/Side-Menu'
import SponsoredMenu from '../components/Sponsored-Menu'
import AllPosts from '../components/Posts'
import SideMenuMobile from '../components/Side-menu-Mobile'
const UserAccount = () => {
  const [showsideBar, setShowSideBar] = useState(false)
  return (
    <>
      {/* TOP BAR */}
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
        <div className="menu-actions">
          <button
            className="duration-300 text-xl"
            onClick={() => {
              setShowSideBar(!showsideBar)
            }}
          >
            {showsideBar ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
        {/* SIDEBAR */}
        {showsideBar ? <SideMenuMobile /> : null}
        {/* SIDEBAR */}
      </section>
      {/* CONTENT */}
      <main className="content-container relative flex justify-between gap-[.5rem] ">
        <SideMenu />
        <AllPosts />
        <section className="sponsored-parent">
          <SponsoredMenu />
        </section>
      </main>
    </>
  )
}

export default UserAccount
