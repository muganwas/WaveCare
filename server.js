require('dotenv').config();
require('rootpath')();
const livereload = require('livereload');
const connectLiveReload = require("connect-livereload");
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//const httpServer = require('http').createServer({}, app);
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : (process.env.PORT || 8080);

/** middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/** controllers */
app.use('/', require('./controllers/default.controller'));
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV !== 'production') {
    const livereloadServer = livereload.createServer();
    livereloadServer.watch(__dirname + "/public");
    livereloadServer.server.once("connection", () => {
        setTimeout(() => {
            livereloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

app.listen(PORT, function () {
    console.log('Server listening on port: ' + PORT);
});
