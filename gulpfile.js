var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('less', () => {
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('es6', () => {
    gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['less', 'es6'], () => {
    gulp.watch('src/js/**.js', ['es6']);
    gulp.watch('src/styles/*.less', ['less']);
});