import React, { Component } from "react";

export default class OtherItems extends Component {
    state = {
        cart: this.props.cart,
    };

    addToCart = (index) => {
        let s1 = { ...this.state }
        let { image, name, desc } = this.props.Data[index]
        let newCartItem = {}
        newCartItem.image = image
        newCartItem.desc = desc
        newCartItem.name = name
        newCartItem.quant = 1
        s1.cart.push(newCartItem)
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
            s1.cart.splice(findIdx, 1)
        }
        this.setState(s1)
    }

    render() {
        let { Data, cart } = this.props;
        return (
            <div className="fluid-container">
                <div className="row">
                    <div className="col-8 bg-light">
                        <div className="row">
                            {Data.map((dt, index) => {
                                let { image, type, name, desc } = dt;
                                if (type === 'Beverage' || type === 'Burger Pizza' || type === 'Dessert') {
                                    return (
                                        <div className="col-6 border">
                                            <span>
                                                <img src={image} className="img-fluid w-90" alt="" />
                                            </span>
                                            <h6 class="text-center">{name}</h6>
                                            <p class="text-center"> {desc}</p>
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
                                let { image, desc, name, quant } = cartItem
                                return (
                                    <div className="row bg-light border">
                                        <div className="col-4">
                                            <span><img src={image} className="img-fluid mx-auto d-block mt-5" alt={name} /></span>
                                        </div>
                                        <div className="col-8">
                                            <h5 className>{name}</h5>
                                            <span>{desc}</span>
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

