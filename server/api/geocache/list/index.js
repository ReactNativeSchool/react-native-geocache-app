const app = require('../../../util/configureApi');
const connectDB = require('../../../util/db');
const Cache = require('../../../models/Cache');

app.get('*', (req, res) => {
  connectDB()
    .then(() => Cache.find())
    .then((cacheItems) => {
      res.status(200).json({
        result: cacheItems
      })
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message,
      });
    })
});

module.exports = app;
