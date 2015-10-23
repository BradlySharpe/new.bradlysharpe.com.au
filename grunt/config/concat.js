module.exports = {
  dev: {
    src: '<%= config.directories.scripts %>**/*.js',
    dest: '<%= config.directories.destination %>js/<%= config.site.name %>.js'
  }
};
