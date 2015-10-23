module.exports = {
  options: {
    base: '<%= config.directories.destination %>',
    pathPrefix: '<%= config.directories.destination %>',
    css: [ '<%= config.directories.destination %>css/**/*.css', '!<%= config.directories.destination %>css/**/*.min.css' ],
  },
  destination: {
    files: [
      {
        expand: true,
        cwd: '<%= config.directories.destination %>',
        src: ['**/*.html']
      }
    ]
  },
};
