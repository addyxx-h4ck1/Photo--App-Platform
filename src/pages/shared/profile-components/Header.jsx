import {
  format,
  formatISO,
  getISOWeekYear,
  formatRFC7231,
  toDate,
} from 'date-fns'
import { getDate } from 'date-fns/fp'
import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Header = ({
  userName,
  brandName,
  bio,
  pImg,
  cImg,
  loc,
  joined,
  sFb,
  sIg,
  sWhtpp,
}) => {
  const [loaded, setLoaded] = useState(false)
  const formatDate = format(joined, 'MM\tdd\tyyyy')
  const date = formatRFC7231(formatDate).split(' ').slice(1, 4).join(' ')

  return (
    <article className="profile-top w-full relative bg-bgPrimary pb-2">
      {/* Profile cover photo */}
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="fa fa-camera relative text-4xl cover-photo flex flex-col justify-center items-center rounded-lg h-[200px] portrait:h-[150px] bg-bgPrimary">
          {cImg === 'fill' ? (
            <p className="text-xs">add cover photo</p>
          ) : (
            <img
              src={cImg}
              alt={'cove photo'}
              className="w-full object-cover absolute h-full rounded-lg"
            />
          )}
        </div>
      </SkeletonTheme>

      {/* Profile Leads (img, location, name ......) */}
      <div className="profile-leads mt-2  px-4 w-full portrait:text-center">
        <div className="profile-photo flex items-center portrait:flex-col portrait:gap-2 gap-6">
          <div className="fa fa-camera relative text-2xl cover-photo flex flex-col justify-center items-center w-[110px]  h-[110px] rounded-full portrait:h-[80px] portrait:w-[80px]  bg-bgPrimary">
            {pImg === 'fill' ? null : (
              <img
                src={pImg}
                alt=""
                className="w-full absolute h-full portrait:h-[80px] portrait:w-[80px] object-cover rounded-full"
              />
            )}
          </div>
          <div className="profile-name text-center mt-4 portrait:mt-1 text-nowrap">
            <h1 className="font-bold text-lg">
              {brandName === 'fill' ? null : brandName}
            </h1>
            <p className="portrait:text-xs">{userName}</p>
          </div>
        </div>
        {/* profile-bio */}
        <div className="mt-3">
          <p className="portrait:text-sm">{bio === 'fill' ? null : bio}</p>
        </div>
        {/* Profile info (location, date-joined) */}
        <div className="profile-info-date-loc flex gap-4 mt-5 border-b-2 border-[#63626255] pb-5 w-full text-nowrap portrait:text-sm portrait:text-center">
          <p>
            {loc === 'fill' ? null : (
              <>
                <i className="fa fa-location-dot"></i> {loc}
              </>
            )}
          </p>
          <p>
            <i className="fa fa-calendar"></i> Joined {date}
          </p>
        </div>
        <div className="profile-links-date-loc flex gap-4 mt-3 border-b-2 border-[#63626255] pb-5 w-full text-nowrap flex-wrap">
          {sWhtpp === 'fill' ? null : (
            <>
              <a href={sWhtpp} target="_blank">
                <button className="py-3 px-4 bg-[#39a539] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[#32b832] border-2 border-[#32b832] hover:bg-transparent">
                  <i className="fa-brands fa-whatsapp"></i> whatsapp
                </button>
              </a>
            </>
          )}
          {sFb === 'fill' ? null : (
            <>
              <a href={sFb} target="_blank">
                <button className="py-3 px-4 bg-[royalblue] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[royalblue] border-2 border-[royalblue] hover:bg-transparent">
                  <i className="fa-brands fa-facebook"></i> facebook
                </button>
              </a>
            </>
          )}
          {sIg === 'fill' ? null : (
            <>
              <a href={sIg} target="_blank">
                <button className="instagram py-3 px-4 rounded-lg font-semibold">
                  <i className="fa-brands fa-instagram"></i> instagram
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default Header
