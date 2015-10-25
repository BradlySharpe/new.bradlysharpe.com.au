module.exports = function(grunt) {
  grunt.registerTask('optimise', [ 'imagemin', 'htmlmin', 'cmq', 'postcss:sass' ]);
};
