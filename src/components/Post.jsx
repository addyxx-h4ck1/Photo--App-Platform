import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link, useNavigate } from 'react-router-dom'
import { formatDistance, subDays } from 'date-fns'

const Post = ({ ...post }) => {
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  let postDate = formatDistance(subDays(post.datePosted, 0), new Date(), {
    addSuffix: true,
  })

  useEffect(() => {
    const img = new Image()
    img.src = post.photoAddress
    img.onload = () => setLoaded(true)
  }, [{ ...post }])
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="post-card w-full bg-[#312f2f2e] rounded-lg p-3">
        <div className="post-profile flex items-center gap-3 border-b-[0.1px] border-[#80808047] pb-2">
          {loaded ? (
            <LazyLoadImage
              alt={'Genz PhotoSop'}
              src={post.creator.pImg}
              width={'60px'}
              height={'60px'}
              className="aspect-[1/1] object-cover w-[60px] bg-[#323232] h-[60px] rounded-full"
            />
          ) : (
            <Skeleton circle={true} height={60} width={60} />
          )}
          <div>
            <Link
              to={`/m/profile/${post.creator._id}`}
              className="font-semibold text-lg text-left text-nowrap hover:text-[#35b1b1] hover:duration-300 duration-300"
            >
              {post.creator.brandName}
            </Link>
            <div className="text-sm flex text-nowrap flex-wrap gap-1 text-[#737373]">
              <p className="post-date">{postDate}.</p>
              <p className="user-location">
                <i className="fa fa-location-dot"></i> {post.creator.loc}
              </p>
              <p className="globe-icon">
                <i className="fa fa-globe"></i>.
              </p>
            </div>
          </div>
        </div>
        {/* POST CAPTON */}
        <div
          className="post-caption my-1 font-black text-lg text-[#22b7b7] cursor-pointer capitalize"
          onClick={(e) =>
            navigate(`/m/pixelrart/posts/${post._id}`, {
              state: { ...post },
              preventScrollReset: true,
            })
          }
        >
          <p>{post.title}.</p>
        </div>
        <div className="post-caption my-2">
          <p>{post.caption}</p>
        </div>
        {/* POST IMAGE */}
        <div className="w-full">
          {loaded ? (
            <LazyLoadImage
              effect="blur"
              alt={'Genz PhotoSop'}
              src={post.photoAddress}
              width={'100%'}
              className="post-image max-h-[350px] block object-contain bg-[#39383841] rounded-lg"
              onClick={(e) =>
                navigate(`/m/pixelrart/posts/${post._id}`, {
                  state: { ...post },
                  preventScrollReset: true,
                })
              }
            />
          ) : (
            <Skeleton height={100} />
          )}
        </div>
        <div className="post-actions flex justify-between mx-2 text-2xl mt-2 gap-3">
          <div className="flex gap-2 flex-col">
            <div className="flex gap-5">
              <button className="">
                <i className="fa fa-heart"></i>
              </button>
              <button>
                <i className="fa fa-share"></i>
              </button>
            </div>
            <div>
              <p className="text-sm">{post.hearts.length} likes</p>
            </div>
          </div>
          <div>
            <button>
              <i className="fa fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default Post
