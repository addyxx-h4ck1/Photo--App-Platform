import React from 'react'
import { Link } from 'react-router-dom'
import TopArtist from './Top-Artist'
import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SponsoredMenu = () => {
  const { users } = useSelector((state) => state.users)
  return (
    <>
      <section className="sponsored-menu sticky top-[60px] overflow-x-hidden scroll-m-1 duration-500 hover:duration-500 p-3 right-0 w-[360px] h-[90vh] bg-[#312f2f6c]">
        <h1 className="text-center font-semibold text-xl mb-3">
          Top List Artists
        </h1>
        {!users ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={100} />
            <Skeleton height={100} />
            <Skeleton height={100} />
            <Skeleton height={100} />
          </SkeletonTheme>
        ) : (
          <div className="sponsored-wrapper p-3">
            {users.map((user) => {
              return <TopArtist key={user._id} {...user} />
            })}
          </div>
        )}
      </section>
    </>
  )
}

export default SponsoredMenu
