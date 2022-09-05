const functions = require("firebase-functions");

const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Hello World!');
    });

const port = 3000;
const server = app.listen(port, () => {
        console.log('listening on port %s.\n', server.address().port);
    });

module.exports = app;

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});