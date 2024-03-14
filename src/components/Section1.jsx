import React from 'react'
import HeadDesc from './HeadDesc'
import PIC1 from '../assets/extraImg/smartphone(1).svg'
import PIC2 from '../assets/extraImg/Dashboard.svg'
import PIC3 from '../assets/extraImg/layout.svg'

function Section1() {
  return (
    <>
      <HeadDesc 
        head='We provide various kind of learning modules for you'
        desc='It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum.'
      />
      
      <div className='my-10 lg:my-20 px-[7.8125%] flex max-lg:flex-col justify-between max-lg:items-center'>
        <div className='flex flex-col justify-between max-lg:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl transition-all ease duration-100 hover:scale-[1.1] hover:bg-[#ffec0511] drop-shadow-[0_0_37px_#0000000D]'>
          <img src={PIC1} alt="pic1" />
          <div>
            <div className='text-2xl'>Learn Anything</div>
            <div>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content</div>
          </div>
        </div>
        <div className='flex flex-col justify-between max-lg:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl transition-all ease duration-100 hover:scale-[1.1] hover:bg-[#ffec0511] drop-shadow-[0_0_37px_#0000000D] max-lg:my-5'>
          <img src={PIC2} alt="pic1" />
          <div>
            <div className='text-2xl'>Learn Anything</div>
            <div>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content</div>
          </div>
        </div>
        <div className='flex flex-col justify-between max-lg:w-1/2 lg:w-1/4 bg-white p-4 rounded-xl transition-all ease duration-100 hover:scale-[1.1] hover:bg-[#ffec0511] drop-shadow-[0_0_37px_#0000000D]'>
          <img src={PIC3} alt="pic1" />
          <div>
            <div className='text-2xl'>Learn Anything</div>
            <div>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1