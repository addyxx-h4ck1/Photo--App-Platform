import React from 'react'

const Loader = () => {
  return (
    <div className="text-center w-full bg-[#2F3644] rounded-lg py-4 text-sm font-serif flex justify-center items-center gap-3">
      <span className="loading loading-spinner loading-md"></span>
      please wait ...
    </div>
  )
}

export default Loader
