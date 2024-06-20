import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteToken } from '../features/Login/user-login-slice'
import { useDispatch } from 'react-redux'

const ProfileMenu = ({ ...userInfo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //logout func
  const logout = async () => {
    dispatch(deleteToken())
    window.location.replace('/auth/signin')
  }
  const disableProfile = () => {
    props(false)
  }
  return (
    <div className="absolute top-[60px] right-[20px] w-[270px] rounded-md bg-primary shadow-lg border-[1px] border-[#80808037] flex flex-col items-center p-4">
      <div className="profile-shortcut flex gap-2 text-center mb-3">
        <img
          src={userInfo.pImg}
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden"
        />
        <div className="profile-shortcut-info">
          <h1 className="font-bold">{userInfo.brandName}</h1>
          <p className="text-xs">
            <i className="fa fa-location-dot"></i> {userInfo.loc}
          </p>
        </div>
      </div>
      <Link
        to={'/m/profile'}
        preventScrollReset={true}
        className="p-2 py-3 text-sm text-center w-full font-semibold border-[#3c3c3c] border-[0.01px]  duration-300 hover:duration-300 hover:bg-[#20a3a3] hover:text-primary mb-3 rounded-lg"
        onClick={disableProfile}
      >
        View profile
      </Link>
      <div className="w-full mb-3 flex flex-col ">
        <Link
          to={'/m/pixelrart/create'}
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 px-2 py-4 w-full font-semibold bg-bgPrimary text-sm mb-2"
          onClick={disableProfile}
        >
          Add post
        </Link>
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 px-2 py-4 w-full font-semibold bg-bgPrimary text-sm mb-2"
          onClick={disableProfile}
        >
          Update profile
        </Link>
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 px-2 py-4 w-full font-semibold bg-bgPrimary text-sm mb-2"
          onClick={disableProfile}
        >
          Share profile
        </Link>
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 px-2 py-4 w-full font-semibold bg-bgPrimary text-sm mb-2"
          onClick={disableProfile}
        >
          Invite friends
        </Link>
      </div>
      <button
        className="text-center hover:text-primary font-semibold hover:duration-300 duration-300 py-3 border-[1px] w-full text-sm border-[#80808033] rounded-lg hover:bg-[#fd9191]"
        onClick={() => {
          logout()
        }}
      >
        <i className="fa fa-power-off"></i> Sign out
      </button>
    </div>
  )
}

export default ProfileMenu
