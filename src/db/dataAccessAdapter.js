const mongoClient = require('mongodb').MongoClient;

const config = require('../../config.js');

class DataBase {
  constructor() {}

  static GetDB() {
    if (typeof DataBase.mongo === 'undefined') {
      DataBase.InitDB();
    }
    return DataBase.mongo;
  }

  static InitDB() {
    const connectTo = config.connectTo;
    const dbConfig = config.connections[connectTo];
    if (!dbConfig) {
      dbConfig = {
        url: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
        options: {}
      };
    }
    console.log('Connecting to mongoDB...');
    mongoClient.connect(dbConfig.url, { useUnifiedTopology: true })
      .then(client => {
        if (!client) {
          console.log('Failed to connect mongoDB -  no client');
          process.exit();
        }
        else {
          console.log('Connected to mongoDB!!');
          DataBase.mongo = client;
        }
      }).catch(err => {
        console.log(`Failed to connect mongoDB - ${err}`);
        process.exit();
      });
  }

  static ConnectToDb(dbName) {
    return this.GetDB().db(dbName);
  }

  static ConnectToCollection(dbName, collectionName) {
    return this.GetDB().db(dbName).collection(collectionName);
  }

  static Disconnect () {
    return this.GetDB().close();
  }
}

module.exports = DataBase;