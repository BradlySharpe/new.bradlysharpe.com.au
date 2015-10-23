module.exports = {
  options: {
    log: true
  },
  destination: {
    files: [
      {
        expand: true,
        cwd: '<%= config.directories.destination %>css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= config.directories.destination %>css/'
      }
    ]
  }
};
