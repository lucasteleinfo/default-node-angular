module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		clean:{
			temp:['dist/js/script.js','dist/js/script.min.js','dist/js/libs.min.js'],
			all:['dist']
		},

		jshint:{
			dist:{
				src:['app/config/**/*.js','app/modules/**/*.js']
			}
		},

		concat:{
			dist:{
				src:['app/config/*.js','app/modules/**/*.js'],
				dest:'dist/js/script.js'
			},
			libs:{
				src:[
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/semantic/dist/**/*.min.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-route/angular-route.min.js',
					'bower_components/angular-jwt/dist/angular-jwt.min.js',
					'bower_components/a0-angular-storage/dist/angular-storage.min.js',
				],
				dest:'dist/js/libs.min.js'
			},
			all:{
				src:['dist/js/libs.min.js','dist/js/script.min.js'],
				dest:'dist/js/all.min.js'
			},
		},

		uglify:{
			options: {
				preserveComments:false,
				mangle: false
			},
			dist:{
				src:['dist/js/script.js'],
				dest:'dist/js/script.min.js'
			}
		},

		cssmin:{
			all:{
				src:[
					'bower_components/semantic/dist/semantic.min.css',
					'style/style.css'
				],
				dest:'dist/css/style.min.css'
			}
		},

		htmlmin:{
			options: {                                 // Target options 
				removeComments: true,
				collapseWhitespace: true
			},
			views:{
				expand:true,
				cwd:'views/',
				src:['*.html'],
				dest:'dist/views'
			}
		},

		copy:{
			all:{
				src:'index-prod.html',
				dest:'dist/index.html'
			},
			assets:{
				expand:true,
				cwd:'bower_components/semantic/dist/themes/',
				src:['**'],
				dest:'dist/css/themes/'
			}
		}
	});

	grunt.registerTask('default',['clean:all','jshint','concat:dist','concat:libs','uglify:dist','cssmin','htmlmin:views','concat:all','copy','clean:temp']); 
}