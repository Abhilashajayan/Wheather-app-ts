import React from 'react'

const video : React.FC = () => {
  return (
    <div className='absolute inset-0 w-full h-full'>
   
    <video
      className='absolute inset-0 w-full h-full object-cover object-center'
      autoPlay
      muted
      loop
    >
     <source src='https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448143/mist_m7bxfh.mp4' type='video/mp4' />

    </video>
    <div className='relative bg-blue-500 w-screen h-screen bg-opacity-50 p-4 z-10'>
    </div>
    
  </div>
  )
}

export default video