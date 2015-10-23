module.exports = function(grunt) {
  grunt.registerTask('compile-js', [ 'concat', 'uglify' ]);
};
