import { format, getMonth } from 'date-fns'
import { getDate, getYear } from 'date-fns/fp'
import React from 'react'

const About = ({ bio, website, joined, loc }) => {
  let day = getDate(joined)
  let month = getMonth(joined)
  let year = getYear(joined)

  const date = format(new Date(year, month, day), 'MMM\tdd\tyyy')
  return (
    <article className="about-profile bg-bgPrimary mt-3 w-full p-4">
      <h1 className="font-bold text-lg my-2">About</h1>
      {/* bio */}
      {bio === 'fill' ? null : <p className="portrait:text-xs">{bio}</p>}
      <div className="my-3 flex flex-col gap-2">
        {/* location */}
        {loc === 'fill' ? null : (
          <p className="p-4 bg-bgPrimary rounded-lg portrait:text-sm">
            <i className="fa fa-location-dot"></i> {loc}
          </p>
        )}
        {/* website */}
        {website === 'fill' ? null : (
          <p className="p-4 bg-bgPrimary rounded-lg portrait:text-sm text-blue-600">
            <i className="fa fa-link"></i>{' '}
            <a href={website} target="_blank">
              website
            </a>
          </p>
        )}
        {/* date joined */}
        <p className="p-4 bg-bgPrimary rounded-lg portrait:text-sm">
          <i className="fa fa-calendar"></i> Joined {date}
        </p>
      </div>
    </article>
  )
}

export default About
