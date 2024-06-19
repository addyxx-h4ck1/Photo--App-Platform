import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserPost = ({ ...post }) => {
  const navigate = useNavigate()
  return (
    <div className="profile-post-card relative   object-cover flex-grow">
      <img
        src={post.photoAddress}
        alt=""
        className="h-[150px] min-w-[250px] w-full object-cover rounded-lg"
      />
      <div className="absolute w-full h-[50%] p-2 bottom-0 bg-[#1b1b1bee] rounded-b-lg">
        <h1 className="font-semibold text-nowrap line-clamp-6">{post.title}</h1>
        <button
          className="p-1 px-3 my-1 ml-1 rounded-lg text-sm border-[#1e9c8f] text-[#1e9c8f] border-[1px] hover:duration-300 hover:bg-[#1e9c8f] duration-300 hover:text-[#1b1b1b] font-semibold"
          onClick={() => {
            navigate(`/m/pixelrart/posts/${post._id}`, {
              state: { ...post },
              preventScrollReset: true,
            })
          }}
        >
          view post
        </button>
        <button className="p-1 px-3 my-1 ml-1 rounded-lg text-sm border-[#f08686] text-[#f08686] border-[1px] hover:duration-300 hover:bg-[#f08686] duration-300 hover:text-[#1b1b1b] font-semibold">
          Delete
        </button>
      </div>
    </div>
  )
}

export default UserPost
