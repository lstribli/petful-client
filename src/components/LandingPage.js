import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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