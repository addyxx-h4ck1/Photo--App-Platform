import React, { useState } from 'react'

const CreatePost = () => {
  const [img, setImg] = useState(null)
  const [fileName, setFileName] = useState('not selected')

  return (
    <section className="create-post posts-parent flex flex-col items-center w-[50%] mt-[1rem] h-[700px] bg-bgPrimary rounded-lg">
      <h1 className="text-lg font-bold p-4">Create New Post</h1>
      <form action="" className="w-[70%] flex flex-col items-center p-4">
        <div
          className="upoad h-[fit-content] min-h-[200px] max-h-[250px] w-[100%] flex flex-col justify-center items-center border-dashed border-2 cursor-pointer hover:border-[aqua] hover:duration-300 duration-300 hover:text-[aqua] p-3 mb-3"
          onClick={() => document.querySelector('.upload-input').click()}
        >
          <input
            type="file"
            accept="image/*"
            className="upload-input"
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
              className="h-[100%] w-[90%] object-contain rounded-2xl"
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
          placeholder="photo name (optional)"
          className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0 "
        />
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Pick a title"
          className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0 "
        />
        <textarea
          name="caption"
          id="caption"
          placeholder="post caption...."
          className="w-[100%] px-5 py-4 mb-3 rounded-lg outline-0 border-0  h-[150px]"
        ></textarea>
        <button className="w-[100%] px-5 py-4 font-semibold bg-bgPrimary shadow-lg rounded-lg duration-300 hover:duration-300 hover:bg-[#1fa6a6] border-[0.1px] border-[gray] hover:border-[#1fa6a6] hover:text-[#1b1b1b]">
          Create
        </button>
      </form>
    </section>
  )
}

export default CreatePost
