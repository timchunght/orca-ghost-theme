
module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: {
					port: 35729,
				}
			},
			js: {
				files: ['src/js/*'],
				tasks: ['uglify', 'concat']
			},
			sass: {
				files: ['src/sass/*'],
				tasks: ['compass', 'cssmin']
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'src/sass/',
					specify: 'src/sass/init.scss',
					cssDir: 'src/sass/build/',
					environment: 'production'
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'assets/css/theme.min.css': ['src/sass/build/*.css']
				}
			}
		},

		uglify: {
			js: {
				files: {
					'assets/js/theme.min.js': ['src/js/lib/*.js', 'src/js/plugins/*.js', 'src/js/base.js']
				}
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['src/js/config.js', 'assets/js/theme.min.js'],
				dest: 'assets/js/theme.min.js',
			},
		},

		connect: {
			server: {
				options: {
					hostname: '127.0.0.1',
					port: 8080,
					base: '',
					livereload: true
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');


	grunt.registerTask('default', ['compass', 'cssmin', 'uglify', 'concat', 'watch']);
	grunt.registerTask('dev', ['compass', 'cssmin', 'uglify', 'concat', 'connect', 'watch']);
	grunt.registerTask('build', ['compass', 'cssmin', 'uglify', 'concat']);

};
