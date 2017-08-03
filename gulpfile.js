var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var livereload = require('gulp-livereload');

// 编译less
gulp.task('less', () => {
    gulp.src('src/*/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
});

// 编译es6
gulp.task('es6', () => {
    gulp.src('src/*/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

// 拷贝 html
gulp.task('html', () => {
    gulp.src('src/*/*.html')
        .pipe(gulp.dest('dist'));
});

// eslint 检查语法
gulp.task('eslint', () => {
    gulp.src('src/js/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

// livereload
gulp.task('livereload', () => {
    gulp.src('dist/*/**')
        .pipe(livereload());
});

// watch 任务
gulp.task('default', ['html', 'less', 'es6'], () => {
    livereload.listen();
    gulp.watch('src/*/*.html', ['html']);
    gulp.watch('src/*/*.js', ['es6']);
    gulp.watch('src/*/*.less', ['less']);
    gulp.watch('dist/*/**', ['livereload']);
});