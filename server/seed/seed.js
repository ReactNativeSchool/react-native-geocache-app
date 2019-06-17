const connectDB = require("../util/db");
const Cache = require("../models/Cache");

const data = require("./data");

const seed = () => {
  connectDB()
    .then(() => Cache.find().estimatedDocumentCount())
    .then(dbCount => {
      if (dbCount > 0) {
        throw new Error("DB is not empty");
      }

      return Cache.create(data);
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("error while seeding database.", error);
    })
    .finally(() => process.exit());
};

seed();
