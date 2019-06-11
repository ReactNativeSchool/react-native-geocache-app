const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const Cache = require("../../models/Cache");

app.get("*", (req, res) => {
  connectDB()
    .then(() => {
      return Cache.find();
    })
    .then(cacheItems => {
      res.status(200).json({
        data: cacheItems
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err
      });
    });
});

module.exports = app;
