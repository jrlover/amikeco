module.exports = function(config) {
  const configuration = {
    basePath: '',
    frameworks: ['ng-scenario'],
    browsers: ['chrome_without_security', 'Chrome'],
    customLaunchers: {
        chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security', '--lang', 'en']
        },
        chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox', '--lang', 'en']
        },
    },
    reporters: ['progress'],
    urlRoot : '/__karma__/',
    proxies : {
      '/': 'http://localhost:3000'
    },
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    files: [
      'test/test.js',
      'public/jquery/dist/jquery.js',
      'public/index.html'
    ],
    singleRun: false,
    browserNoActivityTimeout: 45000
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['chrome_travis_ci'];
  }
  config.set(configuration);
};
