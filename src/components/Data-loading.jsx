import React from 'react'

const LoadingData = () => {
  return (
    <div className="absolute duration-500 hover:duration-500 p-3 min-w-[100%] h-[300px]  flex items-center my-5 justify-center  flex-col gap-4">
      <span className="loading loading-spinner loading-md"></span>
      please wait ...
    </div>
  )
}

export default LoadingData
