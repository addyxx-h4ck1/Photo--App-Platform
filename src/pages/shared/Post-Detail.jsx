import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { formatDistance, subDays } from 'date-fns'

const SinglePost = () => {
  const { state } = useLocation()
  let postDate = formatDistance(subDays(state.datePosted, 0), new Date(), {
    addSuffix: true,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="posts-parent mt-1 duration-500 p-3 w-[45%] min-w-[350px]  flex  flex-col gap-4  bg-bgPrimary">
      <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
        <img
          src={state.creator.pImg}
          alt=""
          className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
        />
        <div>
          <Link
            to={`/m/profile/${state.creator._id}`}
            className="font-semibold text-lg text-left text-nowrap duration-300 hover:duration-300 hover:text-[#36b6b6]"
          >
            {state.creator.brandName}
          </Link>
          <div className="text-sm flex text-nowrap flex-wrap gap-1 text-[#737373]">
            <p className="post-date">{postDate}.</p>
            <p className="user-location">
              <i className="fa fa-location-dot"></i> {state.creator.loc}
            </p>
            <p className="globe-icon">
              <i className="fa fa-globe"></i>.
            </p>
          </div>
        </div>
      </div>
      {/* POst Caption */}
      <div className="post-caption font-black text-lg text-[#22b7b7] capitalize">
        <p>{state.title}.</p>
      </div>
      <div className="portrait:text-sm">
        <p>{state.caption}</p>
      </div>
      {/* POst Caption */}
      {/* Post Image */}
      <img
        src={state.photoAddress}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />

      {/* Post Image */}
      <div className="post-actions flex justify-between mx-2 text-2xl gap-3">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-5">
            <button className="">
              <i className="fa fa-heart"></i>
            </button>
            <button>
              <i className="fa fa-share"></i>
            </button>
          </div>
          <div>
            <p className="text-sm">{state.hearts.length} likes</p>
          </div>
        </div>
        <div>
          <button>
            <i className="fa fa-bookmark"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SinglePost
