module.exports = function(grunt) {
  grunt.registerTask('pre-deploy', [ 'sitemap', 'inline-critical', 'accessibility', 'connect:local', 'broken-links-local' ]);
};
