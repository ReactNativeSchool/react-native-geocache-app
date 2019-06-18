const app = require('../../../util/configureApi');

app.get('*', (req, res) => {
  res.status(200).json({
    result: [],
  });
});

module.exports = app;
