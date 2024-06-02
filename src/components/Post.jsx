import React from 'react'

const Post = ({ ...el }) => {
  return (
    <div className="post-card w-full bg-[#312f2f2e] rounded-lg p-3">
      <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
        <img
          src={el.img}
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
      {/* POST CAPTON */}
      <div className="post-caption my-4">
        <p>{el.text}</p>
      </div>
      {/* POST IMAGE */}
      <div className="w-full">
        <img
          src={el.img}
          alt={'Genz PhotoSop'}
          className="post-image w-full block object-cover bg-[#39383841] rounded-lg"
        />
      </div>
    </div>
  )
}

export default Post
