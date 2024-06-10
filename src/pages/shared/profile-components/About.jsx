import React from 'react'

const About = () => {
  return (
    <article className="about-profile bg-bgPrimary mt-3 w-full p-4">
      <h1 className="font-bold text-lg my-2">About</h1>
      <p className="portrait:text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, error
        officia obcaecati vel sapiente repudiandae ullam soluta, nobis nihil,
        velit dolore eum labore. Explicabo excepturi adipisci veritatis vitae
        iure recusandae.
      </p>
      <div className="my-3 flex flex-col gap-2">
        <p className="p-4 bg-bgPrimary rounded-lg">
          <i className="fa fa-location-dot"></i> Mombasa, Kenya
        </p>
        <p className="p-4 bg-bgPrimary rounded-lg text-blue-600">
          <i className="fa fa-link"></i>{' '}
          <a href="" target="_blank">
            solo.to
          </a>
        </p>
        <p className="p-4 bg-bgPrimary rounded-lg">
          <i className="fa fa-envelope"></i>{' '}
          <a href="" target="_blank">
            business.briann@gmail.com
          </a>
        </p>
        <p className="p-4 bg-bgPrimary rounded-lg">
          <i className="fa fa-calendar"></i> Joined {' Nov 26 2023'}
        </p>
      </div>
    </article>
  )
}

export default About
