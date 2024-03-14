import React from 'react'
import NavigationBar from '../header/NavigationBar'
import Sidebar from '../sidebar/Sidebar'
import Hero from '../hero/Hero'
import Footer from '../footer/Footer'



const Home = () => {
  return (
    <div>
           <Sidebar/>
       <NavigationBar/>
       <Hero/>
       <Footer/>
    </div>
  )
}

export default Home