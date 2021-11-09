import React, { Component } from "react"

class LeftPanelOptions extends Component {

    state = {
        filter: {
            desg: '',
            Finance: '',
            Tecnology: '',
            Operaton: '',
            HR: ''
        }
    }

    handleChange = (e) => {
        const { currentTarget: input } = e
        let s1 = { ...this.state }
        input.type === "checkbox"
            ? (s1.filter[input.name] = input.checked)
            : s1.filter[input.name] = input.value
        this.setState(s1)
    }

    render() {
        let { desg, Finance, Tecnology, Operaton, HR } = this.state
        return (
            <React.Fragment>
                <h6>Designation</h6>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="desg"
                        value="manager"
                        onChange={this.handleChange}
                        checked={desg === "manager"}

                    />
                    <label class="form-check-label">
                        Manager
                    </label>
                </div>

                <br />

                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="desg"
                        value="trainee"
                        onChange={this.handleChange}
                        checked={desg === "trainee"}

                    />
                    <label class="form-check-label">
                        Trainee
                    </label>
                </div>

                <br />

                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="desg"
                        value="president"
                        onChange={this.handleChange}
                        checked={desg === "president"}
                    />
                    <label class="form-check-label">
                        President
                    </label>
                </div>

                <h6>Department</h6>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Finance"
                        onChange={this.handleChange}
                        checked={Finance}
                    />
                    <label className="form-check-label">
                        Finance
                    </label>
                </div>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Tecnology"
                        onChange={this.handleChange}
                        checked={Tecnology}
                    />
                    <label className="form-check-label">
                        Tecnology
                    </label>
                </div>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="Operaton"
                        onChange={this.handleChange}
                        checked={Operaton}
                    />
                    <label className="form-check-label">
                        Operaton
                    </label>
                </div>

                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="HR"
                        onChange={this.handleChange}
                        checked={HR}
                    />
                    <label className="form-check-label">
                        HR
                    </label>
                </div>


            </React.Fragment>
        )
    }

}

export default LeftPanelOptions