'use strict';

var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');

gulp.task('make-service-worker', function(callback) {
	var rootDir = 'static';

	swPrecache.write(path.join(rootDir, 'serviceworker.js'), {
		staticFileGlobs: [rootDir + '/**/*.{js,json,html,css,png,jpg,gif}'],
		stripPrefix: rootDir
	}, callback);
});