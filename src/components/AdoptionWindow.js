import React, { Component } from 'react'
import Loading from './loading'


export default class AdoptionWindow extends Component {
  state = {
    isLoading: true,
    pets: [],
    adoptCat: [],
    adoptDog: []
  }

  componentDidMount() {

    fetch(`http://localhost:8000/api/pets/dogs`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => this.setState({ adoptDog: data, isLoading: false })
      )
      .catch(error => console.log(error))


    fetch(`http://localhost:8000/api/pets/cats`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => this.setState({ adoptCat: data, isLoading: false })
      )
      .catch(error => console.log(error))

  }

  adoptDog() {
    fetch(`http://localhost:8000/api/pets/dogs`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        // console.log(this.state)
        let newVar = this.state.adoptDog;
        this.setState({ adoptDog: newVar })
        window.location.reload(false)
      })
      .catch(error => console.log(error))
  }



  adoptCat() {
    fetch(`http://localhost:8000/api/pets/cats`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        // console.log(this.state)
        let newVar = this.state.adoptCat;
        this.setState({ adoptCat: newVar })
        window.location.reload(false)
      })
      .catch(error => console.log(error))
  }

  render() {

    if (this.state.isLoading) return <Loading />;
    return (
      <div className="adoptionWindow">
        <section>
          <ul className="adoptThis">
            <li>name: {this.state.adoptCat.name}</li>
            <li>Age:{this.state.adoptCat.age} </li>
            <li>Breed:{this.state.adoptCat.breed}</li>
            <li>{this.state.adoptCat.description}</li>
            <li>Gender:{this.state.adoptCat.gender} </li>
            <img src={this.state.adoptCat.imageURL} alt="a cat"></img>
            <li>Story:{this.state.adoptCat.story} </li>
          </ul>
          <button onClick={() => this.adoptCat()}>Adopt this Cat</button>
        </section>

        <section>
          <ul className="adoptThis">
            <li>name: {this.state.adoptDog.name}</li>
            <li>Age:{this.state.adoptDog.age} </li>
            <li>Breed:{this.state.adoptDog.breed}</li>
            <li>{this.state.adoptDog.description}</li>
            <li>Gender:{this.state.adoptDog.gender} </li>
            <img src={this.state.adoptDog.imageURL} alt="a cat"></img>
            <li>Story:{this.state.adoptDog.story} </li>
          </ul>
          <button onClick={() => this.adoptDog()}>Adopt This Dog</button>
        </section>


      </div >

    )
  }
}