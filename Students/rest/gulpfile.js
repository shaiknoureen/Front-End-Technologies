'use strict';
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
// var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var coveralls = require('gulp-coveralls');

gulp.task('lint', function () {
  return gulp.src('generators/!(templates)**/index.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// gulp.task('nsp', function (cb) {
//   nsp({package: path.resolve('package.json')}, cb);
// });

gulp.task('pre-test', function () {
  return gulp.src(['generators/!(templates)**/index.js'])
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', gulp.series('pre-test', function (cb) {
  var mochaErr;

  return gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec', timeout: 600000}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
}));

gulp.task('watch', function () {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('coveralls', gulp.series('test', function (cb) {
  if (!process.env.CI) {
    return cb();
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls())
    .on('end', cb);
}));

gulp.task('prepublish', function(cb) { /* nsp? */ cb() });
gulp.task('default', gulp.series('coveralls'));
