import React, { Component } from "react"

export default class QuestionComp extends Component {
    state = {
        index: 0,
        ans: this.props.ans
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

    setAnswers = (index, answer) => {
        let s1 = { ...this.state }
        // console.log(index + ' ' + answer + ' ' + s1.ans)
        s1.ans[index] = answer
        this.setState(s1)
        this.props.updateAnswer(s1.ans)
    }

    render() {
        let { questions, ans } = this.props
        let { index } = this.state
        let text = questions[index].text
        let arr = []
        arr = questions[index].options

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
                <span className="">{ans[index] === '' ? 'Your Answer : Not Answered' : `Your Answer : ${ans[index]}`}</span>
                <div className="row">
                    <div className="col-2">
                        {index > 0 ? <button type="button" className="btn btn-primary" onClick={() => this.goToPrvQue()}>Previous Question</button> : ''}
                    </div>
                    <div className="col-2">
                        {index < questions.length - 1 ? <button type="button" className="btn btn-primary" onClick={() => this.goTonxtQue()}>Next Question</button> : ''}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}