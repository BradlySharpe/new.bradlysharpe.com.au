module.exports = {
  destination: {
    options: {
      ignore: [],
      stylesheets: ['/css/<%= config.site.name %>.css'],
      report: 'min',
      htmlroot: '<%= config.directories.destination %>',
      debug: process.cwd()
    },
    cwd: './',
    src: '<%= config.directories.destination %>**/*.html',
    dest: '<%= config.directories.destination %>css/<%= config.site.name %>.css'
  }
};
