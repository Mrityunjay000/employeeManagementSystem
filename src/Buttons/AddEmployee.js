import React, {Component} from 'react'
import './AddEmployee.css'
import Employee from '../Employee/Employee'

class AddEmployee extends Component{
    state = {
        data: []
    }
    
    render() {
        let resp = null
        resp = (
            this.state.data.map( (datum, idx) => {
                return <Employee 
                key = {datum.id} 
                name = {datum.name} 
                age = {datum.age} 
                click = {() => deleteEmployeeHandler(idx)} />
                }
            )
        );
        
        const updateEmployees = () => {
            this.setState({
                data: [
                    ...this.state.data,
                    {id: new Date(), name: this.props.name, age: this.props.age}
                ]
            })
        }

        const deleteEmployeeHandler = (index) => {
            const newData = [...this.state.data]
            newData.splice(index, 1)
            this.setState({
                data: newData
            })
        }
        
        return(
            <div>
                <button className='empBtn' onClick={updateEmployees}>Add Employee</button>
                {resp}
            </div>
            
        );
    }
}

export default AddEmployee;