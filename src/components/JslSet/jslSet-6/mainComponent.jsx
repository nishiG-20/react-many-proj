import React, { Component } from "react"
import SocialMediaPost from './socialMediaPost'

class MainComponent extends Component {
    state = {
        posts: [
            { postId: 255, heading: "World Cup Semi-final", postedBy: "Vishal", numOfLikes: 45, numOfShares: 10, txt: "India lost to New Zealand in the world cup. Very Bad." },
            { postId: 377, heading: "What a final", postedBy: "Mohit", numOfLikes: 18, numOfShares: 4, txt: "Was anyone awake to see the final. England won by boundary count." },
            { postId: 391, heading: "Was it 5 runs on 6 six runs", postedBy: "Preeti", numOfLikes: 29, numOfShares: 7, txt: "I feed sorry for New Zealand. If the ball had not hit the bat and no overthrows, New Zealand would have won." },
            { postId: 417, heading: "Will Dhoni retire", postedBy: "Hemant", numOfLikes: 66, numOfShares: 24, txt: "Is this Dhoni's final match. Will be ever see Dhoni playing for India." }
        ]
    }

    incLikes = (id) => {
        let s1 = { ...this.state }
        //Find Index By Id
        let findIndex = s1.posts.findIndex(elem => elem.postId === id)
        s1.posts[findIndex].numOfLikes++
        this.setState(s1)
    }

    incShare = (id) => {
        let s1 = { ...this.state }
        let findIndex = s1.posts.findIndex(elem => elem.postId === id)
        s1.posts[findIndex].numOfShares++
        this.setState(s1)
    }

    render() {
        let { posts } = this.state
        return (
            <React.Fragment>
                <div className="container my-2">
                    {posts.map(post => {
                        return (
                            <SocialMediaPost Post={post} OnIncLike={this.incLikes} OnIncShare={this.incShare} />
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default MainComponent