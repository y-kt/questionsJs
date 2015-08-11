Inspired by Firebase & AngularJS TodoMVC Example

Local webserver:
   yeoman server (npm install -g yo) 

Unit Testing (Using Karma) - http://karma-runner.github.io/0.12/index.html
  Test case: test/unit/*

  Run: $ karma start karma.conf.js

  Installation:
    sudo npm install -g karma  (install node first if no npm installed.)
    sudo npm install -g karma-cli
    sudo npm install -g karma-coverage
    sudo npm install -g karma-chrome-launcher
    sudo npm install -g karma-jasmine

E2E Testing (Using Protractor) - http://www.protractortest.org/#/
  Test case: test/e2e/*

  Run: $ protractor protractor.conf.js

  Installation:
    npm install -g protractor
    webdriver-manager update & webdriver-manager start 
