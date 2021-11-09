import React, { Component } from "react"
import PicViewer from './picViewer'
import Favourites from './favorites'

class MainComponent extends Component {

    state = {
        pics: [
            "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        favorites: [],
        currentIndex: 0
    }

    displayNextImage = () => {
        let s1 = { ...this.state }
        s1.currentIndex++
        if (s1.currentIndex === s1.pics.length) {
            s1.currentIndex = 0
        }
        this.setState(s1)
    }

    displayPreviousImage = () => {
        let s1 = { ...this.state }
        s1.currentIndex--
        if (s1.currentIndex === -1) {
            s1.currentIndex = s1.pics.length - 1
        }
        this.setState(s1)
    }

    addToFavourites = (index) => {
        let s1 = { ...this.state }
        let findIndex = s1.favorites.findIndex(pic => pic === s1.pics[index])
        if (findIndex === -1) {
            s1.favorites.push(s1.pics[index])
        }
        this.setState(s1)
    }

    //Remove From Favourites
    rmvFmFav = (index) => {
        let s1 = { ...this.state }
        s1.favorites.splice(index, 1)
        this.setState(s1)
    }

    render() {
        let { pics, currentIndex, favorites } = this.state
        return (
            <div className="container my-4">
                < PicViewer Picture={pics[currentIndex]} Index={currentIndex} AddToFavourites={this.addToFavourites} />
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => this.displayPreviousImage()}>Previous</button>
                        <button type="button" className="btn btn-primary float-end" onClick={() => this.displayNextImage()}>Next</button>
                    </div>
                </div>

                {(favorites.length === 0) ? '' : (
                    <div className="row">
                        <h3>My Favourites</h3>
                        {favorites.map((favPics, index) => {
                            return <Favourites FavPics={favPics} RmvFromFav={this.rmvFmFav} Index={index} />
                        })}
                    </div>
                )}
            </div>
        )
    }
}

export default MainComponent