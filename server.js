#!/usr/bin/env node

const cors = require('cors');
const argv = require('minimist')(process.argv.slice(2));
const express = require('express');
const bodyParser = require('body-parser');
const gzipProcessor = require('connect-gzip-static');
const updateNotifier = require('update-notifier');


const dataAccessAdapter = require('./src/db/dataAccessAdapter');
const databasesRoute = require('./src/routes/database');

// notify users on new releases - https://github.com/arunbandari/mongo-gui/issues/5
const pkg = require('./package.json');
updateNotifier({ pkg }).notify();

// initialize app
const app = express();

// serve static files form client/public
app.use(express.static('client/public'));

// process gzipped static files
app.use(gzipProcessor(__dirname + '/client/public'));

// enables cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// api routing
app.use('/databases', databasesRoute);

// serve home page
app.get('/', (req, res) => res.sendFile(__dirname + '../client/public/index.html'));

// connect to database
dataAccessAdapter.InitDB(app);

// listen on :port once the app is connected to the MongoDB
app.once('connectedToDB', () => {
  const port = argv.p || process.env.PORT || 4321;
  app.listen(port, () => {
    console.log(`> Access Mongo GUI at http://localhost:${port}`);
  });
})

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  const error = {
    errmsg: err.errmsg,
    name: err.name,
  };
  return res.status(500).send(error);
});
