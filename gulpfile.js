'use strict';

module.exports = gulp;

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix("last 1 version", "> 1%", "ie 8"))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', function() {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});