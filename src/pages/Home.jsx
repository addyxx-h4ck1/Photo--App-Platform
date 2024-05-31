import React from 'react'
const Home = () => {
  return (
    <>
      <section className="top-sec w-full flex justify-around items-center ">
        <div className="top-text flex justify-center items-center text-center flex-col max-w-[800px] mt-[3rem] mx-4">
          <h1 className=" text-7xl capitalize mb-6 portrait:text-5xl portrait:leading-[3rem]">
            discover digital art and collect{' '}
            <span className="text-[aqua]">NFT's</span>
          </h1>
          <p className="mb-6 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione
            perspiciatis eligendi nihil veritatis minus iure accusantium nisi,
            corrupti ?
          </p>
          <div className="flex gap-7 text-nowrap">
            <button className="top-btn duration-500 hover:duration-500 hover:border-[#22c1c3] py-2 px-4 hover:bg-[#22c1c3] border-[0.5px] rounded-3xl hover:text-primary font-semibold">
              Get Started
            </button>
            <button className="duration-500 hover:duration-500  py-3 px-4 rounded-3xl hover:text-[#22c1c3] text-md">
              learn more <i className="fa fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="counter-container my-6 mt-[4rem] mx-4 flex justify-center items-center flex-col">
        <div className="counter-wrapper w-full max-w-[1200px] py-[2rem]  rounded-3xl border-2 border-[aqua] hover:text-[aqua] hover:duration-500  duration-500 flex justify-around items-center portrait:flex-col-reverse gap-y-[2rem] px-4">
          <div className="text-center">
            <p className="font-semibold text-sm">Artwork</p>
            <h1 className="font-black text-5xl flex gap-2 items-center justify-center">
              25k<p className="text-xl font-semibold text-[aqua]">+</p>
            </h1>
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm">Auction</p>
            <h1 className="font-black text-5xl flex gap-2 items-center justify-center">
              250k<p className="text-xl font-semibold text-[aqua]">+</p>
            </h1>
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm">Artists</p>
            <h1 className="font-black text-5xl flex gap-2 items-center justify-center">
              1k<p className="text-xl font-semibold text-[aqua]">+</p>
            </h1>
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="trending trendy my-[3rem] p-5 gap-5 flex justify-around items-center">
        {/*  */}
        <div className="trending-cards w-[500px] ">
          <div className="trendy-card relative overflow-hidden rounded-2xl">
            <img
              src="https://designyoutrust.com/wp-content/uploads/2018/02/4-54.jpg"
              alt=""
              className="h-[170px] object-cover rounded-md duration-500 hover:scale-[1.1] w-full"
            />
          </div>
          <div className="trendy-card relative overflow-hidden rounded-2xl">
            <img
              src="https://designyoutrust.com/wp-content/uploads/2018/02/23-17.jpg"
              alt=""
              className="h-[170px] object-cover rounded-md duration-500 hover:scale-[1.1] w-full"
            />
          </div>
          <div className="trendy-card relative overflow-hidden rounded-2xl">
            <img
              src="https://designyoutrust.com/wp-content/uploads/2018/02/26-15.jpg"
              alt=""
              className="h-[170px] object-cover rounded-md duration-500 hover:scale-[1.1] w-full"
            />
          </div>
          <div className="trendy-card relative overflow-hidden rounded-2xl">
            <img
              src="https://designyoutrust.com/wp-content/uploads/2018/02/3-54.jpg"
              alt=""
              className="h-[170px] object-cover rounded-md duration-500 hover:scale-[1.1] w-full"
            />
          </div>
        </div>
        {/*  */}
        <div className="w-[40%]">
          <p className="text-[aqua] mb-[1rem]">Trending</p>
          <h1 className="capitalize text-5xl max-w-[300px] mb-[1rem]">
            Hot trending this <span className="text-[aqua]"> week!</span>{' '}
          </h1>
          <p className="my-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            tempore placeat error tenetur, aliquam, saepe quis ab amet dolores
            ipsam
          </p>
        </div>
      </section>
      {/* TOP LIST ARTISTS */}
      <section className="trending artist mt-[3rem] p-5 gap-5 flex justify-around items-center">
        {/*  */}
        <div className="artist-text w-[40%]">
          <p className="text-[aqua] mb-[1rem]">Artists</p>
          <h1 className="capitalize text-5xl max-w-[300px] mb-[1rem]">
            top list <span className="text-[aqua]">artists</span>{' '}
          </h1>
          <p className="my-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            tempore placeat error tenetur, aliquam, saepe quis ab amet dolores
            ipsam
          </p>
        </div>
        {/*  */}
        <div className="trending-cards w-[600px] ">
          <div className="trendy-card relative overflow-hidden rounded-2xl flex flex-col justify-center items-center ">
            <div className="relative top-0 z-20">
              <img
                src="https://boydphotography.co.ke/fashion/best_wedding_photographer_Nairobi_Kenya_4.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full object-cover border-b-[2px] border-[aqua]"
              />
            </div>
            <article className="bg-[#212020] w-full rounded-t-2xl relative top-[-40px] overflow-hidden">
              <div className="text-center my-5 mt-[3rem]">
                <h1 className="font-semibold">Genz PhotoLab</h1>
                <p className="text-sm">Mombasa, Kenya</p>
              </div>
              <img
                src="https://boydphotography.co.ke/fashion/best_wedding_photographer_Nairobi_Kenya_4.jpg"
                alt=""
                className="h-[140px] object-cover rounded-2xl duration-500 hover:scale-[1.1] w-full overflow-hidden"
              />
            </article>
          </div>
          <div className="trendy-card relative overflow-hidden rounded-2xl flex flex-col justify-center items-center ">
            <div className="relative top-0 z-20">
              <img
                src="https://boydphotography.co.ke/fashion/b.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full object-cover border-b-[2px] border-[aqua]"
              />
            </div>
            <article className="bg-[#212020] w-full rounded-t-2xl relative top-[-40px]">
              <div className="text-center my-5 mt-[3rem]">
                <h1 className="font-semibold">Genz PhotoLab</h1>
                <p className="text-sm">Mombasa, Kenya</p>
              </div>
              <img
                src="https://boydphotography.co.ke/fashion/b.jpg"
                alt=""
                className="h-[140px] object-cover rounded-2xl duration-500 hover:scale-[1.1] w-full overflow-hidden"
              />
            </article>
          </div>
        </div>
      </section>
      {/* NEWSLETTER */}
      <section className="newsletter mx-4  flex flex-col justify-center items-center pb-8 border-b-[0.5px] border-[#0b3232]">
        <article className="max-w-[1300px] w-full">
          <h1 className="max-w-[900px] text-7xl capitalize">
            subscribe to get fresh <span className="text-[aqua]">news</span>{' '}
            update and offers from <span className="text-[aqua]">PhotoLab</span>{' '}
          </h1>
          <button className="top-btn duration-500 hover:duration-500 hover:border-[#22c1c3] py-2 px-4 mt-[2rem] hover:bg-[#22c1c3] border-[0.2px] rounded-3xl hover:text-primary font-semibold">
            Subscribe
          </button>
        </article>
      </section>
    </>
  )
}

export default Home
