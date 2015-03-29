'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    sourcemaps = require('gulp-sourcemaps'),
    urlAdjuster = require('gulp-css-url-adjuster'),
    ngAnnotate = require('gulp-ng-annotate'),
    bower = require('gulp-bower');

var path = {
    dist: {
        js: 'web_music_player/static/js/',
        css: 'web_music_player/static/css/',
        img: 'web_music_player/static/images/'
    },
    src: {
        js: 'front/js/**/*.js',
        style: 'front/scss/*.scss',
        img: 'front/images/**/*.*'
    },
    watch: {
        js: 'front/js/**/*.js',
        style: 'front/scss/*.scss',
        img: 'front/images/**/*.*'
    },
    clean: './web_music_player/static'
};

gulp.task('js:build', function () {
    gulp.src([path.src.js, '!front/js/pages/**/*.spec.js', '!front/js/components/**/*.spec.js']) //Найдем наш main файл
        .pipe(ngAnnotate())
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)); //Выплюнем готовый файл в dist

    gulp.src("front/js/components/**/*.spec.js")
        .pipe(gulp.dest('web_music_player/static/js/components'));

    gulp.src("front/js/components/**/*.html")
        .pipe(gulp.dest('web_music_player/static/js/components'));

    gulp.src("front/js/pages/**/*.spec.js")
        .pipe(gulp.dest('web_music_player/static/js/pages'));

    gulp.src("front/js/pages/**/*.html")
        .pipe(gulp.dest('web_music_player/static/js/pages'));

    gulp.src("front/js/partials/*.html")
        .pipe(gulp.dest('web_music_player/static/js/partials'));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(urlAdjuster({prependRelative: '../images/'}))
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css)); //И в dist
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(gulp.dest(path.dist.img)); //И бросим в dist
});

gulp.task('watch', function(){
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('build', [
    'js:build',
    'image:build',
    'style:build'
]);

gulp.task('default', ['build', 'watch']);