import React from 'react'
import { Link } from 'react-router-dom'

const TopArtist = ({ ...user }) => {
  return (
    <div className="top-artist-card flex text-nowrap items-center overflow-hidden p-2 gap-3 bg-[#39383841] rounded-lg mb-3">
      <img
        src={user.cImg}
        alt={user.brandName}
        className="w-[130px] h-[90px] aspect-[1/1] object-cover rounded-lg  overflow-hidden duration-300 hover:duration-300"
      />
      <div className="">
        <Link
          to={`/m/profile/${user._id}`}
          className="text-lg font-semibold hover:text-[#3dbaba] hover:duration-300 duration-300"
        >
          {user.brandName}
        </Link>
        <p className="text-sm">
          <i className="fa fa-location-dot"></i> {user.loc}
        </p>
      </div>
    </div>
  )
}

export default TopArtist
