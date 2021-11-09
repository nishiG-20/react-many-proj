import React, { Component } from "react"

class Temp extends Component {

    state = {}

    render() {
        let { alphabet, onAddChar } = this.props
        return (
            <div className="col-1">
                <button type="button" className="btn btn-dark mb-1" onClick={() => onAddChar(alphabet)}>{alphabet}</button>
            </div>
        )
    }
}

export default Temp