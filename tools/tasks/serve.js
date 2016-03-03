'use strict';

var fs = require('fs');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');

gulp.task('serve', ['build'], function() {
    var bundler = webpack(webpackConfig);
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html'
        }
    });

    gulp.watch("dist/*.js").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
});

