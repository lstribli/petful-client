import React from 'react';
import AdoptionWindow from './AdoptionWindow';
import AdoptionForm from './AdoptionForm';

export default class Adoption extends React.Component {
  
  render() {
    return (
      <div className="adoption-container">
        <header className="adoption-header">
          <h2>Want to Adopt?</h2>
          <p>
            We work on a first come first serve basis, for both the adoptors and adoptees. Enter your next to be next in line
            and when your name is up, we'll show you the next dogs or cats available for adoption!
          </p>
        </header>
        <AdoptionWindow />
        <AdoptionForm />
      </div>
    )
  }
}