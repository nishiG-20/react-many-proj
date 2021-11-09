import React, { Component } from "react";

export default class VegPizza extends Component {
    state = {
        cart: this.props.cart,
        sizesDpDownArr: [],
        crustDpDownArr: [],
    };

    makeDpDwnDisbaled = (index) => {
        let name = this.props.Data[index].name
        let { cart } = this.state
        let findIdx = cart.findIndex(elem => elem.name === name)
        if (findIdx === -1) {
            return 0
        } else {
            return 1
        }
    }

    handleChangeForSize = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state }
        s1.sizesDpDownArr[s1.sizesDpDownArr.findIndex(elem => elem.name === input.name)].value = input.value
        this.setState(s1);
        
    };

    handleChangeForCrust = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state }
        s1.crustDpDownArr[s1.crustDpDownArr.findIndex(elem => elem.name === input.name)].value = input.value
        this.setState(s1);
    }

    makeDropDownForSize = (name, sizesArr, header, index) => {
        let s1 = { ...this.state };
        let findIndex = s1.sizesDpDownArr.findIndex(elem => elem.name === name);
        let newval = "";

        if (findIndex === -1) {
            let json = {};
            json.name = name;
            json.value = "";
            s1.sizesDpDownArr.push(json);
            this.setState(s1);
        } else {
            newval = s1.sizesDpDownArr[findIndex].value;
        }

        return (
            <div className="form-group mb-2">
                <select
                    className="form-control bg-light"
                    name={name}
                    value={newval}
                    onChange={this.handleChangeForSize}
                    disabled={this.makeDpDwnDisbaled(index, name, 1)}
                >
                    <option disabled selected value="">
                        {header}
                    </option>
                    {sizesArr.map((val) => {
                        return <option value={val}>{val}</option>;
                    })}
                </select>
            </div>
        );
    };


    makeDropDownForCrust = (name, crustArr, header, index) => {
        let s1 = { ...this.state };
        let findIndex = s1.crustDpDownArr.findIndex(elem => elem.name === name);
        let newval = "";

        if (findIndex === -1) {
            let json = {};
            json.name = name;
            json.value = "";
            s1.crustDpDownArr.push(json);
            this.setState(s1);
        } else {
            newval = s1.crustDpDownArr[findIndex].value;
        }

        return (
            <div className="form-group mb-2">
                <select
                    className="form-control bg-light"
                    name={name}
                    value={newval}
                    onChange={this.handleChangeForCrust}
                    disabled={this.makeDpDwnDisbaled(index, name, 2)}
                >
                    <option disabled selected value="">
                        {header}
                    </option>
                    {crustArr.map((val) => {
                        return <option value={val}>{val}</option>;
                    })}
                </select>
            </div>
        );
    }

    validateItem = (index) => {
        let { sizesDpDownArr, crustDpDownArr } = this.state
        let fidx1 = sizesDpDownArr.findIndex(elem => elem.name === 'size' + index)
        let fidx2 = crustDpDownArr.findIndex(elem => elem.name === 'crust' + index)
        if (sizesDpDownArr[fidx1].value === '') {
            alert('Please Select Size')
            return 0
        } else {
            if (crustDpDownArr[fidx2].value === '') {
                alert('Please Select Crust')
                return 0
            } else {
                return 1
            }
        }
    }

    addToCart = (index) => {
        let s1 = { ...this.state }
        if (this.validateItem(index)) {
            let sizeval = s1.sizesDpDownArr[s1.sizesDpDownArr.findIndex(elem => elem.name === 'size' + index)].value
            let crustval = s1.crustDpDownArr[s1.crustDpDownArr.findIndex(elem => elem.name === 'crust' + index)].value
            let { image, name, desc } = this.props.Data[index]
            let newCartItem = {}
            newCartItem.image = image
            newCartItem.desc = desc
            newCartItem.name = name
            newCartItem.sizeval = sizeval
            newCartItem.crustval = crustval
            newCartItem.quant = 1
            newCartItem.szDpNm = 'size' + index
            newCartItem.crstDpNm = 'crust' + index
            s1.cart.push(newCartItem)
        }
        this.setState(s1)
        this.props.onhandleCart(this.state.cart)
    }

    addButtons = (index) => {
        let Data = this.props.Data
        let name = Data[index].name
        let findIdx = this.state.cart.findIndex(elem => elem.name === name)
        if (findIdx === -1) {
            return 0
        } else return 1
    }

    resetDpDown = (cartIndex) => {
        let s1 = { ...this.state }
        let szDpNm = s1.cart[cartIndex].szDpNm
        let crstDpNm = s1.cart[cartIndex].crstDpNm
        s1.sizesDpDownArr[s1.sizesDpDownArr.findIndex(elem => elem.name === szDpNm)].name = ''
        s1.crustDpDownArr[s1.crustDpDownArr.findIndex(elem => elem.name === crstDpNm)].name = ''
        this.setState(s1)
    }

    incrementQuantity = (index) => {
        let s1 = { ...this.state }
        s1.cart[index].quant++
        this.setState(s1)
    }

    incrementQuant2 = (index) => {
        let s1 = { ...this.state }
        let name = this.props.Data[index].name
        let findIdx = s1.cart.findIndex(elem => elem.name === name)
        s1.cart[findIdx].quant++
        this.setState(s1)
    }


    decrementQuantity = (index) => {
        let s1 = { ...this.state }
        s1.cart[index].quant--
        if (s1.cart[index].quant === 0) {
            this.resetDpDown(index)
            s1.cart.splice(index, 1)
        }
        this.setState(s1)
    }

    decrementQuant2 = (index) => {
        let s1 = { ...this.state }
        let name = this.props.Data[index].name
        let findIdx = s1.cart.findIndex(elem => elem.name === name)
        s1.cart[findIdx].quant--
        if (s1.cart[findIdx].quant === 0) {
            this.resetDpDown(findIdx)
            s1.cart.splice(findIdx, 1)
        }
        this.setState(s1)
    }

    render() {
        let { sizes, crusts, Data, cart } = this.props;
        return (
            <div className="fluid-container">
                <div className="row">
                    <div className="col-8 bg-light">
                        <div className="row">
                            {Data.map((dt, index) => {
                                let { image, type, veg, name, desc } = dt;
                                if (veg === "Yes" && type === "Pizza") {
                                    return (
                                        <div className="col-6 border">
                                            <span>
                                                <img src={image} className="img-fluid w-90" alt="" />
                                            </span>
                                            <h6 class="text-center">{name}</h6>
                                            <p class="text-center"> {desc}</p>
                                            <div className="row">
                                                <div className="col-6">
                                                    {this.makeDropDownForSize("size" + index, sizes, 'Select Size', index)}
                                                </div>
                                                <div className="col-6">
                                                    {this.makeDropDownForCrust("crust" + index, crusts, 'Select Crust', index)}
                                                </div>
                                            </div>
                                            {
                                                this.addButtons(index)
                                                    ? <React.Fragment>
                                                        <div className="text-center">
                                                            <button type="button" className="btn btn-danger m-1" onClick={() => this.decrementQuant2(index)}>-</button>
                                                            <button type="button" className="btn btn-secondary m-1">
                                                                {this.state.cart[this.state.cart.findIndex(elem => elem.name === name)].quant}
                                                            </button>
                                                            <button type="button" className="btn btn-success m-1" onClick={() => this.incrementQuant2(index)}>+</button>
                                                        </div>
                                                    </React.Fragment>
                                                    : <div className="row">
                                                        <div className="col text-center">
                                                            <button type="button" className="btn btn-primary text-center" onClick={() => this.addToCart(index)}>
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                            }

                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="row text-center">
                            <div className="col border bg-light">
                                <h3>Cart</h3>
                            </div>
                        </div>
                        {
                            cart.map((cartItem, index) => {
                                let { image, desc, name, sizeval, crustval, quant } = cartItem
                                return (
                                    <div className="row bg-light border">
                                        <div className="col-4">
                                            <span><img src={image} className="img-fluid mx-auto d-block mt-5" alt={name} /></span>
                                        </div>
                                        <div className="col-8">
                                            <h5 className>{name}</h5>
                                            <span>{desc}</span>
                                            <br />
                                            <span>{sizeval} | {crustval}</span>
                                            <br />
                                            <button type="button" className="btn btn-danger m-1" onClick={() => this.decrementQuantity(index)}>-</button>
                                            <button type="button" className="btn btn-secondary m-1">{quant}</button>
                                            <button type="button" className="btn btn-success m-1" onClick={() => this.incrementQuantity(index)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

