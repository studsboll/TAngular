﻿var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gutil');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var batch = require('gulp-batch');

// Less
gulp.task('less', function () {
    return gulp.src(['./Static/src/less/*.less', '!/**/_*.less'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(less())
        .pipe(gulp.dest("./Static/css"))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./Static/css"))
        .pipe(notify({ onLast: true, message: 'Compiled Less' }));
});

gulp.task('scripts:ts', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './Static/js/ts/application.js',
        debug: true
    });

    return b.bundle()
      .pipe(source('application.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest("./Static/js"))
      .pipe(notify({ onLast: true, message: 'Compiled Scripts' }));
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src(['./bower_components/font-awesome/fonts/*'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(gulp.dest("./Static/fonts"))
        .pipe(notify({ onLast: true, message: 'Copied Fonts.' }));
});


// Default build. Run to make sure all scripts, css and fonts are compiled and on right spot.
gulp.task('default', ["less", "scripts:ts", "fonts"], function () {
    return gutil.log('Done compiling less, building script and copying fonts.');
});

// Watch tasks
gulp.task('watch:less', function () {
    watch('./Static/src/less/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
});

gulp.task('watch:scripts_ts', function () {
    watch('./Static/js/ts/**/*.js', batch(function (events, done) {
        gulp.start('scripts:ts', done);
    }));
});