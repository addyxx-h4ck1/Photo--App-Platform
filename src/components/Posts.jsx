import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../assets/dummy'
import Post from './Post'

const AllPosts = () => {
  return (
    <section className="posts-parent duration-500 hover:duration-500 p-3 right-0 w-[45%] min-w-[350px]  flex items-center  flex-col gap-4">
      <div className="flex flex-col">
        {/* Filter category */}
        <p className="mt-2 text-[#8080807e] text-center">filter</p>
        <div className="posts-categories my-1 flex flex-wrap justify-center items-center gap-2">
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
          <button className="py-2 px-3 bg-[#8080807e] rounded-xl portrait:text-xs text-sm duration-300 hover:duration-300 hover:bg-[#20abab] hover:text-[#1b1b1b]">
            Ambient
          </button>
        </div>
        {/* SEARCH POSTS */}
        <form action="" className="flex w-[100%] mt-2">
          <input
            type="search"
            placeholder="search for posts..."
            className="py-3 px-5 rounded-tl-lg rounded-bl-lg bg-[#8080807e] outline-0 border-0 w-full"
          />
          <button className="py-3 px-5 rounded-tr-lg hover:duration-300 rounded-br-lg bg-[#8080807e] text-[#20abab] hover:text-[white] duration-300">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {data.map((el) => {
        return <Post key={el.img} {...el} />
      })}
    </section>
  )
}

export default AllPosts
