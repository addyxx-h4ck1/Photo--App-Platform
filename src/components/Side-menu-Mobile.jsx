import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenuMobile = (func) => {
  const { props } = func
  const disableSideBar = () => {
    props(false)
  }
  return (
    <section className="main-side-parent absolute top-[55px] bg-primary overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-[10px] w-[20%] min-w-[250px] h-[95vh] bg-[#312f2f6c] rounded-md">
      <div className="side-menu-links flex flex-col justify-center gap-y-3 text-nowrap">
        <NavLink
          onClick={disableSideBar}
          to={'/m/pixelrart/foryou'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-home"></i> For You
        </NavLink>
        <NavLink
          onClick={disableSideBar}
          to={'/m/pixelrart/create'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-plus"></i> Create Post
        </NavLink>
        <NavLink
          onClick={disableSideBar}
          to={'/m/pixelrart/trending'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-arrow-trend-up"></i> Trending
        </NavLink>
        <NavLink
          onClick={disableSideBar}
          to={'/top-artists'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fas fa-user-friends"></i> Top Artists
        </NavLink>
        <NavLink
          onClick={disableSideBar}
          to={'/query-artists'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fas fa-search"></i> Search Artists
        </NavLink>
        <NavLink
          onClick={disableSideBar}
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-compass"></i> Explore
        </NavLink>
        <NavLink to={'/m/profile'} className="navlink">
          <div className="flex gap-2">
            <img
              src="https://www.royalreelphotography.co.ke/wp-content/uploads/2021/02/Royal-Reel-Photography-Portrait-Photography-in-Kenya-8.jpg"
              alt=""
              className="w-[30px] h-[30px] rounded-full object-cover overflow-hidden"
            />
            <p>Profile</p>
          </div>
        </NavLink>
      </div>
      <div className="company mt-2 border-[#3b3b3bbf] border-t-[0.01px] p-3">
        <div className="mb-3">
          <h1 className="text-[#818080bc] font-semibold">Company</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="mb-3">
          <h1 className="text-[#818080bc] font-semibold">Program</h1>
          <p className="text-xs">
            Discover Kenya's photographic talent hub. Showcase your vision,
            connect with enthusiasts. Empower your creativity, turn moments into
            art. Join our vibrant community, elevate your craft.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SideMenuMobile
