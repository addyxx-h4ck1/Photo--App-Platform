import React, { useEffect, useState } from 'react'
import SideMenu from '../components/Side-Menu'
import SponsoredMenu from '../components/Sponsored-Menu'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/Login/user-login-slice'
import { fetchallUsers } from '../features/users-slice'

const PixelrArtMainPage = () => {
  const { T } = useSelector((state) => state.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser(T))
    dispatch(fetchallUsers())
  }, [T, dispatch, fetchUser, fetchallUsers])
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
