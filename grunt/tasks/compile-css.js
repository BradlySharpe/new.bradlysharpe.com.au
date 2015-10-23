module.exports = function(grunt) {
  grunt.registerTask('compile-css', [ 'compass:sass', 'postcss:sass' ]);
};
