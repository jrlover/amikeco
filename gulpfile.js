var gulp = require('gulp');
var express = require('express');
var selenium = require('selenium-standalone');
var webdriver = require('gulp-webdriver');

var httpServer;

gulp.task('http', function(done) {
  var app = express();
  app.use(express.static('./public'));
  httpServer = app.listen(3000, done);
});

gulp.task('selenium', function (done) {
    selenium.install({
        logger: function (message) { }
    }, function (err) {
        if (err) return done(err);

        selenium.start(function (err, child) {
            if (err) return done(err);
            selenium.child = child;
            done();
        });
    });
});

gulp.task('e2e', ['http', 'selenium'], function() {
	return gulp.src('wdio.conf.js').pipe(webdriver({
        logLevel: 'verbose',
        waitforTimeout: 10000
    })).on('error', function() {
    	if(selenium.child) selenium.child.kill();
        process.exit(1);
    });
});

gulp.task('default', ['e2e'], function() {
  if(httpServer) httpServer.close();
  if(selenium.child) selenium.child.kill();
});