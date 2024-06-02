import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenuMobile = () => {
  return (
    <section className="absolute top-[55px] bg-primary overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-[10px] w-[20%] min-w-[250px] h-[95vh] bg-[#312f2f6c] rounded-md">
      <div className="side-menu-links flex flex-col gap-y-3 text-nowrap">
        <NavLink
          to={'/pixelrart/foryou'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-home"></i> For You
        </NavLink>
        <NavLink
          to={'/pixelrart/create'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa fa-plus"></i> Create Post
        </NavLink>
        <NavLink
          to={'/pixelrart/trending'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-arrow-trend-up"></i> Trending
        </NavLink>
        <NavLink
          to={'/top-artists'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fas fa-user-friends"></i> Top Artists
        </NavLink>
        <NavLink
          to={'/query-artists'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fas fa-search"></i> Search Artists
        </NavLink>
        <NavLink
          to={'explore'}
          className={({ isActive }) =>
            isActive ? 'active navlink' : 'navlink'
          }
        >
          <i className="fa-solid fa-compass"></i> Explore
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
