import React, { Component } from "react";
import Navbar from './navbar'
import Product from './product'

export default class MainComponent extends Component {
    state = {
        products: [
            { "code": "PEP221", "prod": "Pepsi", "price": 12, "instock": "Yes", "category": "Beverages" },
            { "code": "COK113", "prod": "Coca Cola", "price": 18, "instock": "Yes", "category": "Beverages" },
            { "code": "MIR646", "prod": "Mirinda", "price": 15, "instock": "No", "category": "Beverages" },
            { "code": "SLI874", "prod": "Slice", "price": 22, "instock": "Yes", "category": "Beverages" },
            { "code": "MIN654", "prod": "Minute Maid", "price": 25, "instock": "Yes", "category": "Beverages" },
            { "code": "APP652", "prod": "Appy", "price": 10, "instock": "No", "category": "Beverages" },
            { "code": "FRO085", "prod": "Frooti", "price": 30, "instock": "Yes", "category": "Beverages" },
            { "code": "REA546", "prod": "Real", "price": 24, "instock": "No", "category": "Beverages" },
            { "code": "DM5461", "prod": "Dairy Milk", "price": 40, "instock": "Yes", "category": "Chocolates" },
            { "code": "KK6546", "prod": "Kitkat", "price": 15, "instock": "Yes", "category": "Chocolates" },
            { "code": "PER5436", "prod": "Perk", "price": 8, "instock": "No", "category": "Chocolates" },
            { "code": "FST241", "prod": "5 Star", "price": 25, "instock": "Yes", "category": "Chocolates" },
            { "code": "NUT553", "prod": "Nutties", "price": 18, "instock": "Yes", "category": "Chocolates" },
            { "code": "GEM006", "prod": "Gems", "price": 8, "instock": "No", "category": "Chocolates" },
            { "code": "GD2991", "prod": "Good Day", "price": 25, "instock": "Yes", "category": "Biscuits" },
            { "code": "PAG542", "prod": "Parle G", "price": 5, "instock": "Yes", "category": "Biscuits" },
            { "code": "MON119", "prod": "Monaco", "price": 7, "instock": "No", "category": "Biscuits" },
            { "code": "BOU291", "prod": "Bourbon", "price": 22, "instock": "Yes", "category": "Biscuits" },
            { "code": "MAR951", "prod": "MarieGold", "price": 15, "instock": "Yes", "category": "Biscuits" },
            { "code": "ORE188", "prod": "Oreo", "price": 30, "instock": "No", "category": "Biscuits" }
        ],
        status: -1
    };

    handleStatus = (st) => {
        let s1 = { ...this.state }
        s1.status = st
        this.setState(s1)
    }

    render() {
        let { status, products } = this.state
        return (
            <div className="container">
                <Navbar
                    onHandleStatus={this.handleStatus}
                />
                {
                    status === 1
                        ? <React.Fragment>
                            <Product
                                products={products}
                            />
                        </React.Fragment>
                        : ''

                }
            </div>
        )
    }
}
