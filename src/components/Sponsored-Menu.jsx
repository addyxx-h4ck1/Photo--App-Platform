import React from 'react'
import { Link } from 'react-router-dom'
import TopArtist from './Top-Artist'

const SponsoredMenu = () => {
  return (
    <section className="sponsored-menu sticky top-[60px] overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-0 w-[360px] h-[90vh] bg-[#312f2f6c]">
      <div className="sponsored-wrapper p-3">
        <h1 className="text-center font-semibold text-xl mb-3">
          Top List Artists
        </h1>
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
      </div>
    </section>
  )
}

export default SponsoredMenu
