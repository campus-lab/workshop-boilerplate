'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch:src', function() {
    gulp.watch("src/**/*", ['build'])
        .on('change', reportChange);
});

gulp.task('watch', function(callback) {
    runSequence(
        'watch:src',
        'serve',
        callback
    );
});
