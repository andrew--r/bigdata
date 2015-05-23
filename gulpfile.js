/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
* npm link gulp && npm link browser-sync && npm link gulp-stylus && npm link gulp-autoprefixer && npm link gulp-uglify && npm link gulp-rename && npm link gulp-concat
**/
var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var stylus       = require('gulp-stylus');
var prefix       = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");
var concat       = require('gulp-concat');



/*
*
* Styles compilation and prefixing
*
**/
gulp.task('stylus', function() {
  gulp.src('./assets/stylus/main.styl')
  .pipe(stylus({ compress:  true }))
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(prefix('last 3 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
  .pipe(gulp.dest('./static/css'));
});


/*
*
* Scripts minification
*
**/

gulp.task('scripts', function() {
  gulp.src('./assets/js/*.js')
  .pipe(uglify())
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./static/js'))
});

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync.init(['static/css/*.css', 'static/js/**/*.js', 'index.html'], {
    server: {
      baseDir: './'
    }
  });
});



/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/
gulp.task('default', ['browser-sync', 'stylus'], function () {
  gulp.watch('assets/stylus/**/*.styl', ['stylus']);
  gulp.watch('assets/js/**/*.js', ['scripts']);
});