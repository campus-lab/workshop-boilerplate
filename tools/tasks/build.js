'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var runSequence = require('run-sequence');
var webpackConfig = require('./../webpack.config.js');

gulp.task('build', function(callback) {
    // run webpack
    webpack( webpackConfig , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({colors: true}));
        callback();
    });
});
