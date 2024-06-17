import React, { useRef, useState } from 'react'
import AlertSuccess from '../../components/Alert-success'
import AlertWarning from '../../components/Alert-warning'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { disableLoading, enableLoading } from '../../features/loading-slice'

const CreatePost = () => {
  const dispatch = useDispatch()
  const { T } = useSelector((state) => state.token)
  const { loading } = useSelector((state) => state.loading)
  const [img, setImg] = useState(null)
  const [fileName, setFileName] = useState('not selected')
  const [warningMessage, setWarningMessage] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  //refrence all inputs
  let postNameRef = useRef(null)
  let postCaptionRef = useRef(null)
  let imageNameRef = useRef(null)
  let postImageRef = useRef(null)

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

  //submit form
  const submitPost = async (e) => {
    e.preventDefault()
    //check empty inputs
    if (!img) return showError('oops! please select an image')
    if (
      !postCaptionRef.current.value ||
      !postNameRef.current.value ||
      !imageNameRef.current.value
    )
      return showError('oops! all fields are required')

    //create a formData
    let formData = new FormData(e.target)
    Object.keys(postImageRef.current.files).forEach((key) => {
      formData.append('image', postImageRef.current.files.item(key))
    })
    let postObject = Object.fromEntries(formData.entries())
    //send for to server
    try {
      dispatch(enableLoading())
      let url = 'https://server2-copiq6djm4es73a4js7g.onrender.com/u/p'
      let req = await axios.post(url, postObject, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${T.token}`,
        },
      })
      dispatch(disableLoading())
      popSuccess('Post added successfuly!')
      setImg(null)
      setFileName('not selected')
      postNameRef.current.value = null
      postCaptionRef.current.value = null
      imageNameRef.current.value = null
      postImageRef.current.value = null
    } catch (error) {
      console.log(error)
      dispatch(disableLoading())
      showError('!oops failed to process post, try again')
    }
  }

  return (
    <>
      <section className="create-post posts-parent relative flex flex-col items-center w-[50%] mt-[1rem] h-[700px] bg-bgPrimary rounded-lg">
        <h1 className="text-lg font-bold p-4">Create New Post</h1>
        <form
          className="w-[70%] flex flex-col items-center p-4"
          onSubmit={(e) => submitPost(e)}
        >
          <div
            className={`upoad h-[fit-content] min-h-[200px] max-h-[250px] w-[100%] flex flex-col justify-center items-center ${
              img ? '' : 'border-dashed border-2'
            } cursor-pointer hover:border-[aqua] hover:duration-300 duration-300 hover:text-[aqua] p-3 mb-3`}
            onClick={() => document.querySelector('.upload-input').click()}
          >
            <input
              type="file"
              accept="image/*"
              className="upload-input"
              ref={postImageRef}
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name)
                if (files) return setImg(URL.createObjectURL(files[0]))
              }}
            />
            {img ? (
              <img
                src={img}
                alt={img}
                className="h-[100%] w-[95%] object-cover rounded-2xl"
              />
            ) : (
              <>
                <p className="fa fa-cloud-upload text-6xl"></p>
                <p>Upload</p>
                <i>click to select a photo</i>
              </>
            )}
          </div>
          <input
            type="text"
            id="imageName"
            name="imageName"
            ref={imageNameRef}
            placeholder="photo name (optional)"
            className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0 "
          />
          <input
            type="text"
            id="postTitle"
            name="title"
            ref={postNameRef}
            placeholder="Add a title"
            className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0 "
          />
          <textarea
            name="caption"
            id="caption"
            ref={postCaptionRef}
            placeholder="post caption...."
            className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0  h-[150px]"
          ></textarea>
          {loading ? (
            <Loader />
          ) : (
            <button className="w-[100%] px-5 py-4 font-semibold bg-bgPrimary shadow-lg rounded-lg duration-300 hover:duration-300 hover:bg-[#1fa6a6] border-[0.1px] border-[gray] hover:border-[#1fa6a6] hover:text-[#1b1b1b]">
              Create
            </button>
          )}
        </form>
      </section>
      {showWarning ? <AlertWarning warning={warningMessage} /> : null}
      {showSuccess ? <AlertSuccess success={successMessage} /> : null}
    </>
  )
}

export default CreatePost
