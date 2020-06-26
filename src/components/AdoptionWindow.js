import React, { Component } from 'react'
import People from './People';
import Loading from './loading';
import PeopleItem from './PeopleItem';
export default class AdoptionWindow extends Component {
  state = {
    isLoading: true,
    people: [],
    pets: [],
    adoptCat: [],
    adoptDog: [],
    error: null
  }

  componentDidMount() {

    fetch(`http://localhost:8000/api/people`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ people: data, isLoading: false })
      })
      .catch(error => console.log(error))


    fetch(`http://localhost:8000/api/pets/dogs`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) this.setState({ error: 'There are no more dogs to adopt!' })
        this.setState({ adoptDog: data, isLoading: false })
      })
      .catch(error => console.log(error))


    fetch(`http://localhost:8000/api/pets/cats`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) this.setState({ error: 'There are no more cats to adopt!' })
        this.setState({ adoptCat: data, isLoading: false })
      })
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
        let newVar = this.state.adoptCat;
        this.setState({ adoptCat: newVar })
        window.location.reload(false)
      })
      .catch(error => console.log(error))
  }

  generatePeopleList() {
    const people = this.state.people
    if (people.length !== 0) {
      return people.map(person => {
        return <PeopleItem key={person} name={person} />
      })
    }
    return <p>There is no one else in line!</p>
  }
  
  handleAddPerson(name) {
    fetch(`http://localhost:8000/api/people`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => {
        if (res.error) return this.setState({ error: res.error })
      })
    this.handleGetPeople()
  }

  handleGetPeople() {
    fetch(`http://localhost:8000/api/people`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ people: data, isLoading: false })
      })
      .catch(error => console.log(error))
  }

  step2 = (name) => {
    this.handleAddPerson2(name)
  }
  
  step1 = (ev) => {
    ev.preventDefault();
    this.handleDeletePerson()
    // this.handleGetPeople()
    this.adoptDog()
    console.log('we did the thing')
  }

  handleDemo(ev) {
    ev.preventDefault();
    if (this.state.submittedName !== this.state.people[0]) {
      this.interval = setInterval(this.step1(ev), 5000)
    }
    if (this.state.submittedName === this.state.people[0]) {
      clearInterval(this.interval)
    }
  }

  handleDeletePerson() {
    fetch(`http://localhost:8000/api/people`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then()
  }
  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <section className="adoptionPage">
        <div className="adoptionWindow-container">
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
              {
                (this.state.submittedName === this.state.people[0]) && <button onClick={() => this.adoptCat()}>Adopt this Cat</button>
              }

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
              {
                (this.state.submittedName === this.state.people[0]) && <button onClick={() => this.adoptDog()}>Adopt This Dog</button>
              }
            </section>
          </div>
          <div className="people-container">
            <People adoptDog={this.adoptDog} handleDemo={this.handleDemo}/>
          </div>
        </div >
        <div className="people-container">
          <div className="people-list">
            {this.generatePeopleList()}
          </div>


          <form onSubmit={(ev) => {
            ev.preventDefault()
            this.handleAddPerson(ev, this.state.submittedName)
            this.handleDemo(ev, this.state.submittedName)
          }}>
            <label htmlFor="name">Enter Name</label>
            <input type="text" name="name" id="name" required placeholder="Enter full name..." onChange={(ev) => this.setState({ submittedName: ev.target.value })} />


            <button type="submit">Add to Queue</button>
          </form>
        </div>
      </section>

    )
  }
}