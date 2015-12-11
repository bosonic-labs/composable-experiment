module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-browserify');

  // Project configuration.
  grunt.initConfig({

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        ignore: false, // Don't ignore node_modules; i.e., process them too
        transform: [['babelify', { presets: ['es2015']}]]
      },
      dist: {
        files: {
          'dist/bosonic.js': 'src/Bosonic/globals.js'
        }
      }
    },

    copy: {
      runtime: {
        expand: true,
        flatten: true,
        cwd: 'node_modules',
        dest: 'dist',
        src: [
          'webcomponents.js/webcomponents.js'
        ]
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/bosonic.min.js': ['dist/bosonic.js']
        }
      }
    },

    connect: {
      doc: {
        options: {
          port: 8022,
          base: ['.', 'demos'],
          hostname: '*',
          keepalive: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['copy', 'browserify', 'uglify']);
  grunt.registerTask('dev', ['build', 'connect']);
};