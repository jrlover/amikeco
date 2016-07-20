var assert = require('assert');

describe('login page', function() {
  
  it('has the correct browser title', function() {
    var url = browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'amikeco');
  });

  it('has the correct page title', function() {
//	browser.desiredCapabilities['chromeOptions'] = {
//		'prefs': {
//          'intl.accept_languages': 'en'
//	    }
//    }
//	browser.refresh();
//	browser.pause(3000);
    assert(browser.isVisible("h1[data-l10n-id]"));
    assert.equal(browser.getText('h1[data-l10n-id]'), 'Login');
  });

});