import React from 'react'
import LOGO from '../assets/extraImg/Group1.svg'
import SM1 from '../assets/extraImg/Group45.svg'
import SM2 from '../assets/extraImg/Group46.svg'
import SM3 from '../assets/extraImg/Group47.svg'
import SM4 from '../assets/extraImg/Group48.svg'

function Footer() {
  return (
    <>
      <div className='lg:hidden w-5/6 p-8 rounded-xl bg-[#333697] mx-auto mt-10 text-white font-[Poppins] flex items-center'>
        <div className='w-1/2'>
          <div className='font-bold text-3xl'>Contact Us!</div>
          <div className='text-sm'>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</div>
        </div>
        <div className='w-1/2'>
          <form className='w-full bg-white p-3 rounded-full flex justify-between'>
            <input type="text" className='text-black px-2 outline-0 w-3/4' placeholder='Email'/>
            <button className='bg-[#ffec05] px-4 py-2 text-[#333] rounded-3xl'>Send</button>
          </form>
        </div>
      </div>
      <div className='mt-10 lg:mt-20 px-[7.8125%] bg-[#EFEFFE] relative'>
        <div className='hidden lg:block lg:w-1/2 p-8 rounded-xl bg-[#333697] absolute bottom-[80%] left-[25%] justify-between text-white font-[Poppins]'>
          <div className='w-1/2 float-left'>
            <div className='font-bold text-3xl'>Contact Us!</div>
            <div className='text-sm'>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</div>
          </div>
          <div className='w-1/2 float-right mt-4'>
            <form className='w-full bg-white p-3 rounded-full flex justify-between'>
              <input type="text" className='text-black px-2 outline-0' placeholder='Email'/>
              <button className='bg-[#ffec05] px-4 py-2 text-[#333] rounded-3xl'>Send</button>
            </form>
          </div>
        </div>

        <div className='pt-10 lg:pt-20 grid justify-between max-lg:grid-rows-2 max-lg:grid-cols-3 lg:grid-rows-1 lg:grid-cols-4 gap-6'>
          <div className='w-1/2 flex flex-col'>
            <div className='flex items-center'>
              <img src={LOGO} alt="logo" className='w-1/3' />
              <h1 className='font-semibold'>Learning Exp.</h1>
            </div>
            <div className='flex justify-between items-center'>
              <img src={SM1} alt="facebook" className='scale-75' />
              <img src={SM2} alt="pinterest" className='scale-75' />
              <img src={SM3} alt="linkedin" className='scale-75' />
              <img src={SM4} alt="twitter" className='scale-75' />
            </div>
          </div>
          <div className='w-2/3 lg:w-1/2 max-lg:justify-self-end lg:justify-self-center font-[Poppins]'>
            <div className='font-semibold'>Links</div>
            <ul className='font-medium text-[#8a8a8a]'>
              <li>Home</li>
              <li>Pricing</li>
              <li>Download</li>
              <li>About</li>
              <li>Service</li>
            </ul>
          </div>
          <div className='w-1/2 max-lg:justify-self-end lg:justify-self-center font-[Poppins]'>
            <div className='font-semibold'>Support</div>
            <ul className='font-medium text-[#8a8a8a]'>
              <li>FAQ</li>
              <li>How it</li>
              <li>Features</li>
              <li>Contact</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className='w-2/3 max-lg:col-start-2 max-lg:col-span-1 justify-self-center lg:justify-self-end font-[Poppins]'>
            <div className='font-semibold'>Contact Us</div>
            <ul className='font-medium text-[#8a8a8a]'>
              <li>+880 12345678</li>
              <li>youremail@gmail.com</li>
              <li>Pune City</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center text-[1.2vmax] lg:text-[0.8vmax] py-3 lg:py-10'>
          <div>Copyright & Design By @Learning Exp.</div>
          <div className='flex justify-between items-center w-1/5'>
            <div>Terms of use</div>
            <div>|</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer