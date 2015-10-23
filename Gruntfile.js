(function() {
  'use strict';
  module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
      configPath: require('path').join(process.cwd(), 'grunt/config'),
      jitGrunt: {
        customTasksDir: 'grunt/tasks',
        staticMappings: {
          bower: 'main-bower-files',
          scsslint: 'grunt-scss-lint',
          cmq: 'grunt-combine-media-queries'
        }
      },
      data: {
        config: grunt.file.readJSON('./configuration.json'),
        pkg: grunt.file.readJSON('./package.json')
      }
    });
  };
}());
