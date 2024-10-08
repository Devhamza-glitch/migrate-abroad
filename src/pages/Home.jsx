import React from 'react'
import HomeBanner from "../components/home/homebanner"
import Services from '../components/home/services'
import Timeline from "../components/home/timeline"
import Carousel from "../components/home/carousel"
import CategoryCards from '../components/home/category';
import Media from "../components/home/media"
import IndusriesWEServe from "../components/home/industries";
const Home = () => {
  return (<>
  <Carousel/>
   <CategoryCards/>
    
  <HomeBanner/>
  <Timeline/>
  
  <Services/>
  <IndusriesWEServe/>
<Media/>
   
  
  </>
  )
}

export default Home