import React from 'react'

const TopArtist = () => {
  return (
    <div className="top-artist-card flex text-nowrap items-center overflow-hidden p-2 gap-3 bg-[#39383841] rounded-lg mb-3">
      <img
        src="https://boydphotography.co.ke/fashion/b.jpg"
        alt={'Genz PhotoStudio'}
        className="w-[130px] h-[90px] aspect-[1/1] object-cover rounded-lg  overflow-hidden duration-300 hover:duration-300 hover:scale-[1.1]"
      />
      <div className="">
        <h1 className="text-lg font-semibold">{'Genz PhotoStudio'}</h1>
        <p className="text-sm">
          <i className="fa fa-location-dot"></i> Mombasa, Kenya
        </p>
      </div>
    </div>
  )
}

export default TopArtist
