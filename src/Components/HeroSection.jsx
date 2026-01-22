import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {

  return (

    <div className='flex flex-col items-center  '>
      <h1 className="text-4xl sm:text-6xl text-center tracking-wide">Code Jounerny
        <span className='bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {" "}
          For Master Fullstack</span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis odit labore dolorem soluta tempora quod, alias dolor? Debitis doloremque pariatur architecto tempore itaque.
      </p>     

      <div className='felx justify-center my-10'>
          <a href="#" className='bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mt-10 rounded-md mx-3'>
            Start Here
          </a>

          <a href="#" className='px-4 py-3 rounded-md border'>Documentaion</a>
      </div>

     <div className="flex flex-col items-center mt-10 sm:flex-row sm:justify-center">
  <video
    autoPlay
    muted
    loop
    className="w-full sm:w-1/2 rounded-lg border border-orange-700 shadow-lg shadow-orange-400 mx-2 my-4"
    src={video1}
  ></video>

  <video
    autoPlay
    muted
    loop
    className="w-full sm:w-1/2 rounded-lg border border-orange-700 shadow-lg shadow-orange-400 mx-2 my-4"
    src={video2}
  ></video>
</div>


    </div>
    
  )
}

export default HeroSection