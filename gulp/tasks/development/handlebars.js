'use strict';

var gulp        = require('gulp');
var hb          = require('gulp-hb');
var rename      = require('gulp-rename');
var config      = require('../../config').handlebars;
var browsersync = require('browser-sync');
var tap         = require('gulp-tap');

/**
 * Compile handlebars files
 */
gulp.task('handlebars:build', function () {
  // notify browser sync that we're compiling handlebars
  browsersync.notify('Compiling Handlebars...');

  var hbStream = hb()
        // Partials
        .partials(config.srcPartials)
        .partials(config.srcTheme)
        .partials(config.srcUtils)
        // special handling for documentation partials
        // the partials under folders "demos" and "views" will be accessible including the root folder.
        // For example: 
        // Partial .../demos/partial.hbs would be accessible via "demo/partial" in handlebars and not as usual just "partial"
        
        // Helpers
        .helpers(require('handlebars-layouts'))
        //.helpers(require('../helpers/handlebars'))

        // Currently unused, see https://www.sitepoint.com/using-inline-partials-and-decorators-with-handlebars-4-0/
        // Decorators
        //    .decorators('./decorators/**/*.js')
        //    .decorators({
        //        baz: function () { ... },
        //        qux: function () { ... }
        //    })

        // Data
        .data(config.srcData)
        ;

    // process templates
    return gulp.src(config.src)
        .pipe(tap(function(file) {
                var contents = file.contents.toString();
        }))
        .pipe(hbStream)
        .pipe(rename(function (path) {
            path.extname = ".html"
        }))
        .pipe(gulp.dest(config.dest));
});

gulp.task('handlebars:rebuild', ['handlebars:build'], function() {
    browsersync.reload();
  });