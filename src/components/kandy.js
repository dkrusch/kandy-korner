import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import KandyKorner from "./KandyKorner"

import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <KandyKorner />
            </React.Fragment>
        )
    }
}

export default Kennel