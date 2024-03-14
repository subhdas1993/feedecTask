import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import LOGO from '../assets/extraImg/Group1758.svg'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='flex justify-center max-lg:bg-[#2626DB43]'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <img src={LOGO} alt="logo" />
          </div>
          <div className='w-1/2 font-[Poppins] font-normal max-lg:relative static'>
            <button className='lg:hidden float-right relative z-10 text-black' onClick={toggleDrawer}>
              {isOpen ? (<><IoCloseSharp size={30} /></>) : (<><FaBars size={30} /></>)}
            </button>
            <div className={`text-[#BCBCBC] lg:w-full max-lg:h-[90svh] flex max-lg:flex-col max-lg:justify-evenly justify-between max-lg:items-end items-center max-lg:absolute transition-all ease-in-out duration-500 bg-transparent max-lg:bg-[#FFFFFF90] max-lg:pr-3 ${isOpen ? 'right-[-10%] max-lg:w-[90vw]' : 'right-[-110%] max-lg:w-0'}`}>
              <div className='optStyle'>Home</div>
              <div className='optStyle'>Services US</div>
              <div className='optStyle'>Why Us</div>
              <div className='optStyle'>Our Goals</div>
              <div><button className='bg-[#ffec05] px-4 py-2 text-[#333] rounded-3xl'>Contact Us</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar