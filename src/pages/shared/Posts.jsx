import React, { useEffect, useState } from 'react'
import Post from '../../components/Post'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const AllPosts = () => {
  const [loading, setIsLoading] = useState(false)
  const [postData, setPostData] = useState(null)
  const { T } = useSelector((state) => state.token)
  useEffect(() => {
    if (T) {
      async function getPosts(t) {
        setIsLoading(true)
        let url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/posts'
        try {
          let req = await axios.get(url, {
            headers: { Authorization: `Bearer ${t.token}` },
          })
          setPostData(req.data)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
          setIsLoading(false)
        }
      }
      getPosts(T)
      return
    }
  }, [T])
  return (
    <section className="posts-parent duration-500 hover:duration-500 p-3 right-0 w-[50%] min-w-[350px]  flex items-center  flex-col gap-4">
      <>
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="post-card w-full flex flex-col gap-2 overflow-hidden">
              <Skeleton height={70} width={70} circle={true} />
              <div className="w-full flex">
                <Skeleton count={2} height={20} width={600} />
              </div>
              <div className="w-full flex ">
                <Skeleton height={120} width={600} />
              </div>
            </div>
            <div className="post-card w-full flex flex-col gap-2 overflow-hidden">
              <Skeleton height={70} width={70} circle={true} />
              <div className="w-full flex">
                <Skeleton count={2} height={20} width={600} />
              </div>
              <div className="w-full flex ">
                <Skeleton height={120} width={600} />
              </div>
            </div>
          </SkeletonTheme>
        ) : (
          <>
            {postData ? (
              <>
                {postData.map((post) => {
                  return <Post key={post._id} {...post} />
                })}
              </>
            ) : null}
          </>
        )}
      </>
    </section>
  )
}

export default AllPosts
