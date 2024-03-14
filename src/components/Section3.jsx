import React from 'react'
import HeadDesc from './HeadDesc'
import ICON from '../assets/extraImg/assignment_turned_in-24px.svg'
import ICON2 from '../assets/extraImg/supervised_user_circle-24px (2)-1.svg'

function Section3() {
  return (
    <>
      <HeadDesc
        head='We Completed 1200+ Certification Program Successfully & Counting'
        desc='At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.'
      />
      <div className='mt-10 lg:mt-20 px-[7.8125%] grid max-lg:grid-rows-2 max-lg:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-4'>
        <div className='flex justify-start items-center'>
          <img src={ICON} alt="icon1" />
          <div>
            <div>100+</div>
            <div>Batch Complete</div>
          </div>
        </div>
        <div className='flex justify-start items-center max-lg:flex-row-reverse'>
          <img src={ICON} alt="icon1" />
          <div>
            <div>50+</div>
            <div>Active Batch</div>
          </div>
        </div>
        <div className='flex justify-start items-center'>
          <img src={ICON2} alt="icon1" />
          <div>
            <div>10,000+</div>
            <div>Student Satisfied</div>
          </div>
        </div>
        <div className='flex justify-start items-center max-lg:flex-row-reverse'>
          <img src={ICON2} alt="icon1" />
          <div>
            <div>10+</div>
            <div>Course Modules</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3