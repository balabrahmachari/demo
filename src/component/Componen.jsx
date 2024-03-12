import React from 'react'

const Componen = () => {
  return (
    <>
      <div className='flex justify-center hover:cursor-pointer'><h1>balu</h1></div>
      <div className='h-[30vh] w-full md:flex'>
      <div className='md:w-[33.3%] h-[50vh] bg-black w-full'></div>
      <div className='md:w-[33.4%] h-[50vh] bg-red-500 w-full'></div>
      <div className='md:w-[33.3%] h-[50vh] bg-slate-600 mb-11 w-full'></div>
      </div>
      <div className='h-[30vh] w-full mt-32 md:flex bg-yellow-400'></div>
      <div className='h-[30vh] w-full md:flex bg-orange-400'></div>
      <div className='h-[10vh] w-full md:flex bg-green-400'></div>

      </>
      
  )
}

export default Componen