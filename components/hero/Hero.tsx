import Image from 'next/image'
import React from 'react'
import titleImage from "../../assets/Image01.png"
import { Button } from '../ui/button'

export const Hero = () => {
  return (
    <div  className='Parent'>
        <div className='flex flex-col items-center'>
        <div className='mx-12 rounded-xl bg-black absolute'>
        <Image 
        src ={titleImage}
        alt ="Title Image"
        className='h-[400px] sm:h-[597px] object-cover opacity-55 '
        />
        </div>
      
        <div className='flex flex-col gap-y-4 relative h-[350px] sm:h-[597px] items-center justify-center'>
            <div className=' flex text-4xl sm:text-6xl text-center text-white  font-bold '>Shop Title</div>
            <div className='flex text-white text-center text-[10px] sm:text-[24px]'>Subheading with description of your shopping site</div>
            <div>
                <Button className='p-4 sm:p-6'>Button</Button>
            </div>
        </div>
        </div>
    </div>
  )
}
