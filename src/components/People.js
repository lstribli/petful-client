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
    ev.preventDefault()
    fetch(`http://localhost:8000/api/people`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => {
        if (res.error) return this.setState({ error: res.error })
      })

    fetch(`http://localhost:8000/api/people`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ people: data, isLoading: false })
      })
      .catch(error => console.log(error))
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div className="people-container">
        <div className="people-list">
          {this.generatePeopleList()}
        </div>
        <form onSubmit={(ev) => this.handleAddPerson(ev, this.state.submittedName)}>
          <label htmlFor="name">Enter Name</label>
          <input type="text" name="name" id="name" required onChange={(ev) => this.setState({ submittedName: ev.target.value })} />
          <button type="submit">Add to Queue</button>
        </form>
      </div>
    )
  }
}