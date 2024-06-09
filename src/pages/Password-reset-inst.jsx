import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PasswordEmailMessage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <>
      {!state.ok ? (
        <Navigate to={'/auth/signin'} />
      ) : (
        <section className="flex w-full h-[95vh] flex-col items-center justify-center">
          <div className="pwd-reset-box bg-bgPrimary  p-5 w-[55%] rounded-lg">
            <h1 className="text-6xl text-center  text-blue-500 mb-2">
              <i className="fa fa-key"></i>
            </h1>
            <p className="mb-2 font-black">Hi user,</p>
            <p>
              We care so much about your data and to verify you're the rightful
              owner of this account we have sent a password reset link to you
              email containing instructions to reset your password, for security
              purposes the link will expire in 3 minutes.
            </p>
            <button
              className="w-full p-4 px-5 my-4 rounded-lg font-bold bg-blue-500"
              onClick={() => {
                window.location.replace('/auth/signin')
              }}
            >
              Close
            </button>
          </div>
        </section>
      )}
    </>
  )
}

export default PasswordEmailMessage
