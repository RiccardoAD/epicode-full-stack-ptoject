import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Pricing from './Pricing';
import Gallery from './Gallery';
import Appointment from './Appointment';
import Footer from './Footer';

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
        <Appointment />
      </main>
      <Footer />
    </div>
  );
};

export default App;