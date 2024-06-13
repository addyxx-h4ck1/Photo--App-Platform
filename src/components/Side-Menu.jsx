import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  const { userInfo } = useSelector((state) => state.token)
  return (
    <section className="side-menu sticky top-[60px] overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-0 w-[20%] min-w-[200px] h-[90vh] bg-[#312f2f6c]">
      <div className="side-menu-links flex flex-col gap-y-3 text-nowrap">
        <NavLink
          preventScrollReset={true}
          to={'/m/pixelrart/foryou'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-home"></i> For You
        </NavLink>
        <NavLink
          preventScrollReset={true}
          to={'/m/pixelrart/create'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-plus"></i> Create Post
        </NavLink>
        <NavLink
          preventScrollReset={true}
          to={'/m/pixelrart/trending'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-arrow-trend-up"></i> Trending
        </NavLink>
        <NavLink
          to={'/m/pixelrart/artists'}
          preventScrollReset={true}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fas fa-user-friends"></i> Top Artists
        </NavLink>

        <NavLink
          preventScrollReset={true}
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-compass"></i> Explore
        </NavLink>
        <NavLink
          to={'/m/profile'}
          preventScrollReset={true}
          className="navlink"
        >
          <div className="flex gap-2 items-center">
            {userInfo ? (
              <img
                src={userInfo.pImg}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover overflow-hidden"
              />
            ) : (
              <div className="fa fa-camera w-[30px] h-[30px] flex justify-center items-center   rounded-full object-cover overflow-hidden"></div>
            )}
            <p>Profile</p>
          </div>
        </NavLink>
      </div>
      <div className="company mt-2 border-[#3b3b3bbf] border-t-[0.01px] p-3">
        <div className="mb-3">
          <h1 className="text-[#818080bc] font-semibold text-lg ">Company</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="mb-3">
          <h1 className="text-[#818080bc] font-semibold text-lg ">Program</h1>
          <p className="text-sm">
            Discover Kenya's photographic talent hub. Showcase your vision,
            connect with enthusiasts. Empower your creativity, turn moments into
            art. Join our vibrant community, elevate your craft.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SideMenu
