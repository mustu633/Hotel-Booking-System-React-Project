import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Footer from '../../common/Footer/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <HomeAbout />
    <DestinationHome />
    <Footer />
    </>
  )
}

export default Home