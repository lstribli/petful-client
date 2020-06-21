import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from './loading'
export default class LandingPage extends Component {

  render() {
    return (
      <div>landingPage
        <Link to='/adoption'>
          <button>
            pets
      </button>
        </Link>
      </div>


    )
  }
}