module.exports = {
  build: {
    base: 'bower_components',
    dest: '<%= config.directories.destination %>bower_components',
    options: {
      checkExistence: true,
      debugging: true,
      filter: function(file) {
        return /^.*\.(?!(scss|sass|less)$)[^.]+$/.test(file) ? file : false;
      },
      paths: {
        bowerDirectory: 'bower_components',
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      }
    }
  }
};
