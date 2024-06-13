import React from 'react'

const Services = (services) => {
  return (
    <article className="about-profile bg-bgPrimary mt-3 w-full p-4 portrait:text-sm">
      <h1 className="font-bold text-lg my-2">Services</h1>
      <div className="my-3 flex flex-col gap-2">
        {services.services.map((service) => {
          return (
            <p key={service} className="p-4 bg-bgPrimary rounded-lg">
              <i className="fa fa-camera"></i> {service}
            </p>
          )
        })}
      </div>
    </article>
  )
}

export default Services
