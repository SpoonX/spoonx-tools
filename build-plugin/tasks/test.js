var gulp        = require('gulp');
var KarmaServer = require('karma').Server;
var server      = require('./server');
var args        = require('../args');
var paths       = require('../paths');
var assign      = Object.assign || require('object.assign');


/**
 * Run test and lint once and exit
 */
gulp.task('test', ['lint'], function(done) {
  server.start(function() {
    var karmaServer = new KarmaServer(
      assign(paths.karma, {
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }), function(exitCode) {
      server.stop(function() {
        done();

        process.exit(exitCode);
      });
    });

    karmaServer.start();
  });
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
  server.start(function() {
    var karmaServer = new KarmaServer(
      assign(paths.karma, {
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: args.once === 'true',
        browsers: [args.browser]
      }), function(exitCode) {
      server.stop(function() {
        done();

        process.exit(exitCode);
      });
    });

    karmaServer.start();
  });
});
