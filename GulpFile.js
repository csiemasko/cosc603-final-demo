var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')
var b = require('gulp-browserify')

gulp.task('views', () => {
return gulp.src('src/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'))
});

gulp.task('js', () => {
return gulp.src('src/js/main.js')
        .pipe(b())
        .pipe(gulp.dest('./dist'))
});

gulp.task('style', () => {
    return gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'))
})
gulp.task('default', ['views','js','style'])