import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux'
import Header from './profile-components/Header'
import About from './profile-components/About'
import Services from './profile-components/Services'
import Photos from './profile-components/Photos'
import { Navigate, useParams } from 'react-router-dom'
import LoadingData from '../../components/Data-loading'
import Post from '../shared/profile-components/Post'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import axios from 'axios'

const Profile = () => {
  const [userPosts, setUserPost] = useState([])
  const [loading, setIsLoading] = useState(false)
  const { fetchLoading } = useSelector((state) => state.token)
  const { T } = useSelector((state) => state.token)
  const { userInfo } = useSelector((state) => state.token)
  //desturcture and distribute user info

  useEffect(() => {
    if (T) {
      async function getUserPosts(t) {
        let url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/posts'
        try {
          setIsLoading(true)
          let req = await axios.get(url, {
            headers: { Authorization: `Bearer ${t.token}` },
          })
          let usersPost = req.data.filter(
            (post) => post.creator._id === userInfo._id
          )
          setUserPost(usersPost)
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.log(error)
        }
      }
      getUserPosts(T)
      return
    }
  }, [T, userInfo])

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
                <Services services={services} />
              </section>
              <section className="profile-media-container profile-cont-photos sticky top-[60px]  bg-bgPrimary w-[40%] flex-grow p-2 h-[90vh] overflow-hidden overflow-y-auto">
                <h1 className="font-bold text-lg my-2">Posts</h1>
                {loading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={150} />
                  </SkeletonTheme>
                ) : (
                  <>
                    {userPosts.length > 1 ? (
                      <div className="flex gap-2 overflow-y-hidden">
                        {userPosts.map((post) => {
                          return (
                            <React.Fragment key={post._id}>
                              <Post {...post} />
                            </React.Fragment>
                          )
                        })}
                      </div>
                    ) : (
                      <>
                        <div className="p-3 text-center w-full h-[150px] flex justify-center items-center text-[#3d3a3ac9] text-xl">
                          {' '}
                          No posts
                        </div>
                      </>
                    )}
                  </>
                )}
                <div>
                  <h1 className="font-bold text-lg my-2">Photos</h1>
                  <Photos photos={photos} />
                </div>
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
