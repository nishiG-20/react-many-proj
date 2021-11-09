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

    render() {
        let { products } = this.state
        let prod2 = [...products]
        prod2.sort((n1, n2) => n2.price - n1.price)
        return (
            <React.Fragment>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-4 border bg-dark text-white">Name</div>
                        <div className="col border  bg-dark text-white">Stock</div>
                        <div className="col border  bg-dark text-white">Sales</div>
                        <div className="col border  bg-dark text-white">Price</div>
                    </div>
                    {prod2.map(val => {
                        let { name, quantity, sales, price } = val
                        if (sales < 20) {
                            return (
                                <div className="row">
                                    <div className="col-4 border bg-light">{name}</div>
                                    <div className="col border">{quantity}</div>
                                    <div className="col border">{sales}</div>
                                    <div className="col border">{price}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComp1
