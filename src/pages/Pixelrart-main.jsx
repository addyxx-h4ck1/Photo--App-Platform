import React, { useState } from 'react'
import SideMenu from '../components/Side-Menu'
import SponsoredMenu from '../components/Sponsored-Menu'
import { Outlet } from 'react-router-dom'

const PixelrArtMainPage = (props) => {
  return (
    <>
      <main className="content-container relative flex justify-between gap-[.5rem] ">
        {/* onClick={() => (setShowSideBar(false), setShowProfileMenu(false))} */}
        <SideMenu />
        <Outlet />
        <section className="sponsored-parent">
          <SponsoredMenu />
        </section>
      </main>
    </>
  )
}

export default PixelrArtMainPage
