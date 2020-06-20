import React from 'react';
import Adoption from './AdoptionForm'
import LandingPage from '../components/LandingPage'
import { Switch, Route } from 'react-router-dom';
import AdoptionWindow from './AdoptionWindow';
export default class App extends React.Component {

  render() {

    return (
      <div className='App'>
        <div>
          <h1>Sup</h1>
          <section className="adoption">



          </section>
        </div>

        <main>
          <LandingPage />
          <AdoptionWindow />
          <Adoption />

        </main>

      </div>
    )
  }
}