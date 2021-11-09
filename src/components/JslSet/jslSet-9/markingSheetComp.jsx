import React, { Component } from "react"

export default class MarkingSheetComp extends Component {
    state = {}

    setDecideColor = (val) => {
        if (val) {
            return 'bg-secondary'
        } else {
            return 'bg-warning'
        }
    }

    render() {
        let { ans } = this.props
        return (
            <div className="row">
                {ans.map((val, index) => {
                    return (
                        <div className={"col-1 border rounded-3  " + this.setDecideColor(val)}>
                            {index + 1}.{val}
                        </div>
                    )
                })}
            </div>
        )
    }
}