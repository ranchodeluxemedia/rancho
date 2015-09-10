'use strict';

module.exports = gulp;
// Require Gulp
var gulp = require('gulp');

// Require Sass plugins
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

// Require JS plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');

// Require Image plugins
var imagemin = require('gulp-imagemin');

// Require Utility plugins
var del = require('del');

// Gulp Sass Task
gulp.task('sass', function() {
    gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css'));
});

// Delete plugins.js before we start this hootnanny...
gulp.task('clean', function() {
    del.sync(['./assets/js/plugins.js']);
});

// Gulp JS Task
gulp.task('js', function() {
  gulp.src('./assets/js/plugins/**/*.js')
    // .pipe(jshint())
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('jshint-stylish'))
    // .pipe(uglify({ comments: true }))
    .pipe(concat('plugins.js'))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/js'));
});

// Gulp Image Task
gulp.task('image', function() {
  gulp.src('./assets/images/**/*.{png, jpg, gif}')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest('./assets/images'))
});

// Gulp Watch Task
gulp.task('watch', function() {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
    gulp.watch('./assets/js/**/*.js', ['js']);
});

// Default Task
gulp.task('default', ['sass', 'clean', 'js', 'image', 'watch']);