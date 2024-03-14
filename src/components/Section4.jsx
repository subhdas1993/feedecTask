import React from 'react'
import ARROW2 from '../assets/extraImg/arrow_right_alt-24px(1).svg'
import GUY from '../assets/extraImg/photography-of-a-guy-wearing-green-shirt-1222271.png'
import STAR from '../assets/extraImg/grade-24px (1)-1.svg'

function Section4() {
  return (
    <>
      <div className='max-lg:mt-10 lg:mt-20 px-[7.8125%] lg:mb-32'>
        <div className='flex max-lg:flex-col justify-between items-center'>
          <div className='lg:w-3/4 max-lg:mb-4'>
            <div className='text-xl lg:text-4xl max-lg:text-center font-bold font-[Poppins]'>Our Students Feedback</div>
            <div className='mt-4 max-lg:px-[10%] text-sm lg:text-md max-lg:text-center font-[Roboto] text-[#707070]'>
              At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
            </div>
          </div>
          <div className='lg:w-1/6 p-2 flex justify-center items-center bg-[#f3f3f3] rounded-xl'>
            <div>Read More</div>
            <img src={ARROW2} alt="arrow2" className='w-1/6' />
          </div>
        </div>

        <div className='flex mt-10'>
          <img src={GUY} alt="guy" className='w-2/5 lg:w-1/5' />
          <div className='w-3/5 lg:w-4/5 max-lg:p-10 lg:p-20 bg-[#EFEFFE]'>
            <div className='flex items-center'>
              <img src={STAR} alt="ratings" />
              <img src={STAR} alt="ratings" />
              <img src={STAR} alt="ratings" />
              <img src={STAR} alt="ratings" />
              <img src={STAR} alt="ratings" />
            </div>
            <div className='font-[Poppins]'>
            "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."
            </div>
            <div className='font-[Roboto]'>
              <div className='font-bold'>
              Riad Isalm
              </div>
              <div>
              <span className='font-bold'>Product Manager.</span> @Learning.Com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4