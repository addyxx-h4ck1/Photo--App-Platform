import React from 'react'

const AlertWarning = ({ warning }) => {
  return (
    <div className="box-alert absolute top-[10px] right-[10px] w-full z-[1000] flex justify-end">
      <div className="box-alert-wrapper bg-[#FEF2F2]  text-[#F87171] font-black text-sm portrait:text-xs p-4 w-[40%] rounded-lg">
        <div>
          <i className="fa-solid fa-times-circle"></i> {`${warning}`}
        </div>
      </div>
    </div>
  )
}

export default AlertWarning
