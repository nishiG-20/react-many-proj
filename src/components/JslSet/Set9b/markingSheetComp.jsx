import React, { Component } from "react"

export default class MarkingSheetComp extends Component {
    state = {}

    setDecideColor = (userAns, orignalAns) => {
        let { check } = this.props
        if (check === 1) {
            if (userAns) {
                if (userAns === String.fromCharCode(64 + orignalAns)) {
                    return 'bg-success'
                } else {
                    return 'bg-danger'
                }
            } else {
                return 'bg-warning'
            }
        } else {
            if (userAns) {
                return 'bg-secondary'
            } else return 'bg-warning'
        }

    }

    render() {
        let { questions } = this.props
        return (
            <div className="row my-4">
                {questions.map((que, index) => {
                    return (
                        <div className="col-1">
                            <button
                                type="button"
                                className={"btn  text-dark m-1 " + this.setDecideColor(que.userAnswer, que.answer)}
                            >
                                {index + 1}.{que.userAnswer}
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
