import React, { Component } from "react"

class PicViewer extends Component {

    state = {}

    render() {
        let { Picture, Index, AddToFavourites } = this.props
        return (
            <div className="row text-center border bg-light">
                <div className="col m-2">
                    <img src={Picture} alt="" />
                    <br />
                    <button type="button" className="btn btn-primary my-2" onClick={() => AddToFavourites(Index)}>Add to Favourites</button>
                </div>
            </div>
        )
    }
}

export default PicViewer