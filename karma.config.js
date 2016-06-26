module.exports = function(config) {
  config.set({
    frameworks: ['ng-scenario'],
    browsers: ['Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly'],
    reporters: ['progress'],
    urlRoot : '/__karma__/',
    proxies : {
      '/': 'http://localhost:3000'
    },
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    files: [
      'test/test.js'
    ],
    singleRun: false,
    browserNoActivityTimeout: 45000
  });
};
