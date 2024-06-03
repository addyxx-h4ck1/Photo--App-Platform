import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Post = ({ ...el }) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const img = new Image()
    img.src = el.img
    img.onload = () => setLoaded(true)
  }, [{ ...el }])
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="post-card w-full bg-[#312f2f2e] rounded-lg p-3">
        <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
          {loaded ? (
            // <img
            //   src={el.img}
            //   alt=""
            //   className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
            // />
            <LazyLoadImage
              alt={'Genz PhotoSop'}
              src={el.img} // use normal <img> attributes as props
              width={'60px'}
              height={'60px'}
              className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
            />
          ) : (
            <Skeleton circle={true} height={60} width={60} />
          )}
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
          <p>{el.text}</p>
        </div>
        {/* POST IMAGE */}
        <div className="w-full">
          {loaded ? (
            // <img
            //   src={el.img}
            //   loading="lazy"
            //   alt={'Genz PhotoSop'}
            //   className="post-image w-full block object-cover bg-[#39383841] rounded-lg"
            // />
            <LazyLoadImage
              alt={'Genz PhotoSop'}
              src={el.img} // use normal <img> attributes as props
              width={'100%'}
              className="post-image w-full block object-cover bg-[#39383841] rounded-lg"
            />
          ) : (
            <Skeleton height={100} />
          )}
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default Post
