import React, { Component } from 'react';

class TweetCard extends Component {
    render() {
        let tweet = this.props.tweet;
        let text = (tweet.extended) ? tweet.extended.full_text : tweet.text;    

        return (
            <div className="card">
                <h4 className="user">{tweet.user}</h4>
                <div className="img-top-left"><img src={tweet.img} alt="user image"></img></div>
                <div>
                    {text}
                </div>
            </div>
        )
    }
}
// items.map((tweet, i) => { return (<li key={i}>{tweet.user}: {(tweet.extended) ? tweet.extended.full_text : tweet.text}</li>) });
export default TweetCard;