const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const Cache = require("../../models/Cache");

app.post("*", (req, res) => {
  connectDB()
    .then(() => {
      return Cache.create(req.body);
    })
    .then(cacheItem => {
      res.status(200).json({
        data: cacheItem
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err.message
      });
    });
});

module.exports = app;
