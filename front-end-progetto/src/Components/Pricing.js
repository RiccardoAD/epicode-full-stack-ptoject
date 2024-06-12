import React from 'react';
import { IonIcon } from '@ionic/react';

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$25 / month',
    features: ['Beard Shaving', 'Face Masking', 'Face Massage', 'Hair Cut']
  },
  {
    title: 'Standard Plan',
    price: '$50 / month',
    features: ['Beard Shaving', 'Face Masking', 'Face Massage', 'Hair Cut', 'Hair Color']
  }
];

const Pricing = () => (
  <section className="section pricing" id="pricing" aria-label="pricing">
    <div className="container">
      <h2 className="h2 section-title text-center">Pricing Plan</h2>
      <p className="section-text text-center">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
      <ul className="grid-list">
        {pricingPlans.map((plan, index) => (
          <li key={index}>
            <div className="pricing-card">
              <h3 className="h3 card-title">{plan.title}</h3>
              <ul className="card-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="card-item">
                    <IonIcon name="checkmark-circle" aria-hidden="true" />
                    <p className="card-text">{feature}</p>
                  </li>
                ))}
              </ul>
              <p className="card-price"><span>{plan.price}</span></p>
              <a href="#" className="btn has-before">
                <span className="span">Choose Plan</span>
                <IonIcon name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Pricing;