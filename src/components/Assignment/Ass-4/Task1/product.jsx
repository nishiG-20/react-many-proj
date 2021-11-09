import React, { Component } from "react";

export default class Product extends Component {
    state = {
        products: this.props.products,

        fltrProd: {
            category: '',
            inStock: '',
            priceRange: ''
        },

        sortHd: -1,

        showBill: -1,

        billDashboard: {
            items: 0,
            quantity: 0,
            amount: 0
        },

        Bills: []
    };

    handleChange = (e) => {
        const { currentTarget: input } = e
        let s1 = { ...this.state }
        s1.fltrProd[input.name] = input.value
        this.setState(s1)
    }

    setSrtNum = (st) => {
        let s1 = { ...this.state }
        s1.sortHd = st
        this.setState(s1)
    }

    sortProducts = (products) => {
        let { sortHd } = this.state
        if (sortHd === 1) {
            products.sort((prod1, prod2) => prod1.code.localeCompare(prod2.code))
        } else if (sortHd === 2) {
            products.sort((prod1, prod2) => prod1.prod.localeCompare(prod2.prod))
        } else if (sortHd === 3) {
            products.sort((prod1, prod2) => prod1.category.localeCompare(prod2.category))
        } else if (sortHd === 4) {
            products.sort((prod1, prod2) => prod2.price - prod1.price)
        } else if (sortHd === 5) {
            products.sort((prod1, prod2) => prod1.instock.localeCompare(prod2.instock))
        }
    }

    cnvtStrToNum = (str, arr) => {
        let idx = str.indexOf('-')
        if (idx !== -1) {
            let firstNum = Number(str.substring(0, idx))
            let lastNum = Number(str.substring(idx + 1, str.length))
            return arr.filter(prod => prod.price >= firstNum && prod.price <= lastNum)
        } else {
            let syb = str[0]
            let orgNum = str.replace(syb, '')
            if (syb === '>') {
                return arr.filter(prod => prod.price > Number(orgNum))
            } else if (syb === '<') {
                return arr.filter(prod => prod.price < Number(orgNum))
            } else return arr
        }
    }

    //{ "code": "PEP221", "prod": "Pepsi", "price": 12, "instock": "Yes", "category": "Beverages" }

    addBill = (index) => {
        let s1 = { ...this.state }
        //Show Bill
        s1.showBill = 1
        //Find index of the Bill
        let findIdx = s1.Bills.findIndex(bl => bl.code === s1.products[index].code)
        if (findIdx !== -1) {
            //Update Dashboard
            s1.billDashboard.quantity++
            s1.billDashboard.amount += s1.Bills[findIdx].price
            //Update Bill
            s1.Bills[findIdx].Quantity++
            s1.Bills[findIdx].value = s1.Bills[findIdx].value + s1.Bills[findIdx].price
        } else {
            let newBill = {}
            newBill.code = s1.products[index].code
            newBill.prod = s1.products[index].prod
            newBill.price = s1.products[index].price
            newBill.Quantity = 1
            newBill.value = s1.products[index].price
            s1.Bills.push(newBill)

            //update Dashboard

            s1.billDashboard.items++
            s1.billDashboard.quantity++
            s1.billDashboard.amount += s1.products[index].price
        }
        this.setState(s1)
    }

    closeCurrentBill = () => {
        let s1 = { ...this.state }
        alert('Close the Current Bill')
        s1.showBill = -1
        s1.Bills = []
        s1.billDashboard.items = 0
        s1.billDashboard.quantity = 0
        s1.billDashboard.amount = 0
        this.setState(s1)
    }

    cancelItems = (index) => {
        let s1 = { ...this.state }
        s1.billDashboard.items = s1.billDashboard.items - 1
        s1.billDashboard.quantity = s1.billDashboard.quantity - 1
        s1.billDashboard.amount = s1.billDashboard.amount - s1.Bills[index].price
        s1.Bills.splice(index, 1)
        this.setState(s1)
    }

    incrementDetails = (index) => {
        let s1 = { ...this.state }
        s1.Bills[index].Quantity = s1.Bills[index].Quantity + 1
        s1.Bills[index].value = s1.Bills[index].value + s1.Bills[index].price
        s1.billDashboard.quantity = s1.billDashboard.quantity + 1
        s1.billDashboard.amount = s1.billDashboard.amount + s1.Bills[index].price
        this.setState(s1)
    }

