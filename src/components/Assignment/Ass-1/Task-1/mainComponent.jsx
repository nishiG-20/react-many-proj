import React, { Component } from "react";

class MainComponent extends Component {
    state = {
        products: [
            { product: "Pepsi", sales: [2, 5, 8, 10, 5] },
            { product: "Coke", sales: [3, 6, 5, 4, 11, 5] },
            { product: "5Star", sales: [10, 14, 22] },
            { product: "Maggi", sales: [3, 3, 3, 3, 3] },
            { product: "Perk", sales: [1, 2, 1, 2, 1, 2] },
            { product: "Bingo", sales: [0, 1, 0, 3, 2, 6] },
            { product: "Gems", sales: [3, 3, 1, 1] },
        ],
        shwDtl: -1
    };

    calculateTotalSales = (sales) => {
        return sales.reduce((acc, curr) => acc + curr, 0)
    }

    sortByProduct = () => {
        let s1 = { ...this.state }
        s1.products.sort((prod1, prod2) => prod1.product.localeCompare(prod2.product))
        this.setState(s1)
    }

    totalSalesAsc = () => {
        let s1 = { ...this.state }
        s1.products.sort((prod1, prod2) => this.calculateTotalSales(prod1.sales) - this.calculateTotalSales(prod2.sales))
        this.setState(s1)
    }

    totalSalesDesc = () => {
        let s1 = { ...this.state }
        s1.products.sort((prod1, prod2) => this.calculateTotalSales(prod2.sales) - this.calculateTotalSales(prod1.sales))
        this.setState(s1)
    }

    //Set Details Index
    setDtlIdx = (index) => {
        let s1 = { ...this.state }
        s1.shwDtl = index
        this.setState(s1)
    }

    showDetails = () => {
        let s1 = { ...this.state }
        if (s1.shwDtl > -1) {
            const product = s1.products[s1.shwDtl]
            return (
                <React.Fragment>
                    Product:<span className="text-dark bg-warning"> {product.product}</span>
                    {product.sales.map(sl => {
                        return (
                            <li>{sl}</li>
                        )
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        const { products, shwDtl } = this.state;
        return (
            <div className="container">
                <h2>Products</h2>
                <div className="row mb-2">
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={() => this.sortByProduct()}>
                            Sort By Product
                        </button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={() => this.totalSalesAsc()}>
                            Total Sales Asc
                        </button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={() => this.totalSalesDesc()}>
                            Total Sales Desc
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col border bg-dark text-white">Product</div>
                    <div className="col border bg-dark text-white">Total Sales</div>
                    <div className="col border bg-dark text-white">Details</div>
                </div>
                {products.map((prod, index) => {
                    let { product, sales } = prod
                    return (
                        <React.Fragment>
                            <div className="row">
                                <div className="col border bg-light">{product}</div>
                                <div className="col border bg-light">
                                    {this.calculateTotalSales(sales)}
                                </div>
                                <div className="col border bg-light">
                                    <button type="button" className="btn btn-primary" onClick={() => this.setDtlIdx(index)}>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
                {this.showDetails()}
            </div>
        )
    }
}

export default MainComponent;
