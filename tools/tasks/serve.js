'use strict';

var fs = require('fs');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html'
        }
    });

    gulp.watch("dist/*.js").on('change', reload);
    gulp.watch("index.html").on('change', reload);
});

