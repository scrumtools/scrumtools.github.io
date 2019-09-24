var gutil  = require( 'gulp-util' );

// root folder configuration for gulp tasks
var app              = './app';

var build            = './build';
var development      = './build/development';
var production       = './build/production';
var node             = './node_modules/ert-webstyle';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, app]
      },
      port: 9999,
      files: [
        app + '/scss/**/*.scss',
        app + '/js/**/*.js',
        app + '/img/**',
        app + '/fonts/**'
      ]
    }
  },
  watch: {
    sass: [
      app + '/scss/**/*'
    ],
    html: app + '/html/**/*.*',
    theme: app + '/theme/**/*.*',
    scripts: app + '/js/**/*.js',
    images:  app + '/img/**/*',
    fonts:   app + '/fonts/**/*'
  },
  html: {
    src:  app + '/html/**/*.*',
    dest: development + '/'
  },
  images: {
    src:  node + '/images/**/*',
    dest: development + '/images'
  },
  fonts: {
    development: {
      src: node + '/fonts/**/*',
      dest: development + '/fonts'
    }
  },
  scripts: {
    development: {
      src:  node + '/js/**/*',
      dest: development + '/js'
    }
  },
  sass: {
    development: {
      src:  app + '/scss/**/*',
      dest: development + '/css',
      options: {
      }
    },
    production: {
      src:  app + '/scss/**/*',
      dest: production + '/css',
      options: {
        sourceComments: false,
        outputStyle: 'compressed',
      }
    },
    autoprefixer: {
      browsers: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ],
      cascade: true
    }
  },
  cleanup: {
    folder: development,
  }
};
