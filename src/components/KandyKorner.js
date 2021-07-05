import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import NavBar from './nav/NavBar'

// import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    deleteCandy = id => {
        console.log("hello")
        console.log(id)
        const newCandies = {}
        fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
        .then(c => c.json())
        .then(() => fetch("http://localhost:5002/candies"))
        .then(current => current.json())
        .then(candies => newCandies.candies = candies)
        .then(() => this.setState(newCandies))
    }

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
                    return <CandyList deleteCandy={this.deleteCandy} candies={this.state.candies} type={this.state.candyTypes}/>
                }} />
            </React.Fragment>
        )
    }
}

export default Kennel

