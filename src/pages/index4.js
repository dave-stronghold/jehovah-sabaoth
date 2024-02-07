import React from 'react'
import Header4 from '../components/header/Header4'
import SolutionSection from '../components/home4/SolutionSection'
import About from '../components/home4/About'
import ServicesTabSection from '../components/home4/ServicesTabSection'
import VideoArea from '../components/home4/VideoArea'
import Testimonail from '../components/home4/Testimonail'
import CountryMapSection from '../components/home4/CountryMapSection'
import ClientSection from '../components/home4/ClientSection'
import Portfolio from '../components/home4/Portfolio'
import EventAndConfaranceSection from '../components/home4/EventAndConfaranceSection'
import People from '../components/home4/People'
import Contact from '../components/home4/Contact'
import Blog from '../components/home4/Blog'
import Footer2 from '../components/footer/Footer2'

const HomepageFour = () => {
  return (
    <>
     <Header4/> 
     <SolutionSection/>
     <About/>
     <EventAndConfaranceSection/>
     <ServicesTabSection/>
     <VideoArea/>
     <Testimonail/>
     <CountryMapSection/>
     <ClientSection/>
     <Portfolio/>
     <People/>
     <Contact/>
     <Blog/>
     <Footer2/>
    </>
  )
}

export default HomepageFour
