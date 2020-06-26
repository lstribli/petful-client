import React from 'react';
import PeopleItem from './PeopleItem';
import Loading from './loading'
export default class People extends React.Component {
  state = {
    people: [],
    submittedName: null,
    isLoading: null,
    error: null
  }

  componentDidMount() {
    this.handleGetPeople();
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

  generatePeopleList() {
    const people = this.state.people
    if (people.length !== 0) {
      return people.map(person => {
        return <PeopleItem key={person} name={person} />
      })
    }
    return <p>There is no one else in line!</p>
  }

  handleAddPerson(ev, name) {
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
  handleAddPerson2(name) {
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
  handleDeletePerson() {
    fetch(`http://localhost:8000/api/people`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then()
  }

  handleDemo() {
    const step1 = () => {
      this.handleDeletePerson()
      this.handleGetPeople()
      this.props.adoptDog()
    }
    const step2 = (name) => {
      this.handleAddPerson2(name)
    }
    setTimeout(step1, 5000)
    setTimeout(step1, 10000)
    setTimeout(step1, 15000)
    setTimeout(step1, 20000)
    setTimeout(step2('John'), 25000)
    setTimeout(step2('Erica'), 30000)
    setTimeout(step2('Logan'), 35000)
    setTimeout(step2('Joseph'), 40000)
    setTimeout(step2('Michael'), 45000)
  }
  render() {
    // if (this.state.isLoading) return <Loading />;
    return (
      <div className="people-container">
        {/* <div className="people-list">
          {this.generatePeopleList()}
        </div>
        <form onSubmit={(ev) => {
          ev.preventDefault()
          this.handleAddPerson(ev, this.state.submittedName)
          this.handleDemo()
        }}>
          <label htmlFor="name">Enter Name</label>
          <input type="text" name="name" id="name" required placeholder="Enter full name..." onChange={(ev) => this.setState({ submittedName: ev.target.value })} />


          <button type="submit">Add to Queue</button>
        </form> */}
      </div>
    )
  }
}