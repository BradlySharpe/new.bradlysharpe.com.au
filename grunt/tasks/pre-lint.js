module.exports = function(grunt) {
  grunt.registerTask('pre-lint', [ 'jsonlint', 'scsslint', 'jshint:configuration', 'jshint:scripts' ]);
};
