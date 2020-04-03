const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
let isConnected;

// const DB_URL =
//   "mongodb+srv://admin:HBLDemo@cluster0-5eefd.mongodb.net/test?retryWrites=true&w=majority";
const DB_URL =
  "mongodb+srv://test:HBLDEMO@cluster0-5eefd.mongodb.net/test?retryWrites=true&w=majority";

const connectToDatabase = () => {
  if (isConnected) {
    console.log("Use existing database connection.");
    return Promise.resolve();
  }

  console.log("Using new database connection.");
  return mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => {
      isConnected = db.connections[0].readyState;
    });
};

module.exports = connectToDatabase;
