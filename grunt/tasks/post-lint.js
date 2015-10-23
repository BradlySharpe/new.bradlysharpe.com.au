module.exports = function(grunt) {
  grunt.registerTask('post-lint', [ 'jshint:compiled', 'htmlhint', 'csslint' ]);
};
