var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 'scripts',
      'fonts:copy',
      'scripts:copy',
      'theme:copy',
 */
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    'mkdir',
    [
      'images:copy',
      'fonts:copy',
      'scripts:copy',
      'html:copy',
      'sass:build',
    ],
  callback);
});
