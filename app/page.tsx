
import { Footer } from '@/components/Footer/footer'
import { LowerProducts } from '@/components/LowerProducts/Products'
import { UpperProducts } from '@/components/UpperProducts/Products'
import { Hero } from '@/components/hero/Hero'
import { NavBar } from '@/components/navBar/NavBar'
import React from 'react'



const page = () => {
  return (
    <main>
     <NavBar />
     <Hero/>
     <UpperProducts/>
     <LowerProducts/>
     <Footer />
    </main>
  )
}

export default page