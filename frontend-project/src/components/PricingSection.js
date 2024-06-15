import React, { useState } from 'react';


const pricingData = [
  {
    filter: "shaving",
    imgSrc: "../assets/images/pricing-1.jpg",
    title: "Hair Cutting & Fitting",
    text: "Clean & simple 30-40 minutes",
    price: "$89",
  },
  {
    filter: "shaving",
    imgSrc: "../assets/images/pricing-2.jpg",
    title: "Shaving & Facial",
    text: "Clean & simple 30-40 minutes",
    price: "$45",
  },
  {
    filter: "face-washing",
    imgSrc: "../assets/images/pricing-3.jpg",
    title: "Hair Color & Wash",
    text: "Clean & simple 30-40 minutes",
    price: "$35",
  },
  {
    filter: "body-treatments",
    imgSrc: "../assets/images/pricing-4.jpg",
    title: "Body Massage",
    text: "Clean & simple 30-40 minutes",
    price: "$56",
  },
  {
    filter: "beauty-spa",
    imgSrc: "../assets/images/pricing-5.jpg",
    title: "Beauty & Spa",
    text: "Clean & simple 30-40 minutes",
    price: "$27",
  },
  {
    filter: "face-washing",
    imgSrc: "../assets/images/pricing-6.jpg",
    title: "Facial & Face Wash",
    text: "Clean & simple 30-40 minutes",
    price: "$63",
  },
  {
    filter: "body-treatments",
    imgSrc: "../assets/images/pricing-7.jpg",
    title: "Backbone Massage",
    text: "Clean & simple 30-40 minutes",
    price: "$43",
  },
  {
    filter: "meditations",
    imgSrc: "../assets/images/pricing-8.jpg",
    title: "Meditation & Massage",
    text: "Clean & simple 30-40 minutes",
    price: "$74",
  },
];

const PricingSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing"
      style={{ backgroundImage: "url('./assets/images/pricing-bg.jpg')" }}>
      <div className="container">
        <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
        </p>
        <div className="pricing-tab-container">
          <ul className="tab-filter">
            <li>
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>
                <div className="btn-icon">
                  <i className="flaticon-beauty-salon" aria-hidden="true"></i>
                </div>
                <p className="btn-text">All Pricing</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter === 'beauty-spa' ? 'active' : ''}`} onClick={() => handleFilterClick('beauty-spa')}>
                <div className="btn-icon">
                  <i className="flaticon-relax" aria-hidden="true"></i>
                </div>
                <p className="btn-text">Beauty & Spa</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter === 'body-treatments' ? 'active' : ''}`} onClick={() => handleFilterClick('body-treatments')}>
                <div className="btn-icon">
                  <i className="flaticon-massage" aria-hidden="true"></i>
                </div>
                <p className="btn-text">Body Treatments</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter === 'face-washing' ? 'active' : ''}`} onClick={() => handleFilterClick('face-washing')}>
                <div className="btn-icon">
                  <i className="flaticon-spa" aria-hidden="true"></i>
                </div>
                <p className="btn-text">Face Washing</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter === 'meditations' ? 'active' : ''}`} onClick={() => handleFilterClick('meditations')}>
                <div className="btn-icon">
                  <i className="flaticon-yoga" aria-hidden="true"></i>
                </div>
                <p className="btn-text">Meditations</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter === 'shaving' ? 'active' : ''}`} onClick={() => handleFilterClick('shaving')}>
                <div className="btn-icon">
                  <i className="flaticon-razor-blade" aria-hidden="true"></i>
                </div>
                <p className="btn-text">Shaving</p>
              </button>
            </li>
          </ul>
          <ul className="grid-list">
            {pricingData.filter(item => activeFilter === 'all' || item.filter === activeFilter).map((item, index) => (
              <li key={index} data-filter={item.filter}>
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ '--width': '90px', '--height': '90px' }}>
                    <img src={item.imgSrc} width="90" height="90" alt={item.title} className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                  </div>
                  <data className="card-price" value={item.price}>{item.price}</data>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;