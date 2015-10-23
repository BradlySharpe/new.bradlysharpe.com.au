module.exports = {
  destination: {
    options: {
      force: true,
      ignore: []
    },
    src: [ '<%= config.directories.destination %>**/*.html' ]
  }
};
