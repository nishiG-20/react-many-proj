import React, { Component } from "react";
import { getQuizQuestions } from "./quizQsn";

class MainComponent extends Component {
    state = {
        players: [
            {
                name: "James",
                points: 0,
            },
            {
                name: "Julia",
                points: 0,
            },
            {
                name: "Mrtha",
                points: 0,
            },
            {
                name: "Steve",
                points: 0,
            },
        ],
        questions: getQuizQuestions(),
        currentQuestion: 0,
        playerBuzzer: -1,
    };

    checkTie = () => {
        let { players } = this.state
        let players1 = [...players]
        players1.sort((plr1, plr2) => plr1.points - plr2.points)
        let num = Number.MIN_SAFE_INTEGER - 1

        for (let i = 0; i < players1.length - 1; i++) {
            if (players1[i].points === players1[i + 1].points && players1[i].points >= num) {
                num = players1[i].points
            }
        }
        if (num === Number.MIN_SAFE_INTEGER - 1) {
            return Number.MIN_SAFE_INTEGER - 1
        } else {
            return num
        }

    }

    findMaxScorer = () => {
        let { players } = this.state
        let flag = 0
        let fstPlrScr = Number.MIN_SAFE_INTEGER - 1

        // players.forEach((plyr, index) => {
        //     if (plyr.points > fstPlrScr) {
        //         fstPlrScr = plyr.points
        //         flag = index
        //     }
        // })

        return players.reduce((acc, curr) => {
            if (curr.points > fstPlrScr) {
                fstPlrScr = curr.points
                return curr
            } else {
                return acc
            }
        }, 0)

    }

    showResult = () => {
        let { players } = this.state

        //Find Max Scorer Player
        let maxScorerPlayer = this.findMaxScorer()
        console.log('maxScorerPlayer= ' + maxScorerPlayer.points)

        //Find Tie Condition
        let tieNum = this.checkTie()
        console.log('tieNum= ' + tieNum)

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col text-center">
                        {
                            maxScorerPlayer.points > tieNum
                                ? <React.Fragment>
                                    <h2>Game Over</h2>
                                    <h3 className="text-primary bg-light">The Winnner is {maxScorerPlayer.name}</h3>
                                </React.Fragment>
                                : <React.Fragment>
                                    <h2>Game Tie</h2>
                                    <h3 className="text-primary bg-light">
                                        The Winners are :
                                        {
                                            players.map(plr => {
                                                if (plr.points === tieNum) {
                                                    return plr.name
                                                }
                                            })
                                        }
                                    </h3>
                                </React.Fragment>
                        }

                    </div>
                </div>
            </React.Fragment>
        )
    }

    setOption = (index) => {
        let s1 = { ...this.state }
        if (s1.playerBuzzer > -1) {
            if (s1.questions[s1.currentQuestion].answer === index + 1) {
                alert('Correct Answer: You get Three Point')
                s1.currentQuestion++
                s1.players[s1.playerBuzzer].points = s1.players[s1.playerBuzzer].points + 3
            } else {
                alert('Wrong Answer: You loose 1 Point')
                s1.currentQuestion++
                s1.players[s1.playerBuzzer].points = s1.players[s1.playerBuzzer].points - 1
            }
        } else {
            alert('Press Buzzer please')
        }
        s1.playerBuzzer = -1
        this.setState(s1)
    }

    hitBuzzorButton = (index) => {
        let s1 = { ...this.state }
        s1.playerBuzzer = index
        this.setState(s1)
    }

    decideColor = (index) => {
        let { playerBuzzer } = this.state
        if (index === playerBuzzer) {
            return "bg-danger"
        } else {
            return 'bg-warning'
        }
    }

    showQuestion = () => {
        let { currentQuestion, questions } = this.state
        return (
            <React.Fragment>
                <h3 className="text-center my-2">Question Number: {currentQuestion + 1}</h3>
                <h4 className="text-center">
                    {questions[currentQuestion].text}
                </h4>

                <div className="row">

                    <div className="col">
                        <div className="row">
                            {
                                questions[currentQuestion].options.map((opt, index) => {
                                    return (
                                        <div className="col">
                                            <button type="button" class="btn btn-info" onClick={() => this.setOption(index)}>{opt}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }

    render() {
        let { players, currentQuestion, questions } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Welcome to the Quiz Contest</h1>
                <h3 className="text-center">Participants</h3>
                <div className="row">
                    {players.map((plyr, index) => {
                        return (
                            <React.Fragment>
                                <div className={"col-2 border text-center bg-warning " + this.decideColor(index)}>
                                    <h4>Name:{plyr.name}</h4>
                                    <h5>Score:{plyr.points}</h5>
                                    <button type="button" onClick={() => this.hitBuzzorButton(index)}>BUZZER</button>
                                </div>
                                <div className="col-1"></div>
                            </React.Fragment>
                        );
                    })}
                </div>
                {currentQuestion === questions.length ? this.showResult() : this.showQuestion()}
            </div>
        );
    }
}
export default MainComponent;

