import React from 'react'

const Footer = () => {
  return (
    <footer className="footer mt-[2rem] flex flex-col justify-center items-center p-5 text-sm">
      <div className="footer-wrapper w-full max-w-[1300px]">
        <div className="firstt">
          <h1 className="font-bold text-2xl mb-3">PhotoLab</h1>
          <p className="text-sm mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            impedit praesentium libero quod hic. Consequuntur atque cumque,
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
            <a href="">Art</a>
            <a href="">Art</a>
            <a href="">Art</a>
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
            <a href="">Get Started</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
