module.exports = function(grunt) {
  grunt.registerTask('full-build', [ 'pre-lint', 'compile-html', 'compile-css', 'compile-js', 'optimise', 'post-lint' ]);
};
