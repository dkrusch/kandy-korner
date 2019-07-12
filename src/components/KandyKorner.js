import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreList from './stores/StoreList'
import EmployeeList from './employees/EmployeeList'
import CandyList from './candies/CandyList'
import NavBar from './nav/NavBar'

// import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    storeArray = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    employeeArray = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    candyTypeArray = [
        { id: 1, name: "Ooodles" },
        { id: 2, name: "Oack" },
        { id: 3, name: "Oangus" },
        { id: 4, name: "Oenley" }
    ]

    candyArray = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }

    render()
    {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
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

