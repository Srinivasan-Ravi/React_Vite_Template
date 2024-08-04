import { FacebookIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
          <div className='w-full h-[8vh] flex flex-row justify-center items-center border-t-2 border-primary'>
          <div className='h-full w-3/4 flex justify-center items-center text-2xl font-bold text-primary'>
           ©️ iamneo.ai 2024</div>
          <div className='h-full w-3/4 flex flex-row justify-center items-center text-2xl font-bold text-primary gap-6'>
           <a href='google.com' target='_blank'>
            <FacebookIcon className='h-6 w-6'/>
           </a>
           <a href='google.com' target='blank'>
            <TwitterIcon className='h-6 w-6'/>
           </a>
           </div>
          </div>
    </div>
  )
}

export default Footer