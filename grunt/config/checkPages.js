module.exports = {
  options: {
    checkLinks: true,
    onlySameDomain: true,
    noRedirects: true,
    noEmptyFragments: true,
    checkXhtml: true,
    maxResponseTime: 200,
    summary: true
  },
  local: {
    options: {
      pageUrls: [
        'http://localhost:<%= config.site.localPort %>/'
      ]
    }
  },
  remote: {
    options: {
      noLocalLinks: true,
      checkCaching: true,
      checkCompression: true,
      maxResponseTime: 2000,
      pageUrls: [
        '<%= config.site.protocol %>://<%= config.site.domain %>/'
      ]
    }
  },
};
