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
  const [deletePost, setDeletePost] = useState(false)
  const [deletePostObject, setDeletePostObject] = useState(null)
  const [deleteProcess, setDeleteProcess] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const { fetchLoading } = useSelector((state) => state.token)
  const { T } = useSelector((state) => state.token)
  const { userInfo } = useSelector((state) => state.token)
  //desturcture and distribute user info
  const deletePostSync = async (state) => {
    if (T) {
      try {
        setDeleteProcess(true)
        let post = {
          _Id: state.postObject._id,
        }
        let url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/d/p'
        let req = await axios.post(url, post, {
          headers: { Authorization: `Bearer ${T.token}` },
        })
        let newPosts = userPosts.filter(
          (post) => post._id !== state.postObject._id
        )
        setUserPost(newPosts)
        setDeleteProcess(false)
        setDeletePost(false)
      } catch (error) {
        setDeleteProcess(false)
        setDeletePost(false)
        console.log(error)
      }
      return
    }
  }

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
                {/* delete post dialogue */}

                {deletePost ? (
                  <div className="absolute w-full h-[150px] flex flex-col justify-center items-center bg-[#1b1b1bf7] rounded-lg z-50">
                    <h1>Are you sure you want to delete</h1>
                    <p className="font-semibold text-center mx-2 line-clamp-3">
                      {deletePostObject.postObject.title}?
                    </p>
                    {deleteProcess ? (
                      <>
                        <div className="duration-500 hover:duration-500  flex items-center justify-center   gap-1 text-[aqua] text-sm mt-2">
                          <span className="loading loading-spinner loading-sm"></span>
                          deleting...
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-3 text-center">
                        <button
                          className="py-1 px-5 mt-2 border-[1px] rounded-lg border-[aqua] text-[aqua] hover:duration-300 duration-300 hover:bg-[aqua] hover:text-[#151515] font-semibold"
                          onClick={() => deletePostSync(deletePostObject)}
                        >
                          Yes
                        </button>
                        <button
                          className="py-1 px-5 mt-2 border-[1px] rounded-lg border-[#f08686] text-[#f08686] hover:duration-300 duration-300 hover:bg-[#f08686] hover:text-[#1b1b1b] font-semibold"
                          onClick={() => setDeletePost(false)}
                        >
                          No
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
                {/* delete post dialogue */}
                {loading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton height={150} />
                  </SkeletonTheme>
                ) : (
                  <>
                    {userPosts.length >= 1 ? (
                      <>
                        <div className="flex gap-2 relative overflow-y-hidden">
                          {userPosts.map((post) => {
                            return (
                              <React.Fragment key={post._id}>
                                <Post
                                  postObject={post}
                                  showDeletePost={setDeletePost}
                                  setDeletePostObject={setDeletePostObject}
                                />
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
                  {loading ? (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton height={200} />
                    </SkeletonTheme>
                  ) : (
                    <Photos photos={userPosts} />
                  )}
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
