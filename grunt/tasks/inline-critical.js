module.exports = function(grunt) {
  grunt.registerMultiTask('inline-critical', 'Inline critical CSS', function() {
      var self = this,
        done = self.async(),
        critical = require('critical'),
        opt = self.options({
          dimensions: [
            { width: 320, height: 480 },  // Mobile
            { width: 768, height: 1024 }, // Tablet
            { width: 1280, height: 800 }  // Desktop
          ],
          minify: true,
          ignore: [],
          ignoreOptions: {},
          pathPrefix: '/',
          base: ''
        }),
        stylesheets;

      if (!opt.css) {
        grunt.fail.fatal('CSS option not passed');
        done(false);
      }
      stylesheets = grunt.file.expand(opt.css);
      if (!stylesheets.length) {
        grunt.fail.fatal('No CSS files found that match pattern');
        done(false);
      }
      grunt.log.ok('Found the following CSS files:', stylesheets);

      var generate = function(file, count, length) {
        critical.generate({
          css: stylesheets,
          inline: true,
          base: opt.base,
          src: file.dest,
          dest: opt.base + file.dest,
          dimensions: opt.dimensions,
          minify: opt.minify,
          extract: false,
          ignore: opt.ignore,
          ignoreOptions: opt.ignoreOptions
        }, function(err, output) {
          if (null !== err) {
            grunt.fail.fatal(err);
            done(false);
          }
          if (count === length-1) {
            done();
          }
        });
      };

      for (var count = 0, l = self.files.length; count < l; count++) {
        generate(self.files[count], count, l);
      }
    });
  };
