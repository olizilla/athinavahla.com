/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({

		// Creat the html files from page layouts and partial html fragments
		assemble:{
			options: {
				assets: 'docroot/assets/',
				layoutdir:'src/templates/layouts',
				partials: '[src/templates/partials/*.hbs]',
				data: 'html/data/*.json'
			},
			pages: {
				files:[{
					expand:true,
					cwd: 'src/pages/',
					src: ['**/*.html'],
					dest: 'docroot',
					ext: '.html'
				}]
			}
		},

		copy:{
			assets:{
				files:[{
					expand:true,
					cwd: 'src/assets',
					src: ['**'],
					dest: 'docroot/assets'
				}]
			}
		},

		connect:{
			server:{
				options:{
					keepalive:true,
					port:4000,
					base:'docroot'
				}
			}
		},

		watch:{
			all: {
				tasks:['default'],
				files: ['src/**', 'Gruntfile.js'],
	        	options: {
	          		livereload: true
	        	}
      		}
		}

	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['assemble','copy']);
};