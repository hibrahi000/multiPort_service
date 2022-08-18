import {MongoClient} from 'mongodb';

const Db = process.env.mongoURI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let userDb = undefined;

export const connectToServer = (callback) => {
  client.connect(function(err, db) {
    // Verify we got a good "db" object
    if (db) {
      userDb = db.db('user');
      console.log('Successfully connected to MongoDB...');
    }
    return callback(err);
  });
};

export const getUserDb = () => {
  return userDb;
};
