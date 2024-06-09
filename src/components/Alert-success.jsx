import React from 'react'

const AlertSuccess = ({ success }) => {
  return (
    <div className="box-alert absolute top-[10px] right-[10px] w-full z-[1000] flex justify-end">
      <div className="box-alert-wrapper bg-[#b6fdcb]  text-[#25ac57] font-black text-xs p-4 w-[40%] rounded-lg">
        <div>
          <i className="fa-solid fa-circle-check"></i> {`${success}`}
        </div>
      </div>
    </div>
  )
}

export default AlertSuccess
