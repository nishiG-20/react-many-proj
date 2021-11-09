import React, { Component } from "react"

export default class ReceiveStocks extends Component {
    state = {
        Products: this.props.Products,
        productInfo: {
            code: '',
            quantity: '',
            year: '',
            month: '',
            date: '',
        },
        Months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }

    handleChange = (e) => {
        const { currentTarget: input } = e
        let s1 = { ...this.state }
        s1.productInfo[input.name] = input.value
        this.setState(s1)
    }

    updateCodeAndQuantity = (code, quantity) => {
        let s1 = { ...this.state }
        let findIdx = s1.Products.findIndex(prod => prod.code === code)
        s1.Products[findIdx].quantity = s1.Products[findIdx].quantity + (+quantity)
        this.setState(s1)
    }


    validateForm = (code, quantity, year, month, date) => {
        if (code === '') {
            alert('Product Code is Required')
            return 0
        } else if (quantity === '') {
            alert('Enter The Quantity')
            return 0
        } else if (!Number(quantity)) {
            alert('Quantity Should be in Number')
            return 0
        } else if (year === '') {
            alert('Please Select Year')
            return 0
        } else if (month === '') {
            alert('Please Select Month')
            return 0
        } else if (date === '') {
            alert('Please Select Date')
            return 0
        } else {
            return 1
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { code, quantity, year, month, date } = this.state.productInfo
        if (this.validateForm(code, quantity, year, month, date)) {
            this.updateCodeAndQuantity(code, quantity)
            this.props.onHandleUpdateProductsArr(this.state.Products)
        }

    }

    makeYearArray = (startYear, endYear) => {
        let year = []
        while (startYear <= endYear) {
            year.push(startYear++)
        }
        return year
    }

    calculateNoOfDays = (year, month) => {
        let monthNum = this.state.Months.indexOf(month)
        let totalNumOfDays = new Date(year, monthNum + 1, 0).getDate()
        let daysArr = []
        for (let i = 1; i <= totalNumOfDays; i++) {
            daysArr.push(i)
        }
        return daysArr
    }

    render() {
        let { code, quantity, year, month, date } = this.state.productInfo
        let Months = this.state.Months
        let Years = this.makeYearArray(1900, 2025)
        let Days = this.calculateNoOfDays(year, month)


        return (
            <div className="container">

                <h4 className="my-3">Select the product whose stocks has been recevied</h4>
                <div className="form-group mb-2">
                    <select className="form-control bg-light" name="code" value={code} onChange={this.handleChange}>
                        <option disabled selected value="">
                            Select Product Code
                        </option>
                        {this.state.Products.map(prod => {
                            return (
                                <option value={prod.code}>
                                    {prod.code}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group mb-0 my-4">
                    <label>Stocks Received</label>
                    <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="row my-4">
                    <div className="col-3">
                        <div className="form-group mb-2">
                            <select className="form-control bg-light" name="year" value={year} onChange={this.handleChange}>
                                <option disabled selected value="">
                                    Select Year
                                </option>
                                {
                                    Years.map(yr => {
                                        return (
                                            <option value={yr}>
                                                {yr}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group mb-2">
                            <select className="form-control bg-light" name="month" value={month} onChange={this.handleChange}>
                                <option disabled selected value="">
                                    Select Months
                                </option>
                                {
                                    year ?
                                        Months.map(mnth => {
                                            return (
                                                <option value={mnth}>
                                                    {mnth}
                                                </option>
                                            )
                                        })
                                        : ""

                                }
                            </select>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group mb-2">
                            <select className="form-control bg-light" name="date" value={date} onChange={this.handleChange}>
                                <option disabled selected value="">
                                    Select Date
                                </option>
                                {
                                    year && month ?
                                        Days.map(mnth => {
                                            return (
                                                <option value={mnth}>
                                                    {mnth}
                                                </option>
                                            )
                                        })
                                        : ""
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                </div>

                <button className="btn btn-primary my-2" onClick={(e) => this.handleSubmit(e)}>Submit</button>

            </div>
        )
    }
}