const conf = {
    specs: ['./specs/**/*.spec.js'],
    framework: 'mocha',
    mochaOpts: {
      timeout: 30 * 1000
    },
    onPrepare() {
      browser.waitForAngularEnabled(false)
    },
    SELENIUM_PROMISE_MANAGER: false
  };
  
  exports.config = conf