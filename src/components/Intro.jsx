import React from 'react'
import NavBar from './NavBar'
import ARROW from '../assets/extraImg/arrow_right_alt-24px.svg'
import ARROW2 from '../assets/extraImg/arrow_right_alt-24px(1).svg'
import VIDEO from '../assets/SampleVideo_720x480_2mb.mp4'

function Intro() {
  return (
    <>
      <div className='introSec px-[7.8125%]'>
        <NavBar />
        <div className='flex justify-between max-lg:justify-evenly max-lg:flex-col h-3/4 max-lg:h-full p-10 text-white'>
          <div className='w-1/2 max-lg:w-full flex flex-col justify-center'>
            <div className='text-xl lg:text-4xl font-bold max-lg:text-black'>We Create Learning Experience With Excellent Technology</div>
            <div className='my-8 max-lg:text-[#707070]'>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</div>
            <div className='flex'>
              <button className='bg-[#ffec05] px-4 py-2 text-[#333] rounded-3xl'>Book Demo Class</button>
              <div className='w-1/2 px-4 flex items-center'>
                <span className='max-lg:text-black'>Explore More</span>
                <img src={ARROW} alt="arrow" width="10%" className='max-lg:hidden' />
                <img src={ARROW2} alt="arrow" width="10%" className='lg:hidden' />
              </div>
            </div>
          </div>
          <div className='w-1/2 max-lg:w-full m-10 max-lg:m-0 flex justify-center items-center max-lg:mt-4'>
            <div className='border-[2vmax] border-[#2626DB43] w-full aspect-video rounded-xl'>
              <video className='w-full' controls>
                <source src={VIDEO} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro