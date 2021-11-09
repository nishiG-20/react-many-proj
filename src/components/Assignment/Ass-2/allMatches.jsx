import React, { Component } from "react"

export default class AllMatches extends Component {
    render() {
        let { Results } = this.props
        return (
            <React.Fragment>
                <h3 className="text-center">Results of the matches so far</h3>
                {
                    Results.length !== 0
                        ? <React.Fragment>
                            <div className="row border bg-dark text-white text-center">
                                <div className="col">Team 1</div>
                                <div className="col">Team 2</div>
                                <div className="col">Score</div>
                                <div className="col">Result</div>
                                <div className="col"></div>
                            </div>
                            {Results.map((res) => {
                                let { team1, team2, team1Score, team2Score, result } = res
                                return (
                                    <React.Fragment>
                                        <div className="row border text-center">
                                            <div className="col">{team1}</div>
                                            <div className="col">{team2}</div>
                                            <div className="col">{team1Score}-{team2Score}</div>
                                            <div className="col">{result}</div>
                                            <div className="col"></div>

                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                        : ''
                }
            </React.Fragment>
        )
    }
}

