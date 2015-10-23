module.exports = {
  options: {
    helpers: '<%= config.directories.helpers %>**/*.js',
    layout: '<%= config.site.defaultLayout %>',
    layoutdir: '<%= config.directories.layouts %>',
    partials: '<%= config.directories.partials %>**/*.{hbs,css}',
    plugins: ['grunt-assemble-permalinks'],
    permalinks: {
      structure: ':basename/index:ext'
    }
  },
  homepage: {
    options: {
      layout: 'homepage.hbs'
    },
    files: [
      {
        cwd: "<%= config.directories.pages %>",
        dest: "<%= config.directories.destination %>",
        expand: true,
        src: 'index.hbs'
      }
    ]
  },
  pages: {
    files: [
      {
        cwd: "<%= config.directories.pages %>",
        dest: "<%= config.directories.destination %>",
        expand: true,
        src: [ '**/*.hbs', '!index.hbs' ]
      }
    ]
  },
  blog: {
    options: {
      layout: 'blog.hbs'
    },
    files: [
      {
        cwd: "<%= config.directories.blog %>",
        dest: "<%= config.directories.destination %>blog/",
        expand: true,
        src: [ '**/*.hbs', '**/*.md' ]
      }
    ]
  }
};
