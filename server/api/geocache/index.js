const app = require('../../util/configureApi');

app.post('*', (req, res) => {
  res.status(200).json({
    result: {},
  });
});

module.exports = app;
