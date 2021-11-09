import React, { Component } from "react"

class SocialMediaPost extends Component {
    state = {}
    //  { postId, heading, postedBy, numOfLikes: 66, numOfShares: 24, txt: "Is this Dhoni's final match. Will be ever see Dhoni playing for India." }
    render() {
        let { Post, OnIncLike, OnIncShare } = this.props
        let { postId, heading, postedBy, numOfLikes, numOfShares, txt } = Post
        return (
            <React.Fragment>
                <div className="row bg-light">
                    <div className="col border">
                        <h4>{heading}</h4>
                        <b>Shared By: {postedBy}</b>
                        <br />
                        <span>{txt}</span>
                        <br />
                        <span>
                            Likes: {numOfLikes}
                            <button type="button" className="btn btn-primary mx-2 mb-2" onClick={() => OnIncLike(postId)}>Likes</button>
                            Shared: {numOfShares}
                            <button type="button" className="btn btn-primary mx-2 mb-2" onClick={() => OnIncShare(postId)}>Share</button>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SocialMediaPost