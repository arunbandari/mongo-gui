const app = require('express')();
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const databasesRoute = require('./database');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// api routing
app.use('/databases', databasesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  const url = 'mongodb://localhost:27017';
  mongoClient.connect(url, function(err, client) {
    if (!err) {
      console.log(`Example app listening on port ${port}!`);
      app.mongo = client;
    }
  });
});