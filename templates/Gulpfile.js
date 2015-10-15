var gulp = require('gulp'),
  sass = require('gulp-sass');
  browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch(['./**/*.html','js/main.js', 'js/plugins.js', 'css/styles.css'], ['reload']);
});

gulp.task('default', ['serve']);
