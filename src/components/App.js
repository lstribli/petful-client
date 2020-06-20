import React from 'react';
import Adoption from './Adoption';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component {

  render() {

    return (
      <div className='App'>
        <section className="adoption">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/adoption' component={Adoption} />
          </Switch>
        </section>
      </div>
    )
  }
}