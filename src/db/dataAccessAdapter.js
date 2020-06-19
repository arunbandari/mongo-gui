const mongoClient = require('mongodb').MongoClient;

class DataBase {
  constructor() {}

  static GetDB() {
    if (typeof DataBase.mongo === 'undefined') {
      DataBase.InitDB();
    }
    return DataBase.mongo;
  }

  static InitDB() {
    const url = process.argv[2] || 'mongodb://localhost:27017';

    console.log('Connecting to mongoDB...');
    mongoClient.connect(url, { useUnifiedTopology: true })
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