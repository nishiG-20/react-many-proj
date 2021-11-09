import React, { Component } from "react";
import QuestionComp from './questionComp'
import MarkingSheetComp from './markingSheetComp'

export default class MainComponent extends Component {

    state = {
        assignments: [
            {
                subject: "General Knowledge",
                name: "4A",
                questions: [
                    {
                        text: "What is the capital of India",
                        options: ["New Delhi", "London", "Paris", "Tokyo"],
                        answer: 1
                    },
                    {
                        text: "What is the capital of Italy",
                        options: ["Berlin", "London", "Rome", "Paris"],
                        answer: 3
                    },
                    {
                        text: "What is the capital of China",
                        options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],
                        answer: 4
                    },
                    {
                        text: "What is the capital of Nepal",
                        options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],
                        answer: 2
                    },
                    {
                        text: "What is the capital of Iraq",
                        options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                        answer: 1
                    },
                    {
                        text: "What is the capital of Bangladesh",
                        options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],
                        answer: 4
                    },
                    {
                        text: "What is the capital of Sri Lanka",
                        options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],
                        answer: 2
                    },
                    {
                        text: "What is the capital of Saudi Arabia",
                        options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                        answer: 1
                    },
                    {
                        text: "What is the capital of France",
                        options: ["London", "New York", "Paris", "Rome"],
                        answer: 3
                    },
                    {
                        text: "What is the capital of Germany",
                        options: ["Frankfurt", "Budapest", "Prague", "Berlin"],
                        answer: 4
                    },
                    {
                        text: "What is the capital of Sweden",
                        options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],
                        answer: 2
                    },
                    {
                        text: "What is the currency of UK",
                        options: ["Dollar", "Mark", "Yen", "Pound"],
                        answer: 4
                    },
                    {
                        text: "What is the height of Mount Everest",
                        options: ["9231 m", "8848 m", "8027 m", "8912 m"],
                        answer: 2
                    },
                    {
                        text: "What is the capital of Japan",
                        options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
                        answer: 4
                    },
                    {
                        text: "What is the capital of Egypt",
                        options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
                        answer: 1
                    }
                ],
            },
            {
                subject: "Maths",
                name: "10C",
                questions: [
                    {
                        text: "What is 8 * 9",
                        options: ["72", "76", "64", "81"],
                        answer: 1
                    },
                    {
                        text: "What is 2*3+4*5",
                        options: ["70", "50", "26", "60"],
                        answer: 3
                    }
                ],
            },
            {
                subject: "Chemistry",
                name: "7A(i)",
                questions: [
                    {
                        text: "What is the melting point of ice",
                        options: ["0F", "0C", "100C", "100F"],
                        answer: 2
                    },
                    {
                        text: "What is the atomic number of Oxygen",
                        options: ["6", "7", "8", "9"],
                        answer: 3
                    },
                    {
                        text: "What is the atomic number of Carbon",
                        options: ["6", "7", "8", "9"],
                        answer: 1
                    },
                    {
                        text: "Which of these is an inert element",
                        options: ["Flourine", "Suphur", "Nitrogen", "Argon"],
                        answer: 4
                    },
                    {
                        text: "What is 0 Celsius in Fahrenheit",
                        options: ["0", "32", "20", "48"],
                        answer: 2
                    }
                ],
            },
            {
                subject: "Computers",
                name: "3B",
                questions: [
                    {
                        text: "How many bytes are there in 1 kilobyte",
                        options: ["16", "256", "1024", "4096"],
                        answer: 3
                    },
                    {
                        text: "Who developed ReactJS",
                        options: ["Facebook", "Google", "Microsoft", "Apple"],
                        answer: 1
                    },
                    {
                        text: "Angular is supported by ",
                        options: ["Facebook", "Google", "Microsoft", "Twitter"],
                        answer: 2
                    },
                    {
                        text: "C# was developed by ",
                        options: ["Amazon", "Google", "Microsoft", "Twitter"],
                        answer: 3
                    },
                    {
                        text: "Bootstrap was developed by ",
                        options: ["Apple", "Google", "Facebook", "Twitter"],
                        answer: 4
                    },
                    {
                        text: "AWS is provided by ",
                        options: ["Apple", "Amazon", "Microsoft", "Google"],
                        answer: 2
                    },
                    {
                        text: "Azure is provided by ",
                        options: ["Microsoft", "Amazon", "IBM", "Google"],
                        answer: 1
                    },
                    {
                        text: "Angular is a framework that uses ",
                        options: ["Java", "Python", "C#", "Typescript"],
                        answer: 4
                    }
                ],
            }
        ],
        status: 1,
        assignmentNum: '',
        check: -1
    }

    calcScore = (index) => {
        let { assignments } = this.state
        let arr = assignments[index].questions
        let count = 0
        let userExist = 0
        arr.forEach(elem => {
            if (elem.userAnswer) {
                userExist = 1
                count = (String.fromCharCode(64 + elem.answer) === elem.userAnswer) ? ++count : count
            }
        })

        if (userExist === 1) {
            return `${count}/${arr.length}`
        } else return 'Not Done'
    }

    setCheckvalue = () => {
        let s1 = { ...this.state }
        s1.check = 1
        s1.status = 2
        this.setState(s1)
    }

    isChkElgbl = (assNum) => {
        let { assignments } = this.state
        let arr = assignments[assNum].questions
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userAnswer) {
                return 1
            }
        }
        return 0
    }


    makeDashBoard = () => {
        let { assignments, check } = this.state
        return (
            <React.Fragment>
                <h1 className="text-center my-1">Choose the Assignment</h1>
                <div className="row border bg-dark text-white text-center fs-5">
                    <div className="col">Subject</div>
                    <div className="col">Assignment</div>
                    <div className="col">Performance</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                {assignments.map((as, index) => {
                    let { subject, name } = as
                    return (
                        <div className="row border bg-light text-center fs-5">
                            <div className="col">{subject}</div>
                            <div className="col">{name}</div>
                            <div className="col">
                                {this.calcScore(index)}
                            </div>
                            <div className="col">

                                <button type="button" className="btn btn-primary" onClick={() => this.openAssignment(index)}>
                                    Do
                                </button>
                            </div>
                            <div className="col">
                                {
                                    this.isChkElgbl(index)
                                        ? <button type="button" className="btn btn-primary" onClick={() => this.setCheckvalue()}>
                                            Check
                                        </button>
                                        : ''
                                }
                            </div>
                        </div>
                    )
                })}

            </React.Fragment>
        )
    }

    openAssignment = (index) => {
        let s1 = { ...this.state }
        s1.assignmentNum = index
        s1.status = 2
        this.setState(s1)
    }

    makeAssignmentHeader = (assignmentNum) => {
        let { assignments } = this.state
        return (
            <div className="row border bg-light my-2">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <h2 className="text-center">{assignments[assignmentNum].subject} : Assignment {assignments[assignmentNum].name}</h2>
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
        )
    }

    call = () => {
        this.makeDashBoard()
    }

    setStatus = (st) => {
        let s1 = { ...this.state }
        s1.status = st
        s1.check = -1
        this.setState(s1)
    }

    handleAnswerArr = (assignments) => {
        let s1 = { ...this.state }
        s1.assignments = assignments
        this.setState(s1)
    }

    viewMarkSheet = (st) => {
        let s1 = { ...this.state }
        s1.status = st
        this.setState(s1)
    }

    render() {
        let { status, assignmentNum, assignments, check } = this.state
        console.log('Check Value is = ' + check)
        return (
            <div className="container">
                {
                    status === 1
                        ? this.makeDashBoard()
                        : status === 2
                            ? <React.Fragment>
                                {this.makeAssignmentHeader(assignmentNum)}
                                <div className="row">
                                    <div className="col-9"></div>
                                    <div className="col-3">
                                        <button type="button" className="btn btn-primary" onClick={() => this.viewMarkSheet(3)}>
                                            View Marking Sheet
                                        </button>
                                    </div>
                                </div>
                                <QuestionComp
                                    Assignments={assignments}
                                    updateAnswerArr={this.handleAnswerArr}
                                    AssignmentNumber={assignmentNum}
                                    check={check}
                                />
                            </React.Fragment>
                            : status === 3
                                ? <React.Fragment>
                                    {this.makeAssignmentHeader(assignmentNum)}
                                    <MarkingSheetComp
                                        questions={assignments[assignmentNum].questions}
                                        check={check}
                                    />
                                    <div className="row">
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-secondary btn-lg" onClick={() => this.setStatus(1)}>
                                                {
                                                    check === 1
                                                        ? 'Go to the List of Assignmemts'
                                                        : 'Submit the Assignment'
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </React.Fragment>
                                : ''
                }
            </div>
        )
    }
}
