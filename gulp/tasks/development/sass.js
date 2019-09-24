'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browsersync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sassConfig      = require('../../config').sass.development;
var autoprefixerConfig      = require('../../config').sass.autoprefixer;


/**
 * Compile sass files
 */
gulp.task('sass:build', function() {

  var sassOptions = sassConfig.sassOptions;

  // @todo: works only with gulp-ruby-sass?
  //sassOptions.onError = browsersync.notify;

  // notify browser sync that we're compiling sass
  browsersync.notify('Compiling Sass...');

  return gulp
              // source files
              .src(sassConfig.src)

              // compile using sass
              .pipe(sass(sassOptions).on('error', sass.logError))

              // route result through autoprefixer (add vendor prefixes in css)
              // See: https://www.npmjs.com/package/gulp-autoprefixer
              .pipe(autoprefixer(autoprefixerConfig))

              // destination
              .pipe(gulp.dest(sassConfig.dest));
});

gulp.task('sass:rebuild', ['sass:build'], function() {
  browsersync.reload();
});


