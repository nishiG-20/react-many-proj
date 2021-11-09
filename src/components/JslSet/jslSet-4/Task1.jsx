import React, { Component } from "react"

class MyComp1 extends Component {

    state = {

        secA: [
            { roll: 1, sec: "A", name: "Jack", maths: 67, eng: 71, comp: 61 },
            { roll: 2, sec: "A", name: "Mary", maths: 79, eng: 74, comp: 51 },
            { roll: 3, sec: "A", name: "Steve", maths: 61, eng: 78, comp: 46 },
            { roll: 4, sec: "A", name: "Bob", maths: 75, eng: 67, comp: 68 },
            { roll: 5, sec: "A", name: "Kathy", maths: 70, eng: 63, comp: 74 },
            { roll: 6, sec: "A", name: "Meg", maths: 46, eng: 61, comp: 63 },
            { roll: 7, sec: "A", name: "Tom", maths: 72, eng: 85, comp: 65 },
            { roll: 8, sec: "A", name: "David", maths: 85, eng: 71, comp: 85 }
        ],

        secB: [
            { roll: 1, sec: "B", name: "Arthur", maths: 67, eng: 55, comp: 78 },
            { roll: 2, sec: "B", name: "Kevin", maths: 69, eng: 64, comp: 68 },
            { roll: 3, sec: "B", name: "Harry", maths: 61, eng: 88, comp: 80 },
            { roll: 4, sec: "B", name: "Martin", maths: 65, eng: 60, comp: 48 },
            { roll: 5, sec: "B", name: "Pam", maths: 80, eng: 53, comp: 54 },
            { roll: 6, sec: "B", name: "Nicky", maths: 76, eng: 71, comp: 83 },
            { roll: 7, sec: "B", name: "Robert", maths: 82, eng: 65, comp: 75 },
            { roll: 8, sec: "B", name: "Susan", maths: 65, eng: 81, comp: 50 }
        ],

        click: -1,
        arr: [],
        hd: ''
    }


    secAbyTotal = () => {
        let s1 = { ...this.state }
        s1.click = 0
        s1.hd = 'Performance Report for Section A - Sorted by Total'
        s1.arr = s1.secA
        s1.arr.sort((m1, m2) => (m2.maths + m2.eng + m2.comp) - (m1.maths + m1.eng + m1.comp))
        this.setState(s1)
    }


    secBbyTotal = () => {
        let s1 = { ...this.state }
        s1.click = 1
        s1.hd = 'Performance Report for Section B - Sorted by Total'
        s1.arr = s1.secB
        s1.arr.sort((m1, m2) => (m2.maths + m2.eng + m2.comp) - (m1.maths + m1.eng + m1.comp))
        this.setState(s1)
    }


    allSecbyTotal = () => {
        let s1 = { ...this.state }
        s1.click = 2
        s1.hd = 'Performance Report for All Sections - Sorted by Total'
        let tempArr = [...s1.secA, ...s1.secB]
        s1.arr = tempArr
        s1.arr.sort((m1, m2) => (m2.maths + m2.eng + m2.comp) - (m1.maths + m1.eng + m1.comp))
        this.setState(s1)
    }


    SecAbyName = () => {
        let s1 = { ...this.state }
        s1.click = 3
        s1.hd = 'Performance Report for Section A - Sorted by Name'
        s1.arr = s1.secA
        s1.arr.sort((n1, n2) => n1.name.localeCompare(n2.name))
        this.setState(s1)
    }


    SecBbyName = () => {
        let s1 = { ...this.state }
        s1.click = 4
        s1.hd = 'Performance Report for Section B - Sorted by Name'
        s1.arr = s1.secB
        s1.arr.sort((n1, n2) => n1.name.localeCompare(n2.name))
        this.setState(s1)
    }


    AllSecByName = () => {
        let s1 = { ...this.state }
        s1.click = 5
        s1.hd = 'Performance Report for All Sections - Sorted by Name'
        let tempArr = [...s1.secA, ...s1.secB]
        s1.arr = tempArr
        s1.arr.sort((n1, n2) => n1.name.localeCompare(n2.name))
        this.setState(s1)
    }

    makeTable = () => {
        let { arr, hd, click } = this.state

        let heading =
            <h3 className="text-center my-3">
                {hd}
            </h3>

        let tableHeading =
            <div className="row bg-dark text-white">
                <div className="col border">RollNo</div>
                <div className="col border">Section</div>
                <div className="col border">Name</div>
                <div className="col border">Maths</div>
                <div className="col border">English</div>
                <div className="col border">Computer</div>
                <div className="col border">Total</div>
            </div>

        if (click >= 0) {
            return (
                <React.Fragment>
                    {heading}
                    {tableHeading}
                    {arr.map(val => {
                        let { roll, sec, name, maths, eng, comp } = val
                        return (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col border">{roll}</div>
                                    <div className="col border">{sec}</div>
                                    <div className="col border">{name}</div>
                                    <div className="col border">{maths}</div>
                                    <div className="col border">{eng}</div>
                                    <div className="col border">{comp}</div>
                                    <div className="col border">{maths + eng + comp}</div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </React.Fragment>
            )
        }

    }


    render() {
        return (
            <React.Fragment>
                <div className="container my-4">
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.secAbyTotal()}>SecA by Total</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.secBbyTotal()}>SecB by Total</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.allSecbyTotal()}>All Sec by Total</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.SecAbyName()}>SecA by Name</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.SecBbyName()}>SecB by Name</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={() => this.AllSecByName()}>All Sec by Name</button>
                        </div>
                    </div>
                    {this.makeTable()}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComp1