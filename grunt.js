
module.exports = function (grunt) {

// Project configuration

	grunt.initConfig({
		pkg: '<json:serializeObject.jquery.json>',

		files: {
			all: ['jquery.serializeObject.js'],
			tests: ['test/**/*.js']
		},

		lint: {
			all: ['<config:files.all>', '<config:files.tests>']
		},

		docs: {
			all: ['README.markdown']
		},

		min: {
			dist: {
				src: '<config:files.all>',
				dest: 'dist/jquery.serializeObject.min.js'
			}
		},

// JSHint options
// See: http://www.jshint.com/options/ for list of options and definitions

		jshint: {
			options: '<json:.jshintrc>'
		},

// QUnit

		qunit: {
			all: ['test/*.html']
		}

	});

// Default grunt task

	grunt.registerTask('default', 'lint qunit min');

};