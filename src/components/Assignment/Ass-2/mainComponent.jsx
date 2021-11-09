import React, { Component } from "react"
import Navbar from "./navbar"
import NewMatch from './newMatch'
import StartMatches from './startMatches'
import AllMatches from './allMatches'
import PointsTable from "./pointsTable"

export default class MainComponent extends Component {
    state = {
        Teams: ['France', 'England', 'Brazil', 'Germany', 'Argentina'],
        status: 1,
        totalMatches: 0,
        team1: '',
        team2: '',
        Results: [],
        pointsTable: [
            {
                team: 'France',
                played: 0,
                won: 0,
                lost: 0,
                draw: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            },
            {
                team: 'England',
                played: 0,
                won: 0,
                lost: 0,
                draw: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            },
            {
                team: 'Brazil',
                played: 0,
                won: 0,
                lost: 0,
                draw: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            },
            {
                team: 'Germany',
                played: 0,
                won: 0,
                lost: 0,
                draw: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            }, {
                team: 'Argentina',
                played: 0,
                won: 0,
                lost: 0,
                draw: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                points: 0
            },

        ]
    }

    setNewmatch = () => {
        let s1 = { ...this.State }
        s1.status = 2
        this.setState(s1)
    }

    showAllMatches = () => {
        let s1 = { ...this.State }
        s1.status = 4
        this.setState(s1)
    }

    showPointsTable = () => {
        let s1 = { ...this.State }
        s1.status = 5
        this.setState(s1)
    }

    showButtons = () => {
        return (
            <div className="row my-3">
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={() => this.showAllMatches()}>All Matches</button>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={() => this.showPointsTable()}>Points Table</button>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={() => this.setNewmatch()}>New Match</button>
                </div>
            </div>
        )
    }

    handleTeamsAndStatus = (stVal, team1, team2) => {
        let s1 = { ...this.State }
        s1.status = stVal
        s1.team1 = team1
        s1.team2 = team2
        this.setState(s1)
    }

    updtPntTblWngCasT1 = (score1, score2) => {
        let s1 = { ...this.state }

        let findIndex = s1.pointsTable.findIndex((elem) => elem.team === s1.team1)
        s1.pointsTable[findIndex].played = s1.pointsTable[findIndex].played + 1
        s1.pointsTable[findIndex].won = s1.pointsTable[findIndex].won + 1
        s1.pointsTable[findIndex].goalsFor = s1.pointsTable[findIndex].goalsFor + score1
        s1.pointsTable[findIndex].goalsAgainst = s1.pointsTable[findIndex].goalsAgainst + score2
        s1.pointsTable[findIndex].points=s1.pointsTable[findIndex].won*3+(s1.pointsTable[findIndex].draw)
        if(s1.pointsTable[findIndex].draw!==0){
              s1.pointsTable[findIndex].points=(s1.pointsTable[findIndex].won)+s1.pointsTable[findIndex].draw+1
        }
       
      


        let findIndex2 = s1.pointsTable.findIndex((elem) => elem.team === s1.team2)
        s1.pointsTable[findIndex2].played = s1.pointsTable[findIndex2].played + 1
        s1.pointsTable[findIndex2].lost = s1.pointsTable[findIndex2].lost + 1
        s1.pointsTable[findIndex2].goalsFor = s1.pointsTable[findIndex2].goalsFor + score2
        s1.pointsTable[findIndex2].goalsAgainst = s1.pointsTable[findIndex2].goalsAgainst + score1   
        if(s1.pointsTable[findIndex2].won!==0){
            s1.pointsTable[findIndex2].points=s1.pointsTable[findIndex2].won*3+(s1.pointsTable[findIndex2].draw)
        }
        if(s1.pointsTable[findIndex2].draw!==0){
            s1.pointsTable[findIndex2].points=s1.pointsTable[findIndex2].draw+1+(s1.pointsTable[findIndex2].won)
      }
          
        this.setState(s1)
    }