    decrementDetails = (index) => {
        let s1 = { ...this.state }
        if (s1.Bills[index].Quantity - 1 === 0) {
            this.cancelItems(index)
        } else {
            s1.Bills[index].Quantity = s1.Bills[index].Quantity - 1
            s1.Bills[index].value = s1.Bills[index].value - s1.Bills[index].price
            s1.billDashboard.quantity = s1.billDashboard.quantity - 1
            s1.billDashboard.amount = s1.billDashboard.amount - s1.Bills[index].price
        }
        this.setState(s1)
    }



    render() {
        let { category, inStock, priceRange } = this.state.fltrProd

        let { products, sortHd } = this.state

        let { items, quantity, amount } = this.state.billDashboard

        this.sortProducts(products)

        let products1 = category ? products.filter(prod => prod.category === category) : products

        let products2 = inStock ? products1.filter(prod => prod.instock === inStock) : products1

        let products3 = priceRange ? this.cnvtStrToNum(priceRange, products2) : products2

        return (
            <React.Fragment>
                <h3 className="m-3 ">Details of Current Bill</h3>
                <p className="mx-3 mb-0">Items:{items},Quantity:{quantity},Amount:{amount}</p>
                {this.state.showBill === 1
                    ? <React.Fragment>
                        {this.state.Bills.map((bl, index) => {
                            let { code, prod, price, Quantity, value } = bl
                            return (
                                <React.Fragment>
                                    <div className="row mx-3 border bg-light">
                                        <div className="col-6">
                                            {code} {prod} Price:{price} Quantity:{Quantity} Value:{value}
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-primary mx-1" onClick={() => this.incrementDetails(index)}>+</button>
                                            <button className="btn btn-warning mx-1" onClick={() => this.decrementDetails(index)}>-</button>
                                            <button className="btn btn-danger" onClick={() => this.cancelItems(index)}>X</button>
                                        </div>
                                        <div className="col">

                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <button className="btn btn-primary my-1 mx-4" onClick={() => this.closeCurrentBill()}>Close Bill</button>
                    </React.Fragment>
                    : ''
                }
                <h3 className="text-center">Product List</h3>
                <div className="row">
                    <div className="col"><h6>Filter Products By</h6></div>
                    <div className="col">
                        <select className="form-control bg-light" name="category" value={category} onChange={this.handleChange}>
                            <option selected value="">
                                Select Category
                            </option>
                            <option value="Beverages">
                                Beverages
                            </option>
                            <option value="Chocolates">
                                Chocolates
                            </option>
                            <option value="Biscuits">
                                Biscuits
                            </option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control bg-light" name="inStock" value={inStock} onChange={this.handleChange}>
                            <option selected value="">
                                Select In Stock
                            </option>
                            <option value="Yes">
                                Yes
                            </option>
                            <option value="No">
                                No
                            </option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control bg-light" name="priceRange" value={priceRange} onChange={this.handleChange}>
                            <option selected value="">
                                Select Price Rage
                            </option>
                            <option value="<10">
                                {"<"}10
                            </option>
                            <option value="10-20">
                                10-20
                            </option>
                            <option value=">20">
                                {">"}20
                            </option>
                        </select>
                    </div>
                </div>

                <div className="row bg-dark text-white">
                    <div className="col chngHdStyle" onClick={() => this.setSrtNum(1)}>{sortHd === 1 ? 'Code(X)' : 'Code'}</div>
                    <div className="col chngHdStyle" onClick={() => this.setSrtNum(2)}>{sortHd === 2 ? 'Product(X)' : 'Product'}</div>
                    <div className="col chngHdStyle" onClick={() => this.setSrtNum(3)}>{sortHd === 3 ? 'Category(X)' : 'Category'}</div>
                    <div className="col chngHdStyle" onClick={() => this.setSrtNum(4)}>{sortHd === 4 ? 'Price(X)' : 'Price'}</div>
                    <div className="col chngHdStyle" onClick={() => this.setSrtNum(5)}>{sortHd === 5 ? 'In Stock(X)' : 'In Stock'}</div>
                    <div className="col chngHdStyle"></div>
                </div>

                {
                    products3.map((prodt, index) => {
                        let { code, prod, price, instock, category } = prodt
                        return (
                            <React.Fragment>
                                <div className="row border">
                                    <div className="col bg-light">{code}</div>
                                    <div className="col bg-light">{prod}</div>
                                    <div className="col bg-light">{category}</div>
                                    <div className="col bg-light">{price}</div>
                                    <div className="col bg-light">{instock}</div>
                                    <div className="col bg-light">
                                        <button type="button" className="btn btn-secondary" onClick={() => this.addBill(index)}>
                                            Add To Bill
                                        </button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
