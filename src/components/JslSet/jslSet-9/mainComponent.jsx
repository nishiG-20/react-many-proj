import React, { Component } from "react";
import QuestionComp from './questionComp'
import MarkingSheetComp from "./markingSheetComp";

export default class MainComponent extends Component {

    state = {
        questions: [
            {
                text: "What is the capital of India",
                options: ["New Delhi", "London", "Paris", "Tokyo"],
                answer: 1,
            },
            {
                text: "What is the capital of Italy",
                options: ["Berlin", "London", "Rome", "Paris"],
                answer: 3,
            },
            {
                text: "What is the capital of China",
                options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],
                answer: 4,
            },
            {
                text: "What is the capital of Nepal",
                options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],
                answer: 2,
            },
            {
                text: "What is the capital of Iraq",
                options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                answer: 1,
            },
            {
                text: "What is the capital of Bangladesh",
                options: ["Teheran", "Kabul", "Colombo", "Dhaka"],
                answer: 4,
            },
            {
                text: "What is the capital of Sri Lanka",
                options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],
                answer: 2,
            },
            {
                text: "What is the capital of Saudi Arabia",
                options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                answer: 1,
            },
            {
                text: "What is the capital of France",
                options: ["London", "New York", "Paris", "Rome"],
                answer: 3,
            },
            {
                text: "What is the capital of Italy",
                options: ["Berlin", "London", "Paris", "Rome"],
                answer: 4,
            },
            {
                text: "What is the capital of Sweden",
                options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],
                answer: 2,
            },
            {
                text: "What is the currency of UK",
                options: ["Dollar", "Mark", "Yen", "Pound"],
                answer: 4,
            },
            {
                text: "What is the height of Mount Everest",
                options: ["9231 m", "8848 m", "8027 m", "8912 m"],
                answer: 2,
            },
            {
                text: "What is the capital of Japan",
                options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
                answer: 4,
            },
            {
                text: "What is the capital of Egypt",
                options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
                answer: 1,
            },
        ],
        status: 1,
        ans: new Array(15).fill('')
    };

    handleAnswer = (answer) => {
        let s1 = { ...this.state }
        s1.ans = answer
        this.setState(s1)
    }

    viewMarkSheet = () => {
        let s1 = { ...this.state }
        s1.status = 2
        console.log(s1.ans)
        this.setState(s1)
    }

    render() {
        let { questions, status, ans } = this.state

        return (
            <div className="container">
                <div className="row border bg-light my-2">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col">
                            <h2>General Knowledge : Assignment 4A</h2>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            Time : 5 mins
                        </div>
                        <div className="col-8"></div>
                        <div className="col-2">
                            Max Score : 15
                        </div>
                    </div>
                </div>

                {
                    status === 1
                        ? <React.Fragment>
                            <div className="row">
                                <div className="col-9"></div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-primary" onClick={() => this.viewMarkSheet()}>
                                        View Marking Sheet
                                    </button>
                                </div>
                            </div>
                            <QuestionComp questions={questions} ans={ans} updateAnswer={this.handleAnswer} />
                        </React.Fragment>
                        : <MarkingSheetComp ans={ans}/>
                }

            </div>
        )
    }
}
