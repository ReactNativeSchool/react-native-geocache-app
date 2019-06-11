const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const Cache = require("../../models/Cache");

app.put("*", (req, res) => {
  connectDB()
    .then(() => {
      return Cache.findByIdAndUpdate(req.body._id, req.body, { new: true });
    })
    .then(cacheItem => {
      res.status(200).json({
        data: cacheItem
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err
      });
    });
});

module.exports = app;
