import React, { Component } from "react";

class MyComp1 extends Component {
    state = {
        products: [
            { name: "Liril", quantity: 10, sales: 7, price: 10 },
            { name: "Dove", quantity: 20, sales: 9, price: 20 },
            { name: "Pears", quantity: 35, sales: 20, price: 15 },
            { name: "Surf", quantity: 45, sales: 22, price: 55 },
            { name: "Ariel", quantity: 20, sales: 7, price: 40 },
            { name: "Tide", quantity: 20, sales: 11, price: 35 },
            { name: "Nirma", quantity: 30, sales: 21, price: 20 }
        ]
    }

    maxSellerByQuantity = () => {
        let { products } = this.state
        let maxSale = products.reduce((acc, curr) => {
            if (curr.sales > acc) {
                return curr.sales
            } else {
                return acc
            }
        }, 0)

        let findName = products.find((elem) => {
            return elem.sales === maxSale
        })

        return (
            <React.Fragment>
                <p>Max Seller by Quantity</p>
                <p>Name:{findName.name}</p>
                <p>Quantity:{findName.sales}</p>
            </React.Fragment>
        )
    }

    maxSellerbyValue = () => {
        let { products } = this.state
        let maxSale = products.reduce((acc, curr) => {
            if (curr.sales * curr.price > acc) {
                return curr.sales * curr.price
            } else {
                return acc
            }
        }, 0)

        let findName = products.find((elem) => {
            return elem.sales * elem.price === maxSale
        })

        return (
            <React.Fragment>
                <p>Max Seller by Value</p>
                <p>Name:{findName.name}</p>
                <p>Quantity:{findName.sales * findName.price}</p>
            </React.Fragment>
        )
    }

    minSellerbyQuantity = () => {
        let { products } = this.state
        let minSale = products.reduce((acc, curr) => {
            if (curr.sales < acc) {
                return curr.sales
            } else {
                return acc
            }
        })

        return (
            <React.Fragment>
                <p>Min Seller by Quantity</p>
                <p>Name:{minSale.name}</p>
                <p>Quantity:{minSale.sales}</p>
            </React.Fragment>
        )
    }

    render() {
        let { products } = this.state
        { this.minSellerbyQuantity() }
        return (
            <React.Fragment>
                <div className="container my-4">
                    <h2 className="text-center">Daily Sales Report for XYZ Enterprises</h2>
                    <div className="row">
                        <div className="col border bg-dark text-white">Name</div>
                        <div className="col border  bg-dark text-white">Stock</div>
                        <div className="col border  bg-dark text-white">Sales</div>
                        <div className="col border  bg-dark text-white">Stock Left</div>
                        <div className="col border  bg-dark text-white">Price</div>
                        <div className="col border  bg-dark text-white">Sales value</div>
                    </div>
                    {products.map(val => {
                        let { name, quantity, sales, price } = val
                        return (
                            <div className="row">
                                <div className="col border bg-light">{name}</div>
                                <div className="col border">{quantity}</div>
                                <div className="col border">{sales}</div>
                                <div className="col border">{quantity - sales}</div>
                                <div className="col border">{price}</div>
                                <div className="col border">{price * sales}</div>
                            </div>
                        )
                    })}

                    <div className="row text-center bg-light">
                        <div className="col  border">
                            {this.maxSellerByQuantity()}
                        </div>
                        <div className="col  border">
                            {this.maxSellerbyValue()}
                        </div>
                        <div className="col  border">
                            {this.minSellerbyQuantity()}
                        </div>
                        <div className="col  border">
                            <p>Max Seller by Value</p>
                            <p>Name:Lrill</p>
                            <p>Quantity:70</p>
                        </div>
                    </div>

                    <div className="row border bg-light text-center">
                        <div className="col">
                            <p>Number of Products:7</p>
                            <p>Total Stock by Quantity:180</p>
                            <p>Total Stock by Value:5600</p>
                            <p>Total Sales by Quantity:98</p>
                            <p>Total Stock by Value:2885</p>
                        </div>
                    </div>

                    <div className="row border bg-light text-center">
                        <div className="col m-2">
                            <button type="button" className="btn btn-primary">Close the Shop for the Day</button>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}

export default MyComp1
