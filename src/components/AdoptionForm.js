import React, { Component } from 'react';
import Loading from './loading'
export default class Adoption extends Component {
  state = {
    pets: [],
    isLoading: true,
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/pets`)
      .then((res) => res.json())
      .then((data) => this.setState({ pets: data, isLoading: false })
      )
      // .then(this.state.pets.cats.filter(cat => cat === this.state.pets.cats[0]))
      .catch(error => console.log(error))
  }


  render() {
    // console.log('State', this.state.pets.cats)
    if (this.state.isLoading) return <Loading />;
    return (
      <div className="petColumns">
        <div className="petsList">
          {this.state.pets.cats.map((cat) => (
            <div key={cat.name}>
              <p>age: {cat.age}</p>
              <p>breed: {cat.breed}</p>
              <p>Description: {cat.description}</p>
              <p>gender: {cat.gender}</p>
              <img src={cat.imageURL} alt="pet"></img>
              <p>name: {cat.name}</p>
              <p>story: {cat.story}</p>
            </div>))}
        </div>
        <div className="petsList">
          {this.state.pets.dogs.map((dog) => (
            <div key={dog.name}>
              <p>age: {dog.age}</p>
              <p>breed: {dog.breed}</p>
              <p>Description: {dog.description}</p>
              <p>gender: {dog.gender}</p>
              <img src={dog.imageURL} alt="pet"></img>
              <p>name: {dog.name}</p>
              <p>story: {dog.story}</p>
            </div>))}
        </div>
      </div>
    )
  }
} 