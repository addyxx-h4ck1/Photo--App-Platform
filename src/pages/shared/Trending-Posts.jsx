import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const navigate = useNavigate()
  useEffect(() => {}, [])
  return (
    <section className="posts-parent mt-2 duration-500 p-3 w-[45%] min-w-[350px]  flex  flex-col gap-4  bg-bgPrimary">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="post-card w-full bg-[#312f2f2e] rounded-lg p-3 relative">
          <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
            <LazyLoadImage
              alt={'Genz PhotoSop'}
              src="https://forcreativegirls.com/contents/uploads/2019/03/Valerie-Mwango.jpg"
              width={'60px'}
              height={'60px'}
              className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
            />

            <div>
              <h1 className="font-semibold text-lg text-left text-nowrap">
                {'Genz PhotoStudio'}
              </h1>
              <div className="text-sm flex text-nowrap flex-wrap gap-1 text-[#737373]">
                <p className="post-date">2 days ago.</p>
                <p className="user-location">
                  <i className="fa fa-location-dot"></i> Mombasa, Kenya.
                </p>
                <p className="globe-icon">
                  <i className="fa fa-globe"></i>.
                </p>
              </div>
            </div>
          </div>
          {/* POST CAPTON */}
          <div className="post-caption my-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              dignissimos excepturi ratione nemo, unde, facilis blanditiis nobis
              reprehenderit praesentium libero, at rerum. Beatae quisquam vero
              ullam ab illum consequuntur dolorem?
            </p>
          </div>
          {/* POST IMAGE */}
          <div className="w-full">
            <LazyLoadImage
              effect="blur"
              alt={'Genz PhotoSop'}
              src="https://forcreativegirls.com/contents/uploads/2019/03/Valerie-Mwango.jpg"
              width={'100%'}
              className="post-image w-full block object-cover bg-[#39383841] rounded-lg"
              onClick={(e) =>
                navigate('/m/pixelrart/posts/uiweywioeuyrue', {
                  state: e.target.src,
                  preventScrollReset: true,
                })
              }
            />
          </div>
          <div className="trending-sticker">
            <button className=" absolute top-6 right-2 py-2 px-4 rounded-lg text-[#1ed5cf]  font-semibold">
              <i class="fa fa-arrow-trend-up fa-beat-fade"></i>
            </button>
          </div>
        </div>
      </SkeletonTheme>
    </section>
  )
}

export default Post
