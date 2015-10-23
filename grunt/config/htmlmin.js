module.exports = {
  options: {
    removeComments: true,
    collapseWhitespace: true
  },
  destination: {
    files: [
      {
        expand: true,
        cwd: '<%= config.directories.destination %>',
        src: ['**/*.html'],
        dest: '<%= config.directories.destination %>'
      }
    ]
  }
};
