import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <section className="side-menu sticky top-[60px] overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-0 w-[20%] min-w-[200px] h-[90vh] bg-[#312f2f6c]">
      <div className="side-menu-links flex flex-col gap-y-3 text-nowrap">
        <Link className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg">
          <i className="fa fa-home"></i> For You
        </Link>
        <Link className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg">
          <i className="fa fa-plus"></i> Create Post
        </Link>
        <Link className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg">
          <i className="fa-solid fa-arrow-trend-up"></i> Trending
        </Link>
        <Link className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg">
          <i className="fas fa-user-friends"></i> Top Artists
        </Link>
        <Link className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg">
          <i className="fas fa-search"></i> Search Artists
        </Link>
        <Link
          to={'/'}
          className="p-3 text-lg font-semibold hover:bg-[#5352524c] hover:duration-300 duration-300 rounded-lg"
        >
          <i className="fa-solid fa-compass"></i> Explore
        </Link>
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
