require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');;
var gzipStatic = require('connect-gzip-static');


const dataAccessAdapter = require('./src/db/dataAccessAdapter');
const databasesRoute = require('./src/routes/database');
const port = +process.env.PORT || 3000;

const app = express();

app.use(express.static('client'));

// serve gzipped static files
app.use(gzipStatic(__dirname + '/client'))

// enables cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// api routing
app.use('/databases', databasesRoute);

// serve home page
app.get('/', (req, res) => res.sendFile(__dirname + '../client/index.html'));

app.listen(port, () => {
  dataAccessAdapter.InitDB();
  console.log(`Server is listening on port ${port}!`);
});
