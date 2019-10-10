var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 'scripts',
      'fonts:copy',
      'scripts:copy',
      'theme:copy',
 */


 // add handlebars build
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    'mkdir',
    [
      'images:copy',
      'fonts:copy',
      'scripts:copy',
      //'html:copy',
      'handlebars:build',
      'sass:build',
    ],
  callback);
});

// Add minification for images, css and scripts
gulp.task('build:production', function(callback) {
  runSequence(
    'delete',
    'mkdir',
    [
      'images:copy',
      'fonts:copy',
      'scripts:copy',
      //'html:copy',
      'handlebars:build',
      'sass:build:production',
    ],
  callback);
});
