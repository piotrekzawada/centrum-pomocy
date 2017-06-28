var gulp = require('gulp'),
    concatJs = require('gulp-concat'),
    sass = require('gulp-sass');


gulp.task('helpcenter-sass', function () {
    return gulp.src(['webpage/sass/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concatJs('hc.css'))
        .pipe(gulp.dest('webpage/css'));
});

gulp.task('sass', function() {
    return gulp.src('hc/sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('hc/css'))
})

//Watch task
gulp.task('helpcenter-sass:watch',function() {
    gulp.watch('webpage/sass/**/*.scss',['helpcenter-sass']);
});

gulp.task('sass:watch',function() {
    gulp.watch('hc/sass/**/*.scss',['sass']);
});




