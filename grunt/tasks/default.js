module.exports = function(grunt) {
  grunt.registerTask('default', [ 'full-build', 'connect:destination', 'watch' ]);
};
