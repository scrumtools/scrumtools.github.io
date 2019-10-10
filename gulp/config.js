var gutil  = require( 'gulp-util' );

// root folder configuration for gulp tasks
var app              = './app';

var build            = './build';
var assets           = '/assets';
var hb               = '/hb';
var development      = './build';
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
        app + '/images/**',
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
    images:  app + '/images/**/*',
    fonts:   app + '/fonts/**/*'
  },
  html: {
    src:  app + '/html/**/*.*',
    dest: development + '/'
  },
  handlebars: {
    src: app + hb+ '/views/**/*.{hb,hbs,html,handlebars}',
    srcPartials: [app + hb + '/partials/**/*.{hbs,js}'],
    srcTheme: [app + hb + '/theme/**/*.{hbs,js}'],
    srcUtils: [app + hb + '/utils/**/*.{hbs,js}'],
    srcData: [app + hb + '/data/**/*.json' ],   
    dest: development + '/'
  },
  images: {
    src:  app + '/images/**/*',
    dest: development + assets + '/images'
  },
  fonts: {
    development: {
      src: app + '/fonts/**/*',
      dest: development + assets + '/fonts'
    }
  },
  scripts: {
    development: {
      src:  app + '/js/**/*',
      dest: development + assets + '/js'
    }
  },
  sass: {
    development: {
      src:  app + '/scss/**/*',
      dest: development + assets + '/css',
      options: {
      }
    },
    production: {
      src:  app + '/scss/**/*',
      dest: build + assets + '/css',
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
