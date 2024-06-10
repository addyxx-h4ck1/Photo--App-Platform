import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import Header from './profile-components/Header'
import About from './profile-components/About'
import Services from './profile-components/Services'
import Photos from './profile-components/Photos'
import { Navigate } from 'react-router-dom'
import LoadingData from '../../components/Data-loading'

const Profile = () => {
  const { fetchLoading } = useSelector((state) => state.token)
  const { T } = useSelector((state) => state.token)
  const { userInfo } = useSelector((state) => state.token)
  //desturcture and distribute user info
  const {
    userName,
    brandName,
    bio,
    cImg,
    joined,
    loc,
    pImg,
    photos,
    sFb,
    sIg,
    sWhtpp,
    services,
    website,
  } = userInfo
  return (
    <>
      {fetchLoading ? (
        <LoadingData />
      ) : (
        <>
          {T ? (
            <main className="profile-container flex justify-between mx-3 gap-3 relative">
              <section className="profile-media-container  w-[50%] flex-grow">
                <Header
                  userName={userName}
                  brandName={brandName}
                  bio={bio}
                  joined={joined}
                  cImg={cImg}
                  loc={loc}
                  pImg={pImg}
                  sFb={sFb}
                  sWhtpp={sWhtpp}
                  sIg={sIg}
                />
                <About />
                <Services />
              </section>
              <section className="profile-media-container profile-cont-photos sticky top-[60px]  bg-bgPrimary w-[40%] flex-grow p-2 h-[90vh] overflow-hidden overflow-y-auto">
                <h1 className="font-bold text-lg my-2">Photos</h1>
                <Photos photos={photos} />
              </section>
            </main>
          ) : (
            <Navigate to={'/auth/signin'} />
          )}
        </>
      )}
    </>
  )
}

export default Profile
