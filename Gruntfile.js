
module.exports = function (grunt) {

// Project configuration
  let sourceFiles = ['jquery.serializeObject.js'];

	grunt.initConfig({
		pkg: grunt.file.readJSON('serializeObject.jquery.json'),

		files: {
			all: sourceFiles,
			tests: ['test/**/*.js']
		},

		docs: {
			all: ['README.markdown']
		},

		uglify: {
      dist: {
        files: {
          'dist/jquery.serializeObject.min.js': sourceFiles,
        }
			}
		},

		jshint: {
			options: grunt.file.readJSON('.jshintrc'),
			all: sourceFiles
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