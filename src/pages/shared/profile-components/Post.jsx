import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const UserPost = ({ ...props }) => {
  const navigate = useNavigate()
  const { T } = useSelector((state) => state.token)
  const params = useParams()
  return (
    <>
      <div className="profile-post-card relative   object-cover flex-grow">
        <img
          src={props.postObject.photoAddress}
          alt=""
          className="h-[150px] min-w-[250px] w-full object-cover rounded-lg"
        />
        <div className="absolute w-full h-[50%] p-2 bottom-0 bg-[#1b1b1bee] rounded-b-lg">
          <h1
            className={`font-semibold text-nowrap line-clamp-6 ${
              T ? '' : 'text-center'
            }`}
          >
            {props.postObject.title}
          </h1>
          <>
            {T ? (
              <>
                {' '}
                <button
                  className="p-1 px-3 my-1 ml-1 rounded-lg text-sm border-[#1e9c8f] text-[#1e9c8f] border-[1px] hover:duration-300 hover:bg-[#1e9c8f] duration-300 hover:text-[#1b1b1b] font-semibold"
                  onClick={() => {
                    navigate(`/m/pixelrart/posts/${props.postObject._id}`, {
                      state: props.postObject,
                      preventScrollReset: true,
                    })
                  }}
                >
                  view post
                </button>
                {params.user_Id ? null : (
                  <button
                    className="p-1 px-3 my-1 ml-1 rounded-lg text-sm border-[#f08686] text-[#f08686] border-[1px] hover:duration-300 hover:bg-[#f08686] duration-300 hover:text-[#1b1b1b] font-semibold"
                    onClick={() => {
                      props.showDeletePost(true)
                      props.setDeletePostObject({ ...props })
                    }}
                  >
                    Delete
                  </button>
                )}
              </>
            ) : null}
          </>
        </div>
      </div>
    </>
  )
}

export default UserPost
