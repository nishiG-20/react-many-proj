import React, { Component } from "react"

class Favourites extends Component {

    state = {}

    render() {
        let { FavPics, RmvFromFav, Index } = this.props
        return (
            <div className="col-1" onClick={() => RmvFromFav(Index)}>
                <img src={FavPics} style={{ width: "50px" }} alt="" />
            </div>
        )
    }
}

export default Favourites