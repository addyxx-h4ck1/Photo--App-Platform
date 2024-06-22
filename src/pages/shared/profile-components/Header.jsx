import React, { useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

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
  website,
}) => {
  const navigate = useNavigate()
  const params = useParams()
  const [loaded, setLoaded] = useState(false)
  const { userInfo } = useSelector((state) => state.token)
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
      <div className="profile-leads mt-2  px-4 w-full">
        <div className="profile-photo flex items-center flex-wrap portrait:gap-2 gap-6">
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
            <h1 className="font-bold ">
              {brandName === 'fill' ? null : brandName}
            </h1>
            <p className="portrait:text-xs">{userName}</p>
          </div>
        </div>
        {/* profile-bio */}
        <p className="max-w-[700px] my-1 portrait:text-sm">
          {bio === 'fill' ? null : bio}
        </p>
        {/* profile-website */}
        {website === 'fill' ? null : (
          <a
            href={website}
            target="_blank"
            className="max-w-[700px] portrait:text-sm text-blue-600 hover:underline duration-300 hover:duration-300"
          >
            <i className="fa fa-link"></i> {website}
          </a>
        )}
        {/* Profile info action btns */}
        {params.user_Id ? null : (
          <div className="profile-info-date-loc items-center flex-wrap flex gap-4 mt-5 border-b-2 border-[#63626255] pb-5 w-full text-nowrap portrait:text-sm portrait:text-center">
            <button
              className="py-1 px-3 border-[1px] font-semibold rounded-lg"
              onClick={() => navigate('/m/update/')}
            >
              <i className="fa fa-edit"></i> Edit profile
            </button>
            <button
              className="py-1 px-3 border-[1px] font-semibold rounded-lg"
              onClick={() => navigate(`/m/profile/${userInfo._id}`)}
            >
              <i className="fa fa-eye"></i> View profile
            </button>
          </div>
        )}
        {/* Profile info action btns */}
        <div className="profile-links-date-loc flex gap-2 mt-3 border-b-2 border-[#63626255] pb-5 w-full text-nowrap flex-wrap">
          {sWhtpp === 'fill' ? null : (
            <>
              <a href={sWhtpp} target="_blank">
                <button className="py-2 px-2 text-sm bg-[#39a539] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[#32b832] border-2 border-[#32b832] hover:bg-transparent">
                  <i className="fa-brands fa-whatsapp"></i> whatsapp
                </button>
              </a>
            </>
          )}
          {sFb === 'fill' ? null : (
            <>
              <a href={sFb} target="_blank">
                <button className="py-2 px-2 text-sm bg-[royalblue] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[royalblue] border-2 border-[royalblue] hover:bg-transparent">
                  <i className="fa-brands fa-facebook"></i> facebook
                </button>
              </a>
            </>
          )}
          {sIg === 'fill' ? null : (
            <>
              <a href={sIg} target="_blank">
                <button className="instagram py-2 px-2 text-sm rounded-lg font-semibold">
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
