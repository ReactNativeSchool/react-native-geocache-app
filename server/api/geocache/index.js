const app = require('../../util/configureApi');
const Cache = require('../../models/Cache');
const connectDB = require('../../util/db');

app.post('*', (req, res) => {
  connectDB()
    .then(() => {
      return Cache.create(req.body);
    })
    .then((cacheItem) => {
      res.status(200).json({
        result: cacheItem,
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message,
      });
    });
});

module.exports = app;
