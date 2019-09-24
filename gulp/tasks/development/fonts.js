var gulp   = require('gulp');
var config = require('../../config').fonts.development;

/**
 * Copy fonts to app and build folder
 */
gulp.task('fonts:copy', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});