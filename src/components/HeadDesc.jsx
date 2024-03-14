import React from 'react'

function HeadDesc({head,desc}) {
  return (
    <>
      <div className='px-[30%] text-xl lg:text-4xl text-center font-bold font-[Poppins]'>
        {head}
      </div>
      <div className='mt-4 px-[10%] lg:px-[30%] text-sm lg:text-md text-center font-[Roboto] text-[#707070]'>
        {desc}
      </div>
    </>
  )
}

export default HeadDesc