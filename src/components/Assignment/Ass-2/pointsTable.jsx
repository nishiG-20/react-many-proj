import React, { Component } from "react"

export default class PointsTable extends Component {
    render() {
        let { pointsTable } = this.props
        return (
            <React.Fragment>
                <h3 className="text-center">Points Table</h3>
                <div className="row border bg-dark text-white text-center">
                    <div className="col">Team</div>
                    <div className="col">Played</div>
                    <div className="col">Won</div>
                    <div className="col">Lost</div>
                    <div className="col">Drawn</div>
                    <div className="col">Goals For</div>
                    <div className="col">Goals Against</div>
                    <div className="col">Score</div>

                </div>
                {pointsTable.map(data => {
                    let { team, played, won, lost, draw, goalsFor, goalsAgainst, points } = data
                    return (
                        <React.Fragment>
                            <div className="row border text-center">
                                <div className="col">{team}</div>
                                <div className="col">{played}</div>
                                <div className="col">{won}</div>
                                <div className="col">{lost}</div>
                                <div className="col">{draw}</div>
                                <div className="col">{goalsFor}</div>
                                <div className="col">{goalsAgainst}</div>
                                <div className="col">{points}</div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }
}

