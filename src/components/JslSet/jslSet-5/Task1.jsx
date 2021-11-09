import React, { Component } from "react"
import Temp from './temp'

class MyComp1 extends Component {

    state = {
        text: '',
        type: -1,
        uppCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        lowCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        numb: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        spcChar: ['@', '#', '$', '%', '&', '*', '(', ')']
    }

    upperCase = () => {
        let s1 = { ...this.state }
        s1.type = 0
        this.setState(s1)
    }

    lowerCase = () => {
        let s1 = { ...this.state }
        s1.type = 1
        this.setState(s1)
    }

    digits = () => {
        let s1 = { ...this.state }
        s1.type = 2
        this.setState(s1)
    }

    special = () => {
        let s1 = { ...this.state }
        s1.type = 3
        this.setState(s1)
    }

    addChar = (char) => {
        let s1 = { ...this.state }
        s1.text += char
        this.setState(s1)
    }

    render() {
        let { text, uppCase, type, lowCase, numb, spcChar } = this.state
        return (
            <React.Fragment>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={() => this.upperCase()}>UpperCase</button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={() => this.lowerCase()}>LowerCase</button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={() => this.digits()}>Digits</button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={() => this.special()}>Special</button>
                        </div>
                        <div className="col-2"></div>
                    </div>

                    <div className="row border my-2">
                        <div className="col">
                            <h3>
                                Text:{text}
                            </h3>
                        </div>
                    </div>

                    {(type === 0) ? <div className="row">
                        {uppCase.map(val => {
                            return (
                                <Temp alphabet={val} onAddChar={this.addChar} />
                            )
                        })}
                    </div> : ''}

                    {(type === 1) ? <div className="row">
                        {lowCase.map(val => {
                            return (
                                <Temp alphabet={val} onAddChar={this.addChar} />
                            )
                        })}
                    </div> : ''}

                    {(type === 2) ? <div className="row">
                        {numb.map(val => {
                            return (
                                <Temp alphabet={val} onAddChar={this.addChar} />
                            )
                        })}
                    </div> : ''}

                    {(type === 3) ? <div className="row">
                        {spcChar.map(val => {
                            return (
                                <Temp alphabet={val} onAddChar={this.addChar} />
                            )
                        })}
                    </div> : ''}

                </div>

            </React.Fragment>
        )
    }
}

export default MyComp1