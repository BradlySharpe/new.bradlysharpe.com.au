module.exports = {
  options: {
    livereload: true,
    livereloadOnError: false,
    interrupt: false
  },
  html: {
    files: ['<%= config.directories.source %>**/*.hbs'],
    tasks: [ 'compile-html' ]
  },
  css: {
    files: ['<%= config.directories.sass %>**/*.scss'],
    tasks: [ 'compile-css' ]
  },
  js: {
    files: ['<%= config.directories.scripts %>**/*.js'],
    tasks: [ 'compile-js' ]
  },
  project: {
    files: ['grunt/**/*.js', 'Gruntfile.js', 'configuration.json', 'package.json'],
    tasks: [ 'full-build' ]
  },
  images: {
    files: ['<%= config.directories.partials %>**/*.{png,jpg,jpeg,gif,svg,ico}'],
    tasks: [ 'imagemin' ]
  },
  bower: {
    files: [ 'bower_components/*' ],
    tasks: [ 'bower-dependencies' ]
  }
};
