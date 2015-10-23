module.exports = {
  options: {
    thresholds: {
      weight: '<%= config.yslow.weight %>',
      speed: '<%= config.yslow.speed %>',
      score: '<%= config.yslow.score %>',
      requests: '<%= config.yslow.requests %>'
    }
  },
  remote: {
    files: [ { src: '<%= config.site.protocol %>://<%= config.site.domain %>/' } ]
  },
  local: {
    files: [ { src: '<%= ngrok.url %>' } ]
  }
};
