import React, { Component } from 'react';



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
      .catch(error => console.log(error))
  }

  render() {
    // console.log('PROPS', this.state.pets.cats.map(cat => cat.name))
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <div>
        <ul className="petsList">
          {this.state.pets.cats.map((cat) => (
            <li key={cat.name}>
              <p>age: {cat.age}</p>
              <p>breed: {cat.breed}</p>
              <p>Description: {cat.description}</p>
              <p>gender: {cat.gender}</p>
              <p>imageUrl:{cat.imageURL}</p>
              <p>name: {cat.name}</p>
              <p>story: {cat.story}</p>
            </li>))}

        </ul>

      </div>
    )
  }
} 