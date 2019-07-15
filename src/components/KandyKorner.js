import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import NavBar from './nav/NavBar'

// import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    // storeArray = [
    //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
    //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    // ]

    // employeeArray = [
    //     { id: 1, name: "Jessica Younker" },
    //     { id: 2, name: "Jordan Nelson" },
    //     { id: 3, name: "Zoe LeBlanc" },
    //     { id: 4, name: "Blaise Roberts" }
    // ]

    // candyTypeArray = [
    //     { id: 1, name: "Ooodles" },
    //     { id: 2, name: "Oack" },
    //     { id: 3, name: "Oangus" },
    //     { id: 4, name: "Oenley" }
    // ]

    // candyArray = [
    //     { id: 1, name: "Doodles", typeid: 1},
    //     { id: 2, name: "Jack", typeid: 1},
    //     { id: 3, name: "Angus", typeid: 2},
    //     { id: 4, name: "Henley", typeid: 3},
    //     { id: 5, name: "Derkins", typeid: 3},
    //     { id: 6, name: "Checkers", typeid: 4}
    // ]

    state = {
        stores: [],
        employees: [],
        candies: [],
        candyTypes: []
    }

    componentDidMount() {
        const newState = {}
        fetch("http://localhost:5002/stores")
        .then(a => a.json())
        .then(store => newState.stores = store)
        .then(() => fetch("http://localhost:5002/employees"))
        .then(e => e.json())
        .then(employee => newState.employees = employee)
        .then(() => fetch("http://localhost:5002/candies"))
        .then(c => c.json())
        .then(candy => newState.candies = candy)
        .then(() => fetch("http://localhost:5002/candyTypes"))
        .then(t => t.json())
        .then(type => newState.candyTypes = type)
        .then(() => console.log(newState))
        .then(() => this.setState(newState))
    }

    render()
    {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    console.log(this.state)
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} type={this.state.candyTypes}/>
                }} />
            </React.Fragment>
        )
    }
}

export default Kennel

