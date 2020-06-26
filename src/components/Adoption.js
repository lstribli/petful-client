import React from 'react';
import AdoptionWindow from './AdoptionWindow';
import AdoptionForm from './AdoptionForm';

export default class Adoption extends React.Component {
  state = {

  }
  render() {
    return (
      <div className="adoption-container">
        <AdoptionWindow theState={this.state} />
        <AdoptionForm theState={this.state} />
      </div>
    )
  }
}