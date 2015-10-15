var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    port : '1881',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src(['./**/*.html'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./**/*.html','js/main.js', 'js/plugins.js', 'css/styles.css'], ['reload']);
});

gulp.task('default', ['connect', 'watch', 'sass:watch']);
