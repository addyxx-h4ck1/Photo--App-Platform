import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validatePassword } from '../utils/validate-password'
import AlertSuccess from '../components/Alert-success'
import AlertWarning from '../components/Alert-warning'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveToken } from '../features/Login/user-login-slice'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [warningMessage, setWarningMessage] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  //show warning
  const showError = (message) => {
    setWarningMessage(message)
    setShowWarning(true)
    setTimeout(() => {
      setShowWarning(false)
      setWarningMessage('message')
    }, 2000)
  }
  //show success
  const popSuccess = (message) => {
    setSuccessMessage(message)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setSuccessMessage('message')
    }, 2000)
  }
  //refrence all inputs
  const IDRef = useRef(null)
  const passwordRef = useRef(null)

  //submit & process data function
  const submitFrom = async (e) => {
    e.preventDefault()
    //check for empty values
    if (!IDRef.current.value || !passwordRef.current.value)
      return showError('oops! some fields are empty')
    //create a form Object
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())
    //send form to server (Axios)
    try {
      let serverEndpoint =
        'https://auth-copiq6djm4es73a4js7g.onrender.com/api/signin'
      const response = await axios.post(serverEndpoint, formData)
      if (response.status === 200) {
        popSuccess('Welcome back!')
        //clear form and redirect to login
        IDRef.current.value = ''
        passwordRef.current.value = ''
        //redirect to login
        dispatch(saveToken(response.data))
        setTimeout(() => {
          navigate('/m/pixelrart/foryou', {
            preventScrollReset: true,
            state: response.data,
          })
        }, 2000)
        return
      }
      //incase of an error
    } catch (error) {
      console.log(error)
      if (error.response.status == 401) return showError(error.response.data)
      if (error.response.data.includes('oops!'))
        return showError(error.response.data)
      showError('oops! internal server error, please try again!')
    }
  }
  return (
    <>
      <section className="sign-up-container w-full flex justify-center items-center h-[95vh] px-2 text-sm">
        <article className="sign-up-wrapper flex flex-col items-center p-4 bg-bgPrimary w-[480px]  rounded-2xl">
          <h1 className="font-black text-2xl text-center">Welcome Back!</h1>
          <div className="flex gap-1  flex-wrap text-center justify-center items-center my-2">
            <p>Don't have an account?</p>
            <Link to={'/auth/signup'} className="text-[royalblue]">
              Sign up here
            </Link>
          </div>
          {/* Form */}
          <form
            className="w-[98%] flex items-center flex-col justify-center mt-2"
            onSubmit={(e) => submitFrom(e)}
          >
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="text"
                id="signin-email"
                name="uniqueID"
                ref={IDRef}
                placeholder="Enter email or username"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="password"
                id="signin-password"
                name="pwd"
                ref={passwordRef}
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
          <div className="flex flex-col text-center justify-center items-center w-full gap-1 mb-3 mt-1 ">
            <Link to={'/auth/password-reset'} className="text-[royalblue]">
              forgot password?
            </Link>
            <p className="text-xs">
              &copy; {new Date().getFullYear()}{' '}
              <span className="text-[aqua]">pixelRart.</span> All rights
              reserved
            </p>
          </div>
          {/* Form */}
        </article>
      </section>
      {showWarning ? <AlertWarning warning={warningMessage} /> : null}
      {showSuccess ? <AlertSuccess success={successMessage} /> : null}
    </>
  )
}

export default SignIn
