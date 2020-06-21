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
    fetch('http://localhost:8000/api/people')
      .then(people => {
        if (!people) return this.setState({ error: 'There are no people in line.' })
        return this.setState({ people })
      })
  }

  generatePeopleList() {
    const { people } = this.state
    if (people.length === 0) {
      return people.map(person => {
        return <PeopleItem key={person} name={person} />
      })
    }
    return <p>There is no one else in line!</p>
  }

  handleAddPerson(ev) {
    ev.preventDefault()
    fetch(`http://localhost:8000/api/people`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.submittedName)
    })
      .then(res => {
        if (res.error) return this.setState({ error: res.error })

      })
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <div className="people-container">
        <div className="people-list">
          {this.generatePeopleList()}
        </div>
        <form onSubmit={(ev) => this.handleAddPerson(ev)}>
          <label htmlFor="name">Enter Name</label>
          <input type="text" name="name" id="name" required placeholder="Enter full name..." onChange={(ev) => this.setState({ submittedName: ev.target.value })} />
          <button type="submit">Add to Queue</button>
        </form>
      </div>
    )
  }
}