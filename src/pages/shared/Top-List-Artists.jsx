import React from 'react'
import TopArtist from '../../components/Top-Artist'

const TopListArtists = () => {
  return (
    <section className="posts-parent duration-500 hover:duration-500 p-3 right-0 w-[45%] min-w-[350px]  flex   flex-col gap-4 bg-bgPrimary">
      <form action="" className="flex w-[100%] mt-2">
        <input
          type="search"
          placeholder="search for artists..."
          className="py-3 px-5 rounded-tl-lg rounded-bl-lg bg-[#8080807e] outline-0 border-0 w-full"
        />
        <button className="py-3 px-5 rounded-tr-lg hover:duration-300 rounded-br-lg bg-[#8080807e] text-[#20abab] hover:text-[white] duration-300">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="artists-list">
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
        <TopArtist />
      </div>
    </section>
  )
}

export default TopListArtists
