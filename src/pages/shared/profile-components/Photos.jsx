import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch } from 'react-redux'

const Photos = (props) => {
  const [loaded, setLoaded] = useState(false)
  const [fullImage, setFullImage] = useState('')
  const { photos } = props
  let imgSrc =
    'https://forcreativegirls.com/contents/uploads/2019/03/Valerie-Mwango.jpg'
  useEffect(() => {
    const img = new Image()
    img.src = imgSrc
    img.onload = () => setLoaded(true)
  }, [imgSrc])
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <article className="profile-photos flex flex-wrap gap-2 relative">
        {photos?.length <= 0 ? (
          <>
            <div className="flex justify-center items-center w-full h-[200px] flex-col gap-2">
              <i className="fa fa-camera text-3xl"></i>
              <p>no photos</p>
            </div>
          </>
        ) : (
          <>
            {photos?.map((photo) => {
              return (
                <React.Fragment key={photo}>
                  {loaded ? (
                    <LazyLoadImage
                      src={photo}
                      key={photo}
                      className="fa flex justify-center items-center text-center fa-camera text-2xl templ rounded-lg min-w-[200px] h-[150px]  object-cover flex-grow"
                      onClick={(e) => {
                        setFullImage(e.target.src)
                      }}
                    />
                  ) : (
                    <div className="templ rounded-lg min-w-[200px] h-[150px] object-cover flex-grow">
                      <Skeleton height={150} />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </>
        )}
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
    </SkeletonTheme>
  )
}

export default Photos
