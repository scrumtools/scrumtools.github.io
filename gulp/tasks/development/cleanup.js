var gulp   = require('gulp');
var del    = require('del');
var mkdirp = require('mkdirp');
var config = require('../../config').cleanup;
var gutil = require('gulp-util');

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
  del.sync(config.folder, callback);
  callback();
});

gulp.task('mkdir', function(callback) {
  return mkdirp(config.folder, callback);
});
