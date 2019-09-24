var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.sass, ['sass:rebuild']);
  gulp.watch(config.scripts, ['scripts:copy']);
  gulp.watch(config.images, ['images:copy']);
  gulp.watch(config.html, ['html:rebuild']);
  gulp.watch(config.fonts, ['fonts:copy']);
});
