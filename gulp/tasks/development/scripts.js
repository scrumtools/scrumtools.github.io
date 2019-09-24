var gulp   = require('gulp');
var config = require('../../config').scripts.development;

/**
 * Copy scripts to folder
 */
gulp.task('scripts:copy', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
