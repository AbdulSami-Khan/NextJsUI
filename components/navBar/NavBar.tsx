import React from 'react'
import { Button } from '../ui/button'
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-12'>
        <div className='text-[16px] font-medium'>Site Name</div>
        <div className='h-[16px] sm:hidden'>
            <RxHamburgerMenu />
        </div>
        <div className='hidden sm:flex gap-x-4'>
            <div>
                <Button className='text-[16px]' variant={'link'}>page</Button>
            </div>
            <div>
                <Button className='text-[16px]' variant={'link'}>page</Button>
            </div>
            <div>
                <Button className='text-[16px]' variant={'link'}>page</Button>
            </div>
            <div>
                <Button className='text-[16px] ml-2' variant={'default'}>Button</Button>
            </div>
        </div>
    </div>
  )
}
