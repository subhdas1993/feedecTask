import React from 'react'
import HeadDesc from './HeadDesc'
import VIDEO from '../assets/SampleVideo_720x480_2mb.mp4'

function Section2() {
  return (
    <>
      <HeadDesc
        head='Why Us'
        desc='At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.'
      />
      <div className='px-[7.8125%]'>
        <div className='flex lg:flex-row-reverse justify-between max-lg:justify-evenly max-lg:flex-col h-3/4 max-lg:h-full p-10 text-[#333]'>
          <div className='w-1/2 max-lg:w-full flex flex-col justify-center'>
            <div className='text-xl lg:text-4xl font-bold leading-relaxed'>Crafting Your Dream Career: Building a Path You Love with us</div>
            <div className='my-8'>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.<br /><br />
              Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.
            </div>
            <div className='flex'>
              <button className='bg-[#ffec05] px-4 py-2 rounded-3xl'>Book Demo Class</button>
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

export default Section2