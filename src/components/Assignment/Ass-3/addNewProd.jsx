import React, { Component } from "react"

export default class AddNewProduct extends Component {
    state = {
        product: this.props.product,
        editIndex: this.props.editIndex,
        errors: {}
    }


    handleChange = (e) => {
        const { currentTarget: input } = e
        let s1 = { ...this.state }
        input.type === "checkbox"
            ? (s1.product[input.name] = input.checked)
            : s1.product[input.name] = input.value
        this.setState(s1)
    }

    validateCategory = () => {
        let { category } = this.state.product
        if (category === '') {
            alert('Category is required')
            return 1
        }
    }

    validateCode = () => {
        let { code } = this.state.product
        if (!code) {
            return "Product Code is required"
        }
    }

    validatePrice = () => {
        let { price } = this.state.product
        if (!price) {
            return "Price is  required"
        } else {
            if (!Number(price)) {
                return 'Price Should be a Number'
            }
        }
    }

    validateAll = () => {
        let errors = {}
        errors.code = this.validateCode()
        errors.price = this.validatePrice()
        errors.category = this.validateCategory()
        return errors
    }

    isValid = (errors) => {
        //errors would have keys with non empty strings as values
        let keys = Object.keys(errors)//Keys in an array

        let count = keys.reduce((acc, curr) => {
            if (errors[curr]) {
                return acc + 1
            } else {
                return acc
            }
        }, 0)
        return count === 0
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let errors = this.validateAll()
        if (this.isValid(errors)) {
            this.props.onHandleProduct(this.state.product)
        } else {
            let s1 = { ...this.state }
            s1.errors = errors
            this.setState(s1)
        }
    }

    render() {
        let { product, editIndex, errors } = this.state
        let { code, price, category, brand, specialOffer, limitedStock } = product
        let foodVariety = []

        let FoodArr = ["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys"]
        let PersonalCareArr = ["P&G", "Colgate", "Parachute", "Gillete"]
        let ApparelArr = ["Levis", "Van Heusen", "Manyavaar", "Zara"]

        if (category === "Food") {
            foodVariety = FoodArr
        } else {
            if (category === "Apparel") {
                foodVariety = ApparelArr
            } else {
                if (category === "Personal Care") {
                    foodVariety = PersonalCareArr
                }
            }
        }

        return (
            <div className="container">
                <div className="form-group mb-0 my-4">
                    <label>Product Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        value={code}
                        onChange={this.handleChange}
                        disabled={editIndex !== -1 ? 1 : 0}
                    />
                </div>

                {errors.code ?
                    <div className="row">
                        <div className="col bg-danger text-white form-control">
                            <span>{errors.code}</span>
                        </div>
                    </div>
                    : ""
                }

                <div className="form-group mb-0 my-4">
                    <label>Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={price}
                        onChange={this.handleChange}
                    />
                </div>

                {
                    errors.price
                        ? <div className="row">
                            <div className="col bg-danger text-white form-control">
                                <span>{errors.price}</span>
                            </div>
                        </div>
                        : ''
                }

                <label>Category</label>
                <br />
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="Food"
                        onChange={this.handleChange}
                        checked={category === "Food"}
                    />
                    <label class="form-check-label">
                        Food
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="Personal Care"
                        onChange={this.handleChange}
                        checked={category === "Personal Care"}
                    />
                    <label class="form-check-label">
                        Personal Care
                    </label>
                </div>

                <div className="form-check form-check-inline mb-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value="Apparel"
                        onChange={this.handleChange}
                        checked={category === "Apparel"}
                    />
                    <label class="form-check-label">
                        Apparel
                    </label>
                </div>

                <div className="form-group mb-2">
                    <select className="form-control bg-light" name="brand" value={brand} onChange={this.handleChange}>
                        <option disabled selected value="">
                            Select The Brand
                        </option>
                        {foodVariety.map(val => {
                            return (
                                <option value={val}>
                                    {val}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <h6>Choose other info about product</h6>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="specialOffer"
                        onChange={this.handleChange}
                        checked={specialOffer}
                    />
                    <label className="form-check-label">
                        Special offer
                    </label>
                </div>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="limitedStock"
                        onChange={this.handleChange}
                        checked={limitedStock}
                    />
                    <label className="form-check-label">
                        Limited Stocks
                    </label>
                </div>

                <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Add Product</button>


            </div>
        )
    }
}