module.exports = function(grunt) {
  grunt.task.registerTask('runWithNgrok', 'Log stuff.', function() {
    /*
      USAGE:
        Run Task:
          grunt runWithNgrok:{ taskName }
        Run Sub Task:
          grunt runWithNgrok:{ taskName }.{ subTaskName }
        Run Multiple Tasks:
          grunt runWithNgrok:{ taskName }.{ subTaskName }:{ taskName }
     */

    var done = this.async(),
      ngrok = require('ngrok'),
      conf = grunt.file.readJSON('./configuration.json'),
      tasks = grunt.util.toArray(arguments);
    if (tasks.length) {
      ngrok.connect(conf.site.localPort, function(err, url) {
        if (err !== null) {
          grunt.fail.fatal(err);
          return done();
        }

        grunt.log.ok('Ngrok tunnel open: ' + url);
        grunt.config.set('ngrok.url', url);

        grunt.log.ok('Queueing local web server');
        grunt.task.run('connect:local');

        tasks.forEach(function(task) {
          task = task.replace(".", ":");
          grunt.log.writeln('Queueing Task: ' + task);
          grunt.task.run(task);
        });
        done();
      });
    } else {
      grunt.log.warn('No tasks passed to Ngrok');
      done();
    }
  });
};
