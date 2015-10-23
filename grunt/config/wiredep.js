module.exports = {
  template: {
    src: ['<%= config.directories.destination %>**/*.html'],
    ignorePath: /\.\.\//g
  }
};
