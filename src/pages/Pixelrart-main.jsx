import React, { useEffect, useState } from 'react'
import SideMenu from '../components/Side-Menu'
import SponsoredMenu from '../components/Sponsored-Menu'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/Login/user-login-slice'

const PixelrArtMainPage = () => {
  const { T } = useSelector((state) => state.token)
  const { userInfo } = useSelector((state) => state.token)
  const { fetchLoading } = useSelector((state) => state.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser(T))
  }, [T, dispatch, fetchUser])
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