    updtPntTblWngCasT2=(score1, score2)=>{
        let s1 = { ...this.state }

        let findIndex2 = s1.pointsTable.findIndex((elem) => elem.team === s1.team1)
        s1.pointsTable[findIndex2].played = s1.pointsTable[findIndex2].played + 1
        s1.pointsTable[findIndex2].lost = s1.pointsTable[findIndex2].lost + 1
        s1.pointsTable[findIndex2].goalsFor = s1.pointsTable[findIndex2].goalsFor + score1
        s1.pointsTable[findIndex2].goalsAgainst = s1.pointsTable[findIndex2].goalsAgainst + score2  
        if(s1.pointsTable[findIndex2].won!==0){
            s1.pointsTable[findIndex2].points=s1.pointsTable[findIndex2].won*3+(s1.pointsTable[findIndex2].draw)
        }
        if(s1.pointsTable[findIndex2].draw!==0){
            s1.pointsTable[findIndex2].points=s1.pointsTable[findIndex2].draw+1+(s1.pointsTable[findIndex2].won)
        }
       

        let findIndex = s1.pointsTable.findIndex((elem) => elem.team === s1.team2)
        s1.pointsTable[findIndex].played = s1.pointsTable[findIndex].played + 1
        s1.pointsTable[findIndex].won = s1.pointsTable[findIndex].won + 1
        s1.pointsTable[findIndex].goalsFor = s1.pointsTable[findIndex].goalsFor + score2
        s1.pointsTable[findIndex].goalsAgainst = s1.pointsTable[findIndex].goalsAgainst + score1
        if(s1.pointsTable[findIndex].won!==0){
            s1.pointsTable[findIndex].points=s1.pointsTable[findIndex].won*3+(s1.pointsTable[findIndex].draw)
        }
        if(s1.pointsTable[findIndex].draw!==0){
            s1.pointsTable[findIndex].points=s1.pointsTable[findIndex].draw+1+(s1.pointsTable[findIndex].won)
        }
      

        this.setState(s1)
    }

    updtPntTbldrawCas=(score1, score2)=>{
        let s1 = { ...this.state }

        let findIndex2 = s1.pointsTable.findIndex((elem) => elem.team === s1.team1)
        s1.pointsTable[findIndex2].played = s1.pointsTable[findIndex2].played + 1
        s1.pointsTable[findIndex2].goalsFor = s1.pointsTable[findIndex2].goalsFor + score1
        s1.pointsTable[findIndex2].goalsAgainst = s1.pointsTable[findIndex2].goalsAgainst + score2   
        s1.pointsTable[findIndex2].draw = s1.pointsTable[findIndex2].draw + 1
        s1.pointsTable[findIndex2].points=s1.pointsTable[findIndex2].draw * 1+(s1.pointsTable[findIndex2].points)
        
      

        let findIndex = s1.pointsTable.findIndex((elem) => elem.team === s1.team2)
        s1.pointsTable[findIndex].played = s1.pointsTable[findIndex].played + 1
        s1.pointsTable[findIndex].goalsFor = s1.pointsTable[findIndex].goalsFor + score2
        s1.pointsTable[findIndex].goalsAgainst = s1.pointsTable[findIndex].goalsAgainst + score1
        s1.pointsTable[findIndex].draw = s1.pointsTable[findIndex].draw + 1
        s1.pointsTable[findIndex].points=s1.pointsTable[findIndex].draw * 1+(s1.pointsTable[findIndex].points)
        
      
        this.setState(s1)

    }

    updatePointsTable = (score1, score2) => {
        let { team1, team2 } = this.state

        //update Points Table in Case of Winning Team 1
        if (score1 > score2) {
            this.updtPntTblWngCasT1(score1, score2)
        }else{
             //update Points Table in Case of Winning Team 2
             if (score1 < score2) {
                this.updtPntTblWngCasT2(score1, score2)
            }else{
                 //Update Points Table in Case of Draw
                 if (score1 === score2) {
                    this.updtPntTbldrawCas(score1, score2)
                }
            }
        }

    }

    handleScoreAndStatus = (score1, score2, stVal, Matches) => {
        let s1 = { ...this.state }
        s1.status = stVal
        s1.totalMatches = Matches

        let teamDtl = {}
        teamDtl.team1 = s1.team1
        teamDtl.team2 = s1.team2
        teamDtl.team1Score = score1
        teamDtl.team2Score = score2

        if (score1 > score2) {
            teamDtl.result = `${s1.team1} Won`
        } else {
            if (score1 < score2) {
                teamDtl.result = `${s1.team2} Won`
            } else {
                if (score1 === score2) {
                    teamDtl.result = `Match Draw`
                }

            }
        }
        s1.Results.push(teamDtl)
        this.updatePointsTable(score1, score2)
        this.setState(s1)
    }

    render() {
        let { totalMatches, status, Teams, team1, team2, Results, pointsTable } = this.state

        return (
            <React.Fragment>
                <Navbar Matches={totalMatches} />

                <div className="container">
                    {
                        status === 1
                            ? this.showButtons()
                            : status === 2
                                ? <React.Fragment>
                                    {this.showButtons()}
                                    <NewMatch Teams={Teams} setStatus={this.handleTeamsAndStatus} />
                                </React.Fragment>
                                : status === 3
                                    ? <StartMatches
                                        team1={team1}
                                        team2={team2}
                                        totalMatches={totalMatches}
                                        setScoreAndStatus={this.handleScoreAndStatus}
                                    />
                                    : status === 4
                                        ? <React.Fragment>
                                            {this.showButtons()}
                                            <AllMatches Results={Results} />
                                        </React.Fragment>
                                        : status === 5
                                            ? <React.Fragment>
                                                {this.showButtons()}
                                                < PointsTable pointsTable={pointsTable} />
                                            </React.Fragment>
                                            : ''
                    }
                </div>
            </React.Fragment>
        )
    }
}