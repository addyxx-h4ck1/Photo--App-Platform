import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SinglePost = () => {
  const postData = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="posts-parent mt-2 duration-500 p-3 w-[45%] min-w-[350px]  flex  flex-col gap-4  bg-bgPrimary">
      <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
        <img
          src="https://boydphotography.co.ke/fashion/b.jpg"
          alt=""
          className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
        />
        <div>
          <h1 className="font-semibold text-lg text-left text-nowrap">
            {'Genz PhotoStudio'}
          </h1>
          <div className="text-sm flex text-nowrap flex-wrap gap-1 text-[#737373]">
            <p className="post-date">2 days ago.</p>
            <p className="user-location">
              <i className="fa fa-location-dot"></i> Mombasa, Kenya.
            </p>
            <p className="globe-icon">
              <i className="fa fa-globe"></i>.
            </p>
          </div>
        </div>
      </div>
      {/* Post Image */}
      <img src={postData.state} alt="" className="object-cover w-full h-full" />

      {/* Post Image */}
      {/* POst Caption */}
      <div className="mt-2 portrait:text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          debitis veniam accusantium. Ipsa maxime repellendus repellat provident
          dolore! Recusandae distinctio ipsam officiis voluptatem asperiores
          voluptate praesentium, at et rerum minima.
        </p>
      </div>
      {/* POst Caption */}
    </section>
  )
}

export default SinglePost
