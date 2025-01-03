import React from 'react'
import HeroSection from './components/HeroSection'
import BrandSection from './components/brand/BrandSection'
import CeramicsSection from './components/ceramics/CeramicsSection'
import Products from './components/Products'
import SignUp from './components/SignUp'
import FeaturesSection from './components/Feature'


function Home() {
  return (
    <main className=''>
      <HeroSection/> 
      <BrandSection/>
      <CeramicsSection/>
      <Products/>
      <SignUp/>
      <FeaturesSection/>
    </main>
  )
}

export default Home