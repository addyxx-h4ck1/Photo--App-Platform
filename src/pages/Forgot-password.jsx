import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AlertSuccess from '../components/Alert-success'
import AlertWarning from '../components/Alert-warning'
import Loader from '../components/Loader'
import { disableLoading, enableLoading } from '../features/loading-slice'
import { useDispatch, useSelector } from 'react-redux'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.loading)
  const [warningMessage, setWarningMessage] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  //refrence the input
  const emailRef = useRef(null)
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

  //send Data to server
  const sendForm = async (e) => {
    e.preventDefault()
    //check if if input is empty
    if (!emailRef.current.value)
      return showError('Please enter email associated with your account')
    //create form object
    let form = new FormData(e.target)
    let formData = Object.fromEntries(form.entries())
    //send data server
    try {
      dispatch(enableLoading())
      let serverEndpoint =
        'https://auth-copiq6djm4es73a4js7g.onrender.com/auth/sendmail'
      const response = await axios.post(serverEndpoint, formData)
      if (response.status === 201) {
        dispatch(disableLoading())
        popSuccess(response.data)
        //clear form and redirect to login
        emailRef.current.value = ''
        setTimeout(() => {
          navigate('/auth/reset-instructions', { state: { ok: true } })
        }, 2000)
      }
    } catch (error) {
      dispatch(disableLoading())
      showError('oops! internal server error, please try again!')
    }
  }

  return (
    <>
      <section className="sign-up-container w-full flex justify-center items-center h-[90vh] px-2 text-sm">
        <article className="sign-up-wrapper flex flex-col items-center p-4 bg-bgPrimary w-[500px]  rounded-2xl">
          <h1 className="font-semibold text-2xl text-center">
            Forgot Password?
          </h1>
          <div className="flex gap-1  flex-wrap text-center justify-center items-center my-2">
            <p>Enter the email address associated with account.</p>
          </div>
          {/* Form */}
          <form
            className="w-[98%] flex items-center flex-col justify-center mt-2"
            onSubmit={(e) => sendForm(e)}
          >
            <div className="flex flex-col w-full gap-1 mb-3">
              <input
                type="email"
                id="reset-account-email"
                name="email"
                autoComplete={'off'}
                ref={emailRef}
                placeholder="Enter email"
                className="w-full rounded-md py-4 px-5 border-0 outline-0"
              />
            </div>

            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-col w-full gap-1 mb-3 mt-2 text-white font-semibold">
                <input
                  type="submit"
                  value={'Reset Password'}
                  className="w-full rounded-md py-4 px-5 border-0 outline-0 bg-[royalblue] duration-300 hover:duration-300 hover:bg-[#6589f6]"
                />
              </div>
            )}
          </form>
          <div className="flex flex-col text-center justify-center items-center w-full gap-1 mb-3 mt-2">
            <div className="flex gap-1  flex-wrap text-center justify-center items-center ">
              <p>Back to</p>
              <Link to={'/auth/signin'} className="text-[royalblue]">
                Sign in
              </Link>
            </div>
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

export default ForgotPassword
