import React, { Component } from "react"
import { Link } from "react-router-dom"
import queryString from 'query-string'
import LeftPanelOptions from './leftPanelOptions'

export default class ShowEmployee extends Component {

    state = {}

    render() {
        let { Data } = this.props
        let { city } = this.props.match.params

        let queryParams = queryString.parse(this.props.location.search)
        

        //   Filter The Data for City
        let Data2 = city ? Data.filter(dt => dt.location === city) : Data

        return (
            <div className="fluid-container">
                <div className="row">
                    <div className="col-3">
                        {/* <LeftPanelOptions
                            allOptions={allOptions}
                            options={queryParams}
                            onOptionChange={this.handleOptionChange}
                        /> */}
                    </div>
                    <div className="col-9">
                        <h3 className="text-center">Welcome to Employee Portal</h3>
                        <h5>You Have Chosen</h5>
                        <span className="fs-6">Location : {city ? `${city}` : 'All'}</span>
                        <br />
                        <span className="fs-6">Department : All</span>
                        <br />
                        <span className="fs-6">Designation : All</span>
                        <br />
                        <br />
                        <span className="fs-6">The Number of Employees matching the option : {Data2.length}</span>
                        <br />
                        <div className="row">
                            {
                                Data2.map(dt => {
                                    let { name, department, designation, salary, email, mobile, location } = dt
                                    return (
                                        <div className="col-6 border bg-light">
                                            <p className="fs-4">Name:{name}</p>
                                            <p className="">Email:{email}</p>
                                            <p className="">Mobile:{mobile}</p>
                                            <p className="">Location:{location}</p>
                                            <p className="">Department:{department}</p>
                                            <p className="">Designation:{designation}</p>
                                            <p className="">Salary:{salary}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <Link>Prev</Link>
                            </div>
                            <div className="col-8">
                            </div>
                            <div className="col-2">
                                <Link>Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}