import React, { Component } from "react"

export default class StartMatches extends Component {

    state = {
        team1: this.props.team1,
        team2: this.props.team2,
        team1Score: 0,
        team2Score:0
    }

    goalScored = (teamNum) => {
        let s1 = { ...this.state }
        if (teamNum === 1) {
            s1.team1Score += 1
        } else {
            s1.team2Score += 1
        }
        this.setState(s1)
    }

    gameOver = () => {
        let { team1Score, team2Score } = this.state
        this.props.setScoreAndStatus(team1Score, team2Score,1,this.props.totalMatches+1,1)
    }


    render() {
        let { team1, team2, team1Score, team2Score } = this.state
        return (
            <React.Fragment>
                <h1 className="text-center">Welcome to the exciting Match</h1>
                <div className="row">
                    <div className="col text-center">
                        <h2>{team1}</h2>
                    </div>
                    <div className="col text-center">
                        <h3>
                            {team1Score}-{team2Score}
                        </h3>
                    </div>
                    <div className="col text-center">
                        <h2>{team2}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-warning" onClick={() => this.goalScored(1)}>
                            Goal Scored
                        </button>
                    </div>
                    <div className="col text-center">

                    </div>
                    <div className="col text-center">
                        <button type="button" className="btn btn-warning" onClick={() => this.goalScored(2)}>
                            Goal Scored
                        </button>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col text-center">
                        <div className="d-grid gap-2 col-3 mx-auto">
                            <button type="button" className="btn btn-warning" onClick={() => this.gameOver()}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

