var selenium = require('selenium-webdriver');

describe('Simple Test', function() {
  this.timeout(10000);

  it('Should be the expected label', function(done) {
    var driver = new selenium.Builder().
      withCapabilities(selenium.Capabilities.firefox()).
      build();
    driver.get('http://localhost:3000').
      then(function () {
          driver.wait(function () {
              console.log("Looking for email field");
              return this.driver.findElement(selenium.By.id('email')).isDisplayed();
          }, 5000, 'Page did not load within 5 seconds');
          driver.findElement(webdriver.By.id("email")).sendKeys('test@abc.de');
          driver.findElement(webdriver.By.id("user_password")).sendKeys('pword');
          return driver.findElement(webdriver.By.name("submit")).click();
      }).then(done);
  });
});
