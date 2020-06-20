import React from 'react';
import AdoptionWindow from './AdoptionWindow';
import AdoptionForm from './AdoptionForm';

export default class Adoption extends React.Component {
  
  render() {
    return (
      <div className="adoption-container">
        <AdoptionWindow />
        <AdoptionForm />
      </div>
    )
  }
}