import React from 'react';
import PeopleItem from './PeopleItem';
import Loading from './loading'
export default class People extends React.Component {
  state = {
    submittedName: null,
    isLoading: null,
    error: null
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