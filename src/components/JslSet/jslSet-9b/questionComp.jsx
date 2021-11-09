import React, { Component } from "react"

export default class QuestionComp extends Component {
    state = {
        index: 0,
        assNum: this.props.AssignmentNumber,
        Assignments: this.props.Assignments,
    }

    goToPrvQue = () => {
        let s1 = { ...this.state }
        s1.index--
        this.setState(s1)
    }

    goTonxtQue = () => {
        let s1 = { ...this.state }
        s1.index++
        this.setState(s1)
    }

    setAnswers = (index, userAnswer) => {
        let { Assignments, assNum } = this.state
        Assignments[assNum].questions[index].userAnswer = userAnswer
        this.props.updateAnswerArr(Assignments)
    }

    render() {
        let { check } = this.props
        let { index, assNum, Assignments } = this.state
        let text = Assignments[assNum].questions[index].text
        let arr = []
        arr = Assignments[assNum].questions[index].options
        let userAnswer = Assignments[assNum].questions[index].userAnswer

        return (
            <React.Fragment>
                <h4>Question Number : {index + 1}</h4>
                <div className="row">
                    <div className="col"> {text}</div>
                </div>
                {arr.map((opt, idx) => {
                    return (
                        <div className="row">
                            <div className="col myStyle" onClick={() => this.setAnswers(index, String.fromCharCode(65 + idx))}>
                                {String.fromCharCode(65 + idx)}.{opt}
                            </div>
                        </div>
                    )
                })}

                <span>{userAnswer ? `Your Answer : ${userAnswer}` : 'Your Answer : Not Defined'}</span>

                {
                    check === 1
                        ?
                        userAnswer && userAnswer === String.fromCharCode(64 + Assignments[assNum].questions[index].answer)
                            ? <p className="text-success">Correct Answer</p>
                            : <p className="text-danger">
                                {`Incorrect. The correct answer is ${String.fromCharCode(64 + Assignments[assNum].questions[index].answer)}`}
                            </p>

                        : ''

                }

                <div className="row">
                    <div className="col-2">
                        {index > 0 ? <button type="button" className="btn btn-primary" onClick={() => this.goToPrvQue()}>Previous Question</button> : ''}
                    </div>
                    <div className="col-2">
                        {index < Assignments[assNum].questions.length - 1 ? <button type="button" className="btn btn-primary" onClick={() => this.goTonxtQue()}>Next Question</button> : ''}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}