const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const databasesRoute = require('./src/database');
const config = require('./config.json');
const port = 3000;

const app = express();

app.use(express.static('client'))
app.get('/', (req, res) => res.sendFile(__dirname + '../client/index.html'));

// enables cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// api routing
app.use('/databases', databasesRoute);

app.listen(port, () => {

  console.log(`Server is listening on port ${port}!`);

  const connectTo = config.connectTo;
  const dbConfig  = config.connections[connectTo];
  if (!dbConfig) {
    dbConfig = {
      url: 'mongodb://localhost:27017',
      options: {}
    };
  }

  console.log('Connecting to mongoDB...');

  mongoClient.connect(dbConfig.url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log(`Failed to connect mongoDB - ${err}`);
      // return app.close();
    } else {
      console.log('Connected to mongoDB!!');
      app.mongo = client;
    }
  });
});