import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section className="top-sec w-full flex justify-around items-center ">
        <div className="top-text flex justify-center items-center text-center flex-col max-w-[900px] mt-[3rem] portrait:mt-[2rem] mx-4">
          <h1 className=" text-7xl capitalize mb-6 portrait:text-5xl portrait:leading-[3rem]">
            discover digital <span className="text-[aqua]">art, </span>
            creativity & <span className="text-[aqua]">photoArt</span>
          </h1>
          <i className="text-[#137c7c] my-4 portrait:my-2 text-nowrap">
            <i className="fa fa-quote-left "></i> Where Every Moment Finds Its
            Masterpiece <i className="fa fa-quote-right"></i>
          </i>
          <p className="mb-6 text-[16px] portrait:text-sm">
            Discover Kenya's photographic talent hub. Showcase your vision,
            connect with enthusiasts. Empower your creativity, turn moments into
            art. Join our vibrant community, elevate your craft.{' '}
            <span className="text-[aqua]">Join us today</span> and make every
            shot tell a story.
          </p>
          <div className="flex gap-7 text-nowrap">
            <button className="top-btn duration-500 hover:duration-500 hover:border-[#22c1c3] py-2 px-4 hover:bg-[#22c1c3] border-[0.5px] rounded-3xl hover:text-primary font-semibold">
              <Link to="/m/pixelrart" preventScrollReset={true}>
                {' '}
                Get Started
              </Link>
            </button>
            <button className="duration-500 hover:duration-500  py-3 px-4 rounded-3xl hover:text-[#22c1c3] text-md">
              learn more <i className="fa fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="counter-container my-6 mt-[4rem] mx-4 flex justify-center items-center flex-col">
        <div className="counter-wrapper w-full max-w-[1200px] py-[2rem]  rounded-3xl border-[1px] border-[aqua] hover:text-[aqua] hover:duration-500  duration-500 flex justify-around items-center  gap-y-[2rem] px-4">
          <div className="text-center">
            <p className="font-semibold text-sm">Artwork</p>
            <h1 className="font-black text-5xl flex gap-2 items-center justify-center">
              25k<p className="text-xl font-semibold text-[aqua]">+</p>
            </h1>
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm">Community</p>
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
          <p className="my-[2rem] portrait:text-sm portrait:my-[1rem]">
            Each image tells a unique story, showcasing the talent and
            creativity of our vibrant community. Join us in celebrating the
            artistry and vision behind every trending shot.
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
          <p className="my-[2rem] portrait:text-sm portrait:my-[1rem]">
            Their exceptional talent and artistic vision have captivated our
            community, earning them this well-deserved recognition.{' '}
            <span className="text-[aqua]"></span> in community, earning them
            this well-deserved recognition.{' '}
            <i className="text-[aqua]">PixelRart &#8482;</i>
          </p>
        </div>
        {/*  */}
        <div className="trending-cards w-[600px] ">
          <div className="trendy-card relative overflow-hidden rounded-2xl flex flex-col justify-center items-center ">
            <div className="relative top-0 z-20">
              <img
                src="https://boydphotography.co.ke/fashion/best_wedding_photographer_Nairobi_Kenya_4.jpg"
                alt=""
                className="profile w-[80px] h-[80px] rounded-full object-cover border-b-[2px] border-[aqua] "
              />
            </div>
            <article className="bg-[#212020] w-full rounded-t-2xl relative top-[-40px] overflow-hidden">
              <div className="text-center my-5 mt-[3rem]">
                <h1 className="font-bold">Genz PhotoLab</h1>
                <p className="text-xs">Mombasa, Kenya</p>
              </div>
              <img
                src="https://boydphotography.co.ke/fashion/best_wedding_photographer_Nairobi_Kenya_4.jpg"
                alt=""
                className="img h-[140px] object-cover rounded-2xl duration-500 hover:scale-[1.1] w-full overflow-hidden"
              />
            </article>
          </div>
          <div className="trendy-card relative overflow-hidden rounded-2xl flex flex-col justify-center items-center ">
            <div className="relative top-0 z-20">
              <img
                src="https://boydphotography.co.ke/fashion/b.jpg"
                alt=""
                className="profile w-[80px] h-[80px] rounded-full object-cover border-b-[2px] border-[aqua]"
              />
            </div>
            <article className="bg-[#212020] w-full rounded-t-2xl relative top-[-40px]">
              <div className="text-center my-5 mt-[3rem]">
                <h1 className="font-bold">Genz PhotoLab</h1>
                <p className="text-xs">Mombasa, Kenya</p>
              </div>
              <img
                src="https://boydphotography.co.ke/fashion/b.jpg"
                alt=""
                className="img h-[140px] object-cover rounded-2xl duration-500 hover:scale-[1.1] w-full overflow-hidden"
              />
            </article>
          </div>
        </div>
      </section>
      {/* BRANDS */}
      <section className="brands flex justify-center my-[2rem] items-center flex-col relative">
        <p className="text-[aqua] mb-[1rem] text-center">Trusted by</p>
        <div className="brands-wrapper py-[2rem] max-w-[1200px] h-[50px] relative">
          <img
            src="https://www.tailorbrands.com/wp-content/uploads/2020/06/tblogo_1-copy.svg"
            alt=""
            className="brand-item brand-item-1 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://marketplace.canva.com/EAF2o0M0JC8/1/0/1600w/canva-black-and-yellow-classy-and-refined-photography-logo-BIt0--f7RTc.jpg"
            alt=""
            className="brand-item brand-item-2 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://cdn.dribbble.com/userupload/7091108/file/original-941a741af3cb59ee99c3b7c95c3e44ab.jpg?resize=752x"
            alt=""
            className="brand-item brand-item-3 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/01/09/photography-logo-with-camera-vector-Graphics-56936610-1-580x387.png"
            alt=""
            className="brand-item brand-item-4 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://assets-global.website-files.com/63a9fb94e473f36dbe99c1b1/651bc9303affcc022a796f1d_7blLaSWTHqGJ4h0uKWcA.png"
            alt=""
            className="brand-item brand-item-5 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/18151318/12102.png"
            alt=""
            className="brand-item brand-item-6 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/297834989/original/c56c508e525d47f379a7ad11da6a7e5ea351e8c6/make-a-creative-and-professional-photography-logo-design.jpg"
            alt=""
            className="brand-item brand-item-7 aspect-[1/1] w-[120px] h-[50px] rounded-xl object-cover mix-blend-lighten"
          />
        </div>
      </section>
      {/* NEWSLETTER */}
      <section className="newsletter mx-4  flex flex-col justify-center items-center pb-8 border-b-[0.5px] border-[#0b3232]">
        <article className="max-w-[1300px] w-full">
          <h1 className="max-w-[900px] text-7xl capitalize">
            subscribe to get fresh <span className="text-[aqua]">news</span>{' '}
            update and offers from{' '}
            <span className="text-[aqua]">PixelRart &#8482;</span>{' '}
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
