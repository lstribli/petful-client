import React, { Component } from 'react'


export default class AdoptionWindow extends Component {
  state = {
    pets: [],
    isLoading: true,
    adoptCat: [],
    adoptDog: []
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/pets`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => this.setState({ pets: data, isLoading: false })
      )
      .catch(error => console.log(error))


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
    })
      .then((res) => console.log(res))
      .catch(error => console.log(error))
  }

  adoptCat() {
    fetch(`http://localhost:8000/api/pets/cats`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => console.log(res))
      .catch(error => console.log(error))
  }





  render() {

    if (this.state.isLoading) return <div>Loading...</div>;
    return (

      <div >

        <section>
          {this.state.adoptCat.name}
          {this.state.adoptCat.age}
          {this.state.adoptCat.breed}
          {this.state.adoptCat.description}
          {this.state.adoptCat.gender}
          {this.state.adoptCat.imageURL}
          {this.state.adoptCat.story}
          <button onClick={this.adoptCat}>Adopt this Cat</button>
        </section>
        <section>
          {this.state.adoptDog.name}
          {this.state.adoptDog.age}
          {this.state.adoptDog.breed}
          {this.state.adoptDog.description}
          {this.state.adoptDog.gender}
          {this.state.adoptDog.imageURL}
          {this.state.adoptDog.story}
          <button onClick={this.adoptDog}>Adopt This Dog</button>
        </section>


      </div >

    )
  }
}