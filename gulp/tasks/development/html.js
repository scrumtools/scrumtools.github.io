var gulp        = require('gulp');
var changed     = require('gulp-changed');
var browsersync = require('browser-sync');
var config      = require('../../config').html;

/**
 * Copy html to build folder
 * if not changed
 */
gulp.task('html:copy', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});

gulp.task('html:rebuild', ['html:copy'], function() {
  browsersync.reload();
});
