module.exports = function(grunt) {
  grunt.registerTask('broken-links-local', [ 'connect:local', 'checkPages:local' ]);
};
