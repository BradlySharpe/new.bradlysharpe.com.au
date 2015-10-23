module.exports = {
  options: {
    emitError: true,
    emitSuccess: true,
    reporterOutput: 'SCSS-Lint-Report.xml',
    exclude: [
      'bower_components/**/*.scss',
      'node_modules/**/*.scss'
    ]
  },
  sass: [
    '<%= config.directories.sass %><%= config.site.name %>.scss'
  ]
};
