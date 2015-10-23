module.exports = {
  options: {
    map: {
      inline: false,
      annotation: '<%= config.directories.destination %>css/maps/'
    },
    processors: [
      require('pixrem')(),
      require('autoprefixer')({
        browsers: [ 'last 2 versions', 'ie > 7', '> 1%']
      }),
      require('cssnano')()
    ]
  },
  sass: {
    files : [
      {
        expand: true,
        cwd: '<%= config.directories.destination %>css',
        src: ['**/*.css', '!**/*.min.css'],
        dest: '<%= config.directories.destination %>css',
        ext: '.min.css'
      }
    ]
  }
};
