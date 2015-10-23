module.exports = function(grunt) {
  grunt.registerTask('pre-deploy', [ 'sitemap', 'accessibility', 'connect:local', 'broken-links-local' ]);
};
