import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className="sign-up-container w-full flex justify-center items-center h-[90vh] px-4">
      <article className="sign-up-wrapper flex flex-col items-center p-4 bg-bgPrimary w-[500px]  rounded-2xl">
        <h1 className="font-black text-3xl">Welcome Back!</h1>
        <div className="flex gap-1  flex-wrap text-center justify-center items-center my-2">
          <p>Don't have an account?</p>
          <Link to={'/auth/signup'} className="text-[royalblue]">
            Sign up here
          </Link>
        </div>
        {/* Form */}
        <form
          action=""
          className="w-[90%] flex items-center flex-col justify-center mt-2"
        >
          <div className="flex flex-col w-full gap-1 mb-3">
            <input
              type="email"
              id="signin-email"
              name="signin-email"
              placeholder="Enter email"
              className="w-full rounded-md py-4 px-5 border-0 outline-0"
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <input
              type="password"
              id="signin-password"
              name="signin-password"
              placeholder="Password"
              className="w-full rounded-md py-4 px-5 border-0 outline-0"
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3 mt-2 text-white font-semibold">
            <input
              type="submit"
              value={'Sign me in'}
              id="signin-conf-password"
              name="signin-conf-password"
              placeholder="Create conf-password"
              className="w-full rounded-md py-4 px-5 border-0 outline-0 bg-[royalblue] duration-300 hover:duration-300 hover:bg-[#6589f6]"
            />
          </div>
        </form>
        <div className="flex flex-col text-center justify-center items-center w-full gap-1 mb-3 mt-2">
          <Link to={'/auth/password-reset'} className="text-[royalblue]">
            forgot password?
          </Link>
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-[aqua]">pixelRart.</span> All rights reserved
          </p>
        </div>
        {/* Form */}
      </article>
    </section>
  )
}

export default SignIn
