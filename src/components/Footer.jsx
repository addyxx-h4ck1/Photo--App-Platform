import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer mt-[2rem] flex flex-col justify-center items-center p-5 text-sm ">
      <div className="footer-wrapper w-full max-w-[1300px] ">
        <div className="firstt">
          <div className="footer-logo flex">
            <h1 className="text-3xl mb-3">
              Pixel<span className="line-through text-4xl">R</span>art
            </h1>
            <i className="fa fa-trademark text-xs"></i>
          </div>
          <p className="text-sm mb-3">
            Join us today and make every shot tell a story.
          </p>
          <div className="footer-links flex gap-5">
            <a href="" className=" text-[20px]">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className=" text-[20px]">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className=" text-[20px]">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="" className=" text-[20px]">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="second">
          <h1 className="font-semibold mb-2 text-[aqua]">Explore</h1>
          <div className="links flex flex-col gap-2">
            <a href="">Art</a>
            <a href="">Collectibles</a>
            <a href="">Domain Name</a>
            <a href="">Utility</a>
          </div>
        </div>
        <div className="third">
          <h1 className="font-semibold mb-2 text-[aqua]">Statistic</h1>
          <div className="links flex flex-col gap-2">
            <a href="">Ranking</a>
            <a href="">Activity</a>
          </div>
        </div>
        <div className="fourth">
          <h1 className="font-semibold mb-2 text-[aqua]">Resource</h1>
          <div className="links flex flex-col gap-2">
            <a href="">Help Center</a>
            <a href="">Platform Status</a>
            <a href="">Partners</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className="fifth">
          <h1 className="font-semibold mb-2 text-[aqua]">Company</h1>
          <div className="links flex flex-col gap-2">
            <a href="">About Us</a>
            <a href="">Support</a>
            <Link preventScrollReset={true} to={'/auth/signup'}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] text-sm portrait:text-xs text-center">
        copyright &copy; {new Date().getFullYear()} | PhotoLab |{' '}
        <a
          href="https:solo.to/briann_bn"
          target="_blank"
          className="text-[aqua]"
        >
          briann_bn
        </a>
      </div>
    </footer>
  )
}

export default Footer
