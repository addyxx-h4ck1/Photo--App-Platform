import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from './profile-components/Header'
import About from './profile-components/About'
import Services from './profile-components/Services'
import Photos from './profile-components/Photos'
import { Navigate, useParams } from 'react-router-dom'
import LoadingData from '../../components/Data-loading'
import { fetchUserById } from '../../utils/fetch-user'
import Error404 from '../../components/Error404'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Post from '../shared/profile-components/Post'

const UserProfile = () => {
  const [loading, setIsLoading] = useState(false)
  const [postloading, setPostLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const { user_Id } = useParams()

  useEffect(() => {
    if (user_Id) {
      async function getPosts(user) {
        let url = `https://server2-copiq6djm4es73a4js7g.onrender.com/u/d/p/${user}`
        try {
          setPostLoading(true)
          const res = await axios.get(url)
          setPosts(res.data)
          setPostLoading(false)
        } catch (error) {
          setPostLoading(false)
          console.log(error)
        }
      }
      getPosts(user_Id)
      return
    }
  }, [user_Id])

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
                  website={user.website}
                />
                <About
                  bio={user.bio}
                  website={user.website}
                  joined={user.joined}
                  loc={user.loc}
                />
                <Services services={user.services} />
              </section>
              <section className="profile-media-container profile-cont-photos sticky top-[60px]  bg-bgPrimary w-[40%] flex-grow p-2 h-[90vh] overflow-hidden overflow-y-auto">
                <h1 className="font-bold text-lg my-2">Posts</h1>

                {postloading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={150} />
                  </SkeletonTheme>
                ) : (
                  <>
                    {posts.length >= 1 ? (
                      <>
                        <div className="flex gap-2 relative overflow-y-hidden">
                          {posts.map((post) => {
                            return (
                              <React.Fragment key={post._id}>
                                <Post postObject={post} />
                              </React.Fragment>
                            )
                          })}
                        </div>
                      </>
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
                  {postloading ? (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={200} />
                    </SkeletonTheme>
                  ) : (
                    <Photos photos={posts} />
                  )}
                </div>
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
