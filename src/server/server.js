const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.json());

app.get("/tweeter/test", (req, res) => {
    res.send("tweeter server is up");
});

require('./routes/tweets.js')(app, io);

server.listen(port, () => {
    console.log('tweeter api server is up');
});