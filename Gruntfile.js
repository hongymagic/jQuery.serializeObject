
module.exports = function (grunt) {

// Project configuration

	grunt.initConfig({
		pkg: '<json:serializeObject.jquery.json>',

		files: {
			all: ['jquery.serializeObject.js'],
			tests: ['test/**/*.js']
		},

		docs: {
			all: ['README.markdown']
		},

		uglify: {
			dist: {
				'dist/jquery.serializeObject.min.js': '<config:files.all>'
			}
		},

		jshint: {
			options: '<json:.jshintrc>',
			all: '<config:files.all>'
		},

		qunit: {
			all: ['test/*.html']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');

// Default grunt task

	grunt.registerTask('default', ['jshint', 'uglify', 'qunit']);

};