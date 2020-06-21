import React, { Component } from 'react';
import PetItem from './PetItem';
import Loading from './loading'
export default class Adoption extends Component {
  state = {
    pets: [],
    isLoading: true,
    error: null
  }
  componentDidMount() {
    fetch(`http://localhost:8000/api/pets`)
      .then((res) => res.json())
      .then((data) => {
        data.cats.shift()
        data.dogs.shift()
        this.setState({ pets: data, isLoading: false })
      })
      // .then(this.state.pets.cats.filter(cat => cat === this.state.pets.cats[0]))
      .catch(error => console.log(error))
  }

  generateCatItems() {
    return this.state.pets.cats.map((cat) => {
      return <PetItem key={cat.name} age={cat.age} breed={cat.breed} description={cat.description} gender={cat.gender} imgUrl={cat.imageURL} name={cat.name} story={cat.story} />
    })
  }

  generateDogItems() {
    return this.state.pets.dogs.map(dog => {
      return <PetItem key={dog.name} age={dog.age} breed={dog.breed} description={dog.description} gender={dog.gender} imgUrl={dog.imageURL} name={dog.name} story={dog.story} />
    })
  }

  render() {
    // console.log('State', this.state.pets.cats)
    if (this.state.isLoading) return <Loading />;
    return (
      <div className="petColumns">
        <div className="petsList">
          {this.generateCatItems()}
        </div>
        <div className="petsList">
          {this.generateDogItems()}
        </div>
      </div>
    )
  }
} 