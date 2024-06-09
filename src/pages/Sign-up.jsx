import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validatePassword } from '../utils/validate-password'
import AlertSuccess from '../components/Alert-success'
import AlertWarning from '../components/Alert-warning'
import axios from 'axios'
import Loader from '../components/Loader'
import { disableLoading, enableLoading } from '../features/loading-slice'
import { useDispatch, useSelector } from 'react-redux'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [warningMessage, setWarningMessage] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const { loading } = useSelector((state) => state.loading)
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
  const emailRef = useRef(null)
  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  //submit & process data function
  const submitForm = async (e) => {
    e.preventDefault()
    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !confirmPasswordRef.current.value ||
      !userNameRef.current.value
    )
      return showError('oops! some fields are empty')
    //password check
    let passCheck = validatePassword(
      passwordRef.current.value,
      confirmPasswordRef.current.value
    )
    if (passCheck !== 'ok') return showError(passCheck)
    //create a form Object
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())
    //send form to server (Axios)
    try {
      dispatch(enableLoading())
      let serverEndpoint =
        'https://auth-copiq6djm4es73a4js7g.onrender.com/api/signup'
      const response = await axios.post(serverEndpoint, formData)
      if (response.status === 201) {
        dispatch(disableLoading())
        popSuccess(response.data)
        //clear form and redirect to login
        emailRef.current.value = ''
        userNameRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''
        //redirect to login
        setTimeout(() => {
          navigate('/auth/signin', { preventScrollReset: true })
        }, 2000)
        return
      }
      //incase of an error
    } catch (error) {
      dispatch(disableLoading())
      if (error.response.status == 409) return showError(error.response.data)
      showError('Internal server error, try again!')
    }
  }

  return (
    <>
      <section className="sign-up-container w-full flex justify-center items-center h-[95vh] px-2 text-sm">
        <article className="sign-up-wrapper flex flex-col items-center p-4 bg-bgPrimary w-[480px]  rounded-2xl">
          <h1 className="font-black text-3xl">Sign up</h1>
          <div className="flex gap-1 text-sm  flex-wrap text-center justify-center items-center my-2 ">
            <p>Already have an account?</p>
            <Link to={'/auth/signin'} className="text-[royalblue]">
              Sign in here
            </Link>
          </div>
          {/* Form */}
          <form
            className="w-[98%] flex items-center flex-col justify-center mt-2"
            onSubmit={(e) => submitForm(e)}
          >
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="text"
                id="userName"
                name="userName"
                ref={userNameRef}
                placeholder="Username"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                placeholder="Enter email"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="password"
                id="pwd"
                name="pwd"
                ref={passwordRef}
                placeholder="Create password"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="text"
                id="signup-conf-password"
                name="signup-conf-password"
                autoComplete={'off'}
                ref={confirmPasswordRef}
                placeholder="Confirm password"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-col w-full gap-1 mb-3 mt-2 text-white font-semibold">
                <input
                  type="submit"
                  value={'Sign me up'}
                  className="w-full rounded-md py-4 px-5 border-0 outline-0 bg-[royalblue] duration-300 hover:duration-300 hover:bg-[#6589f6]"
                />
              </div>
            )}
          </form>
          <div className="flex flex-col text-center justify-center items-center w-full gap-1 mb-3 mt-2">
            <p className="mb-2 text-xs">
              We'll never share your email with anyone else.
            </p>
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

export default SignUp
