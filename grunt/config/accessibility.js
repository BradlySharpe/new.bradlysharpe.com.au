module.exports = {
  options: {
    accessibilityLevel: 'WCAG2A'
  },
  destination: {
    src: ['<%= config.directories.destination %>**/*.html']
  }
};
