const app = require('../../../util/configureApi');

app.put('*', (req, res) => {
  res.status(200).json({
    result: {},
  });
});

module.exports = app;
