import React, { useEffect, useState } from 'react'
import SideMenu from '../components/Side-Menu'
import SponsoredMenu from '../components/Sponsored-Menu'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PixelrArtMainPage = () => {
  const { T } = useSelector((state) => state.token)
  return (
    <>
      {T ? (
        <main className="content-container relative flex justify-between gap-[.5rem] ">
          <SideMenu />
          <Outlet />
          <section className="sponsored-parent">
            <SponsoredMenu />
          </section>
        </main>
      ) : (
        <Navigate to={'/auth/signin'} />
      )}
    </>
  )
}

export default PixelrArtMainPage
