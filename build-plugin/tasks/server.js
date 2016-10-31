var app        = require('express')();
var bodyParser = require('body-parser');
var cors       = require('cors');
var server;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

module.exports = {
  app: app,
  start: function(done) {
    server = app.listen(1927, done);
  },
  stop: function(cb) {
    server.close(cb);
  }
};
