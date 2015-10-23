module.exports = {
  dev: {
    src: '<%= config.directories.scripts %>**/*.js',
    dest: '<%= config.directories.destination %>js/<%= config.site.name %>.js'
  }
};
module.exports = {
  options: {
    //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */'
  },
  dev: {
    files: {
      '<%= config.directories.destination %>js/<%= config.site.name %>.min.js': [ '<%= config.directories.destination %>js/<%= config.site.name %>.js' ]
    }
  }
};
