'use strict';

var path = require('path');

var build = path.resolve(__dirname);
var base = path.resolve(build, '..');

var src = path.join(base, 'src');
var dist = path.join(base, 'dist/');

module.exports = {
    base: base,
    src: src,
    dist: dist
};
