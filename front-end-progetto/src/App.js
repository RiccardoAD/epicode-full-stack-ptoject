import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Pricing from './Components/PricingSection';
import Gallery from './Components/Gallery';
// import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        {/* <Appointment /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;