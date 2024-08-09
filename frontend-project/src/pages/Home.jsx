import React from 'react';
// import Header from '../components/Header';
import Hero from '../components/Hero';
 import About from '../components/About';
 import Services from '../components/Services';
import Pricing from '../components/PricingSection';
 import Gallery from '../components/Gallery';
//  import Appointment from './Components/Appointment';
import '../asset/style.css'
 
 
 const Home = () => {
   return (
    <div>
      {/* <Header /> */}
       
         <Hero />
         <About />
         <Services />
         <Pricing />
         <Gallery />
         {/* <Appointment /> */}
       
     </div>
  );
 };

 export default Home;