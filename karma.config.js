module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    browsers: ['Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly'],
    files: [
      '*.js'
    ]
  });
};
