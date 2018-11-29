import React from 'react';
import socketIOClient from "socket.io-client";
import TweetCard from './TweetCard';

class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], searchTerm: "Vuelta" };
        /* 
                this.handleChange = this.handleChange.bind(this);
                this.handleKeyPress = this.handleKeyPress.bind(this);
                this.handleResume = this.handleResume.bind(this);
                this.handlePause = this.handlePause.bind(this); */
    }

    componentDidMount() {
        const socket = socketIOClient('http://localhost:5000/');

        socket.on('connect', () => {
            console.log("Socket Connected");
            socket.on("tweets", data => {
                console.info(data);
                let newList = [data].concat(this.state.items.slice(0, 7));
                this.setState({ items: newList });
            });
        });
        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners("tweets");
            console.log("Socket Disconnected");
        });
    }

    render() {
        let items = this.state.items;
        // console.log("items count: ", items.length)

        if (items.length < 1) {
            return (<div> Loading </div>);
        }

        let tweetRender = items.map((tweet, i) => {
            return (<TweetCard key={i} tweet={tweet} />)
        })

        return (
            <div>
                {tweetRender}
            </div>
        )
    }
}

export default TweetList;