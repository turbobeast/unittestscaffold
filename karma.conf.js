// an example karma.conf.js
module.exports = function(config) {
  config.set({
  	basePath : '',
    files: [
      'tests/*.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      'tests/*.js' : ['browserify']
    },
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],
    reporters: ['coverage', 'spec'],
    browserify: {
      debug: true,
      transform: []
    }
  });
};