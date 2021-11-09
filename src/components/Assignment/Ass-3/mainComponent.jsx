import React, { Component } from "react"
import Navbar from './navbar'
import AddNewProduct from "./addNewProd"
import ReceiveStocks from "./receiveStocks"

export default class MainComponent extends Component {
    state = {
        Brands: [
            "Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys", "P&G", "Colgate", "Parachute",
            "Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"
        ],
        Products: [
            {
                code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",
                specialOffer: false, limitedStock: false, quantity: 25
            },
            {
                code: "MAGG021", price: 25, brand: "Nestle", category: "Food",
                specialOffer: true, limitedStock: true, quantity: 10
            },
            {
                code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",
                specialOffer: true, limitedStock: true, quantity: 3
            },
            {
                code: "CLG281", price: 60, brand: "Colgate", category: "Personal Care",
                specialOffer: true, limitedStock: true, quantity: 5
            },
            {
                code: "MAGG451", price: 25, brand: "Nestle", category: "Food",
                specialOffer: true, limitedStock: true, quantity: 0
            },
            {
                code: "PAR250", price: 40, brand: "Parachute", category: "Personal Care",
                specialOffer: true, limitedStock: true, quantity: 5
            }
        ],
        view: 1,
        editIndex: -1
    }

    calculateQuantity = () => {
        let quant = 0
        this.state.Products.forEach(prod => {
            quant = quant + prod.quantity

        })
        return quant
    }

    calculateValue = () => {
        let value = 1
        this.state.Products.forEach(prod => {
            value = value + (prod.quantity * prod.price)
        })
        return value
    }

    changeView = (vw) => {
        let s1 = { ...this.state }
        s1.view = vw
        s1.editIndex = -1
        this.setState(s1)
    }

    handleProduct = (newProd) => {
        let s1 = { ...this.state }

        if (s1.editIndex !== -1) {
            s1.Products[s1.editIndex] = newProd
        } else {
            s1.Products.push(newProd)
        }

        s1.editIndex = -1

        this.setState(s1)
        this.changeView(1)
    }

    updtEdtIdx = (index) => {
        let s1 = { ...this.state }
        s1.editIndex = index
        s1.view = 2
        this.setState(s1)
    }

    UpdateProductsArr = (arr) => {
        let s1={...this.state}
        s1.Products=arr
        this.setState(s1)
        this.changeView(1)
    }


    render() {
        let { Products, view, editIndex } = this.state
        let product = { code: '', price: '', category: '', brand: '', specialOffer: '', limitedStock: '', quantity: 0 }

        return (
            <div className="container">
                <Navbar
                    length={Products.length}
                    quantity={this.calculateQuantity()}
                    value={this.calculateValue()}
                />
                {
                    view === 1
                        ? <React.Fragment>
                            <div className="row my-4">
                                {
                                    Products.map((prod, index) => {
                                        let { code, price, brand, category, specialOffer, limitedStock, quantity } = prod
                                        return (
                                            <React.Fragment>
                                                <div className="col-3 text-center bg-light border">
                                                    <h6>Code:{code}</h6>
                                                    <span>Brand:{brand}</span>
                                                    <br />
                                                    <span>Category:{category}</span>
                                                    <br />
                                                    <span>Price:{price}</span>
                                                    <br />
                                                    <span>Quantity:{quantity}</span>
                                                    <br />
                                                    <span>Special Offers:{specialOffer ? 'Yes' : 'No'}</span>
                                                    <br />
                                                    <span>Limited Stocks:{limitedStock ? 'Yes' : 'No'}</span>
                                                    <br />
                                                    <button type="button" className="btn btn-warning" onClick={() => this.updtEdtIdx(index)}>
                                                        Edit Details
                                                    </button>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div className="row my-4">
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary" onClick={() => this.changeView(2)}>
                                        Add New Products
                                    </button>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary" onClick={() => this.changeView(3)}>
                                        Receive Stocks
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                        : view === 2
                            ? <React.Fragment>
                                <AddNewProduct
                                    product={editIndex !== -1 ? Products[editIndex] : product}
                                    onHandleProduct={this.handleProduct}
                                    editIndex={editIndex}
                                />
                                <div className="row">
                                    <div className="col m-4">
                                        <button type="button" className="btn btn-primary" onClick={() => this.changeView(1)}>
                                            Go back to Home page
                                        </button>
                                    </div>
                                </div>
                            </React.Fragment>
                            : <React.Fragment>
                                <ReceiveStocks
                                    Products={Products}
                                    onHandleUpdateProductsArr={this.UpdateProductsArr}
                                />
                                <div className="row">
                                    <div className="col m-4">
                                        <button type="button" className="btn btn-primary" onClick={() => this.changeView(1)}>
                                            Go back to Home page
                                        </button>
                                    </div>
                                </div>

                            </React.Fragment>
                }
            </div>
        )
    }
}