import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AlertSuccess from '../../components/Alert-success'
import AlertWarning from '../../components/Alert-warning'
import axios from 'axios'
import LoadingData from '../../components/Data-loading'
import { fetchUser } from '../../features/Login/user-login-slice'

const UpdateProfile = () => {
  const { userInfo } = useSelector((state) => state.token)
  const { T } = useSelector((state) => state.token)
  const dispatch = useDispatch()

  /////////////////
  const navigate = useNavigate()
  const [loading, setIsLoading] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  /////////////////
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

  //refrence all values which can be changed
  let brandNameRef = useRef('')
  let bioRef = useRef('')
  let websiteRef = useRef('')
  let locationRef = useRef('')
  let sFbRef = useRef('')
  let sIgRef = useRef('')
  let sWhtppRef = useRef('')
  let servicesRef = useRef('')

  //send form
  const updateProfile = async (e) => {
    e.preventDefault()
    let form = Array.from(new FormData(e.target)).filter(function ([k, v]) {
      return v
    })
    let formData = Object.fromEntries(form)
    if (Object.keys(formData).length === 0)
      return showError('!oops no changes detected')
    // send changes to the server
    try {
      setIsLoading(true)
      let url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/update'
      let res = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${T.token}` },
      })
      dispatch(fetchUser(T))
      setIsLoading(false)
      popSuccess('Profile updated successfully')
      setTimeout(() => {
        navigate('/m/profile')
      }, 2000)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      {T ? (
        <>
          <section className="proile-edit flex justify-center relative mx-2">
            <article className="max-w-[900px] w-full p-2 py-2 bg-bgPrimary my-2 rounded-lg">
              <section className="sticky top-[50px] py-4 flex justify-center items-center bg-primary rounded-lg mb-2">
                {showWarning ? <AlertWarning warning={warningMessage} /> : null}
                {showSuccess ? <AlertSuccess success={successMessage} /> : null}
                <p className="text-center font-semibold text-sm">
                  <i className="fa fa-edit"></i> Edit Profile
                </p>
                {/* loading  */}
                {loading ? (
                  <div className="loader text-center w-full absolute flex justify-center items-center z-50 top-0 h-[80vh]">
                    <div className="max-w-[400px] h-[200px] bg-primary w-full flex justify-center flex-col gap-2 items-center rounded-lg text-[aqua]">
                      <span className="loading loading-spinner loading-md"></span>
                      <p className="text-xs">Applying changes ....</p>
                    </div>
                  </div>
                ) : null}
                {/* loading  */}
              </section>
              <div className="flex items-center pb-2 gap-3 text-center">
                <img
                  src={userInfo.pImg}
                  alt=""
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <div className="">
                  <Link to={`/m/profile/${userInfo._id}`}>
                    {userInfo.brandName}
                  </Link>{' '}
                  <p className="">{userInfo.userName}</p>
                </div>
              </div>
              <i className="text-center w-full text-[aqua]">
                Follow the instructions to avoid any client errors
              </i>
              <hr />
              {/* form */}
              <form className="my-3" onSubmit={(e) => updateProfile(e)}>
                {/* Account Info */}
                <h1 className="font-semibold text-lg">Account info</h1>
                <i>
                  These details identifies your account in the servers, some of
                  them cannot be changed
                </i>
                <div className="account-info-edit my-2 flex flex-wrap gap-2">
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>
                        Username (how we call you){' '}
                        <i className="fa fa-lock"></i>
                      </i>
                    </label>
                    <input
                      type="text"
                      readOnly
                      placeholder={userInfo.userName}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>Brandname (your brand name)</i>
                    </label>
                    <input
                      type="text"
                      ref={brandNameRef}
                      id="brandName"
                      name="brandName"
                      placeholder={userInfo.brandName}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>
                        Email (can't edit) <i className="fa fa-lock"></i>
                      </i>
                    </label>
                    <input
                      type="email"
                      readOnly
                      placeholder={userInfo.email}
                      value={userInfo.email}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>Bio (max 80 char)</i>
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      ref={bioRef}
                      placeholder={userInfo.bio}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua] h-[150px] "
                    ></textarea>
                  </div>
                </div>
                {/* Additional User info */}
                <h1 className="font-semibold text-lg pt-2">Additional Info</h1>

                <div className="account-info-edit my-2 flex flex-wrap gap-2">
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>Website</i>
                    </label>
                    <input
                      type="text"
                      ref={websiteRef}
                      id="website"
                      name="website"
                      placeholder={userInfo.website}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>Location</i>
                    </label>
                    <input
                      type="text"
                      ref={locationRef}
                      id="loc"
                      name="loc"
                      placeholder={userInfo.loc}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                </div>
                {/* social Media */}
                <h1 className="font-semibold text-lg pt-2">Social Media</h1>
                <i>Provide the full profile link to avoid broken links.</i>
                <div className="account-info-edit my-2 flex flex-wrap gap-2">
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i className="fa-brands fa-facebook text-[#0000ff]"></i>{' '}
                      <i>Facebook</i>
                    </label>
                    <input
                      type="text"
                      ref={sFbRef}
                      id="sFb"
                      name="sFb"
                      placeholder={userInfo.sFb}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i className="fa-brands fa-instagram text-[red]"></i>{' '}
                      <i>Instagram</i>
                    </label>
                    <input
                      type="text"
                      ref={sIgRef}
                      id="sIg"
                      name="sIg"
                      placeholder={userInfo.sIg}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i className="fa-brands fa-whatsapp text-[green]"></i>{' '}
                      <i>WhatsApp</i>
                    </label>
                    <input
                      type="text"
                      id="sWhttp"
                      name="sWhttp"
                      ref={sWhtppRef}
                      placeholder={userInfo.sWhtpp}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                </div>
                {/* Services */}
                <h1 className="font-semibold text-lg pt-2">Services</h1>
                <i>
                  Add all the services you offer, (separate each service with a
                  space e.g photography Editing)
                </i>
                <div className="account-info-edit my-2 flex flex-wrap gap-2">
                  <div className="flex flex-col flex-grow gap-1 ">
                    <label htmlFor="username" className="font-semibold text-sm">
                      <i>Services (separate each by a space)</i>
                    </label>
                    <input
                      type="text"
                      id="services"
                      name="services"
                      ref={servicesRef}
                      placeholder={'List services'}
                      className="py-3 px-5 rounded-lg outline-none border-0 text-[aqua]"
                    />
                  </div>
                </div>

                {/* action buttons */}
                <div className="flex gap-3 w-full justify-around items-center my-8">
                  <button
                    type="submit"
                    className="py-2 px-4 border-[1px] rounded-lg border-[aqua] text-[aqua] hover:duration-300 duration-300 hover:text-[#1b1b1b] font-semibold text-sm hover:bg-[aqua]"
                  >
                    Save changes
                  </button>
                  <button
                    type="reset"
                    className="py-2 px-4 border-[1px] rounded-lg border-[#f58c8c] text-[#f58c8c] hover:duration-300 duration-300 hover:text-[#1b1b1b] font-semibold text-sm hover:bg-[#f58c8c]"
                  >
                    Reset changes
                  </button>
                </div>
                {/* footer */}
                <div className="w-full text-center">
                  <i>we'll never share your infomation with anyone.</i>
                  <p className="text-xs">
                    {' '}
                    &copy; {new Date().getFullYear()} PixelRart.
                  </p>
                </div>
              </form>
            </article>
          </section>
        </>
      ) : (
        <Navigate to={'/auth/signin'} />
      )}
    </>
  )
}

export default UpdateProfile
