import React, { Component } from 'react'
import './Employee.css'

class Employee extends Component{
    state = {
        //id: this.props.key,
        name: this.props.name,
        age: this.props.age
    }
    render(){
        return (
            <div className='employee' onClick={this.props.click}>

                <h3> Name: {this.state.name}</h3> 
                <h3>Age: {this.state.age} </h3>

            </div>
        );
    }
}

export default Employee
