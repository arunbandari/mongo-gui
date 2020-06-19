const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');;
var gzipStatic = require('connect-gzip-static');


const dataAccessAdapter = require('./src/db/dataAccessAdapter');
const databasesRoute = require('./src/routes/database');
const port = 4321;

const app = express();

// serve static files form client/public
app.use(express.static('client/public'));

// process & serve gzipped static files
app.use(gzipStatic(__dirname + '/client/public'));

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

// listen application on port:4321
app.listen(port, () => {
  dataAccessAdapter.InitDB();
  console.log(`Access Mongo GUI at http://localhost:${port}!`);
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  const error = {
    errmsg: err.errmsg,
    name: err.name,
  };
  res.status(500).send(error);
});
