module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    globals: {
      jQuery: true,
      console: true,
      module: true
    }
  },
  configuration: ['Gruntfile.js', './grunt/**/*.js'],
  scripts: ['<%= config.directories.scripts %>**/*.js'],
  compiled: ['<%= config.directories.destination %>js/**/*.js', '!<%= config.directories.destination %>js/**/*.min.js']
};
