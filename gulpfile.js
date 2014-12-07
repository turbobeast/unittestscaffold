var gulp = require('gulp');
var karma = require('karma');
var browserify = require('browserify');


gulp.task('watch', function() {
  return karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  });
});

gulp.task('test', function () {
  return karma.server.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });
});

gulp.task('default', ['css', 'js']);
