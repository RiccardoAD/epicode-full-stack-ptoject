import React from 'react';
// import './Gallery.css';
const Gallery = () => {
    const galleryItems = [
      {
        imgSrc: "./assets/images/gallery-1.jpg",
        altText: "Hair Cutting",
        title: "Hair Cutting",
        text: "Barbers & Salon Services",
      },
      {
        imgSrc: "./assets/images/gallery-2.jpg",
        altText: "Hair Cutting",
        title: "Hair Cutting",
        text: "Barbers & Salon Services",
      },
      {
        imgSrc: "./assets/images/gallery-3.jpg",
        altText: "Hair Cutting",
        title: "Hair Cutting",
        text: "Barbers & Salon Services",
      },
      {
        imgSrc: "./assets/images/gallery-4.jpg",
        altText: "Hair Cutting",
        title: "Hair Cutting",
        text: "Barbers & Salon Services",
      },
    ];
  
    return (
      <section className="section gallery" id="gallery" aria-label="photo gallery">
        <div className="container">
          <div className="title-wrapper">
            <div>
              <h2 className="h2 section-title">Latest Photo Gallery</h2>
              <p className="section-text">
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
              </p>
            </div>
            <a href="#" className="btn has-before">
              <span className="span">Explore More Gallery</span>
              
            </a>
          </div>
          <ul className="grid-list">
            {galleryItems.map((item, index) => (
              <li key={index}>
                <div className="gallery-card">
                  <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                    <img src={item.imgSrc} width="422" height="550" loading="lazy" alt={item.altText} className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                    <a href="#" className="card-btn" aria-label="Read more">
                      
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Gallery;