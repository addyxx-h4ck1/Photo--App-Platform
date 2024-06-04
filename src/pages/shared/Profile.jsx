import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Profile = () => {
  const [loaded, setLoaded] = useState(false)
  const [fullImage, setFullImage] = useState('')
  let imgSrc =
    'https://forcreativegirls.com/contents/uploads/2019/03/Valerie-Mwango.jpg'
  useEffect(() => {
    const img = new Image()
    img.src = imgSrc
    img.onload = () => setLoaded(true)
  }, [imgSrc])
  return (
    <>
      <main className="profile-container flex justify-between mx-3 gap-3 relative">
        <section className="profile-media-container  w-[50%] flex-grow">
          <article className="profile-top w-full relative bg-bgPrimary pb-2">
            {/* Profile cover photo */}
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div className="cover-photo rounded-lg">
                {loaded ? (
                  <img
                    src={imgSrc}
                    alt={'cove photo'}
                    className="w-full object-cover h-[200px] portrait:h-[150px] rounded-lg"
                  />
                ) : (
                  <Skeleton height={200} />
                )}
              </div>
            </SkeletonTheme>

            {/* Profile Leads (img, location, name ......) */}
            <div className="profile-leads mt-2  px-4 w-full portrait:text-center">
              <div className="profile-photo flex items-center portrait:flex-col portrait:gap-2 gap-6">
                <img
                  src="https://boydphotography.co.ke/fashion/b.jpg"
                  alt=""
                  className="w-[110px] h-[110px] portrait:h-[80px] portrait:w-[80px] portrait:border-0 object-cover rounded-full border-[3px] border-[aqua]"
                />
                <div className="profile-name text-center mt-4 portrait:mt-1 text-nowrap">
                  <h1 className="font-bold text-lg">{'Genz PhotoShop'}</h1>
                  <p className="portrait:text-xs">Brian Njoroge</p>
                </div>
              </div>
              {/* profile-bio */}
              <div className="mt-3">
                <p className="portrait:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, commodi officiis. Nobis nostrum iure adipisci quos
                  commodi facilis sed maxime sint vero ea? Amet doloremque
                  sapiente harum nihil eligendi molestiae.
                </p>
              </div>
              {/* Profile info (location, date-joined) */}
              <div className="profile-info-date-loc flex gap-4 mt-5 border-b-2 border-[#63626255] pb-5 w-full text-nowrap portrait:text-sm portrait:text-center">
                <p>
                  <i className="fa fa-location-dot"></i> Mombasa, Kenya
                </p>
                <p>
                  <i className="fa fa-calendar"></i> Joined {' Nov 26 2023'}
                </p>
              </div>
              <div className="profile-links-date-loc flex gap-4 mt-3 border-b-2 border-[#63626255] pb-5 w-full text-nowrap flex-wrap">
                <a href="">
                  <button className="py-3 px-4 bg-[#39a539] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[#32b832] border-2 border-[#32b832] hover:bg-transparent">
                    <i className="fa-brands fa-whatsapp"></i> whatsapp
                  </button>
                </a>
                <a href="">
                  <button className="py-3 px-4 bg-[royalblue] rounded-lg font-semibold duration-300 hover:duration-300 hover:text-[royalblue] border-2 border-[royalblue] hover:bg-transparent">
                    <i className="fa-brands fa-facebook"></i> facebook
                  </button>
                </a>
                <a href="">
                  <button className="instagram py-3 px-4 rounded-lg font-semibold">
                    <i className="fa-brands fa-instagram"></i> instagram
                  </button>
                </a>
              </div>
            </div>
          </article>
          {/* About Profile */}
          <article className="about-profile bg-bgPrimary mt-3 w-full p-4">
            <h1 className="font-bold text-lg my-2">About</h1>
            <p className="portrait:text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              error officia obcaecati vel sapiente repudiandae ullam soluta,
              nobis nihil, velit dolore eum labore. Explicabo excepturi adipisci
              veritatis vitae iure recusandae.
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
          {/* Profile Services */}
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
        </section>
        <section className="profile-media-container profile-cont-photos sticky top-[60px]  bg-bgPrimary w-[40%] flex-grow p-2 h-[90vh] overflow-hidden overflow-y-auto">
          <h1 className="font-bold text-lg my-2">Photos</h1>
          <article className="profile-photos flex flex-wrap gap-2 relative">
            <img
              src="https://www.royalreelphotography.co.ke/wp-content/uploads/2021/02/Royal-Reel-Photography-Portrait-Photography-in-Kenya-8.jpg"
              alt=""
              className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow"
              onClick={(e) => {
                setFullImage(e.target.src)
              }}
            />
            <img
              src="https://boydphotography.co.ke/fashion/b.jpg"
              alt=""
              className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow"
              onClick={(e) => {
                setFullImage(e.target.src)
              }}
            />
            <img
              src={imgSrc}
              alt=""
              className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow"
              onClick={(e) => {
                setFullImage(e.target.src)
              }}
            />
            <img
              src="https://antonytrivet.co.ke/wp-content/uploads/2018/05/Fashion-Kenyan-Photographers_Kenyan-Portraiture-Photographers_Antony-Trivet-Photography-3.jpg"
              alt=""
              className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow"
              onClick={(e) => {
                setFullImage(e.target.src)
              }}
            />
            <img
              src="https://www.capitalfm.co.ke/lifestyle/files/2016/04/instagrammer-of-the-week-capital-lifestyle-Trevor-Maingi.jpg"
              alt=""
              className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow"
              onClick={(e) => {
                setFullImage(e.target.src)
              }}
            />
            {/* full screen Image */}
            {fullImage !== '' ? (
              <section className="absolute full-image top-0 w-full h-[100vh] bg-primary">
                <button
                  className="absolute z-30 text-xl right-10 top-4 py-3 px-4 rounded-lg bg-bgPrimary"
                  onClick={() => setFullImage('')}
                >
                  <i className="fa fa-times"></i>
                </button>
                <img
                  src={fullImage}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </section>
            ) : null}
            {/* full screen Image */}
          </article>
        </section>
        {/* Gallery */}
      </main>
    </>
  )
}

export default Profile
