module.exports = {
  options: {
    nokey: true,
    locale: '<%= config.pagespeed.locale %>',
    url: '<%= config.site.protocol %>://<%= config.site.domain %>/'
  },
  desktop: {
    options: {
      strategy: "desktop",
      threshold: '<%= config.pagespeed.desktopThreshold.remote %>',
      paths: '<%= config.pagespeed.testPages %>'
    }
  },
  mobile: {
    options: {
      strategy: "mobile",
      threshold: '<%= config.pagespeed.mobileThreshold.remote %>',
      paths: '<%= config.pagespeed.testPages %>'
    }
  },
  localDesktop: {
    options: {
      url: '<%= ngrok.url %>',
      strategy: "desktop",
      threshold: '<%= config.pagespeed.desktopThreshold.local %>',
      paths: '<%= config.pagespeed.testPages %>'
    }
  },
  localMobile: {
    options: {
      url: '<%= ngrok.url %>',
      strategy: "mobile",
      threshold: '<%= config.pagespeed.mobileThreshold.local %>',
      paths: '<%= config.pagespeed.testPages %>'
    }
  }
};
