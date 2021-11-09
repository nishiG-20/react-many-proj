import React, { Component } from "react"

export default class NewMatch extends Component {

    state = {
        team1: this.props.team1,
        team2: this.props.team2,
    }

    selectedTeam = (teamNum, team) => {
        let s1 = { ...this.state }
        if (teamNum === 1) {
            s1.team1 = team
        }
        if (teamNum === 2) {
            s1.team2 = team
        }
        this.setState(s1)
    }

    makeTeam = (teamNum) => {
        let { Teams } = this.props
        return (
            <div className="row">
                {Teams.map(team => {
                    return (
                        <React.Fragment>
                            <div className="col bg-warning text-center" onClick={() => this.selectedTeam(teamNum, team)}>
                                <span>{team}</span>
                            </div>
                            <div className="col-1"></div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }

    startMatch = () => {
        let { team1, team2 } = this.state
        if (!team1) {
            alert('Please Select Team 1')
        } else {
            if (!team2) {
                alert('Please Select Team 2')
            } else {
                if (team1 === team2) {
                    alert('Select diffrent Teams')
                } else {
                    this.props.setStatus(3, team1, team2)
                }
            }
        }
    }

    render() {
        let { team1, team2 } = this.state
        return (
            <React.Fragment>
                <h3 className="text-center mb-3">{!team1 ? 'Choose Team 1' : ` Team 1 : ${team1}`}</h3>
                {this.makeTeam(1)}
                <h3 className="text-center my-5 mb-3">{!team2 ? 'Choose Team 2' : ` Team 2 : ${team2}`}</h3>
                {this.makeTeam(2)}
                <div className="row my-4">
                    <div className="col text-center">
                        <button type="button" className="btn btn-dark" onClick={() => this.startMatch()}>
                            Start Match
                        </button>
                    </div>
                    <div className="col-1"></div>
                </div>

            </React.Fragment>
        )
    }
}