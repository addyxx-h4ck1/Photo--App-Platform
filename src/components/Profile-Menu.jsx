import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProfileMenu = (func) => {
  const navigate = useNavigate()
  const { props } = func
  const disableProfile = () => {
    props(false)
  }
  return (
    <div className="absolute top-[60px] right-[20px] w-[250px] rounded-md bg-primary shadow-lg border-[1px] border-[#80808037] flex flex-col items-center p-4">
      <div className="profile-shortcut flex gap-2 text-center mb-3">
        <img
          src="https://www.royalreelphotography.co.ke/wp-content/uploads/2021/02/Royal-Reel-Photography-Portrait-Photography-in-Kenya-8.jpg"
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden"
        />
        <div className="profile-shortcut-info">
          <h1 className="font-bold">{'Genz PhotoShop'}</h1>
          <p className="text-xs">
            <i className="fa fa-location-dot"></i> Mombasa, Kenya
          </p>
        </div>
      </div>
      <Link
        to={'/m/profile'}
        preventScrollReset={true}
        className="p-2 text-sm text-center w-full border-[#199898] border-[0.01px]  duration-300 hover:duration-300 hover:bg-[#199898] mb-3"
        onClick={disableProfile}
      >
        View profile
      </Link>
      <div className="w-full mb-3 flex flex-col ">
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 py-3 w-full text-sm"
          onClick={disableProfile}
        >
          <i className="fa fa-gear"></i> Sign out
        </Link>
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 py-3 w-full text-sm"
          onClick={disableProfile}
        >
          <i className="fa fa-gear"></i> Sign out
        </Link>
        <Link
          className="self-start rounded-lg hover:text-[#199898] hover:duration-300  duration-300 py-3 w-full text-sm"
          onClick={disableProfile}
        >
          <i className="fa fa-gear"></i> Sign out
        </Link>
      </div>
      <button
        className="text-center hover:text-[royalblue] hover:duration-300 duration-300 py-4 border-y-[1px] w-full text-sm border-[#80808033]"
        onClick={() => navigate('/auth/signin', { replace: true })}
      >
        <i className="fa fa-power-off"></i> Sign out
      </button>
    </div>
  )
}

export default ProfileMenu
