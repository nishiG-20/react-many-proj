import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        < Link className="navbar-brand" to="/emp">MyCompany</ Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    < Link className="nav-link" to="/emp">
                                        All
                                    </ Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={`/emps/${'New Delhi'}`}>
                                        New Delhi
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={`/emps/${'Noida'}`}>
                                        Noida
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}