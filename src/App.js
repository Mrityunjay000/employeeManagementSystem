import React, { Component } from 'react';
import './App.css';
//import Employee from './Employee/Employee'
import AddEmployee from './Buttons/AddEmployee'

class App extends Component {
  state = {
    nameEntered: '',
    ageEntered: '',
  }

  render() {

    const nameHandler = (event) => {
      this.setState({
        nameEntered: event.target.value
      })
    }

    const ageHandler = (event) => {
      this.setState({
        ageEntered: event.target.value
      })
    }

    return (
      <div>
        <h1 className='mainHeader'>Employee Management System</h1>
        <div className='input'>
            Name: <input type='text' onChange={nameHandler}/><br></br><br></br>
            Age: <input type='text' onChange={ageHandler}/><br></br><br></br>
        </div>
        <br></br>
        <AddEmployee
          name={this.state.nameEntered}
          age={this.state.ageEntered}
        ></AddEmployee>
      </div>
    );
  }
}

export default App;
