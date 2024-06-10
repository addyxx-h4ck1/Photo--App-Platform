import React from 'react'

const Services = () => {
  return (
    <article className="about-profile bg-bgPrimary mt-3 w-full p-4">
      <h1 className="font-bold text-lg my-2">Services</h1>
      <div className="my-3 flex flex-col gap-2">
        <p className="p-4 bg-bgPrimary rounded-lg">
          <i className="fa fa-camera"></i> Photography
        </p>
        <p className="p-4 bg-bgPrimary rounded-lg">
          <i className="fa fa-video"></i> Videography
        </p>
      </div>
    </article>
  )
}

export default Services
