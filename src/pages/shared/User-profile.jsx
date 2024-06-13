import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import Header from './profile-components/Header'
import About from './profile-components/About'
import Services from './profile-components/Services'
import Photos from './profile-components/Photos'
import { Navigate, useParams } from 'react-router-dom'
import LoadingData from '../../components/Data-loading'
import { fetchUserById } from '../../utils/fetch-user'
import Error404 from '../../components/Error404'
const UserProfile = () => {
  const [loading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const { user_Id } = useParams()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)
        const user = await fetchUserById(user_Id)
        setUser(user.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
      }
    }
    fetchUser()
  }, [fetchUserById])
  //desturcture and distribute user info

  return (
    <>
      {loading ? (
        <LoadingData />
      ) : (
        <>
          {user ? (
            <main className="profile-container flex justify-between mx-3 gap-3 relative">
              <section className="profile-media-container  w-[50%] flex-grow">
                <Header
                  userName={user.userName}
                  brandName={user.brandName}
                  bio={user.bio}
                  cImg={user.cImg}
                  loc={user.loc}
                  pImg={user.pImg}
                  sFb={user.sFb}
                  sWhtpp={user.sWhtpp}
                  sIg={user.sIg}
                />
                <About />
                <Services services={user.services} />
              </section>
              <section className="profile-media-container profile-cont-photos sticky top-[60px]  bg-bgPrimary w-[40%] flex-grow p-2 h-[90vh] overflow-hidden overflow-y-auto">
                <h1 className="font-bold text-lg my-2">Photos</h1>
                <Photos photos={user.photos} />
              </section>
            </main>
          ) : (
            <Error404 />
          )}
        </>
      )}
    </>
  )
}

export default UserProfile
