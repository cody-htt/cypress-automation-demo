const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber());
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.test.{js,feature}',
		excludeSpecPattern: 'cypress/e2e/other/*.js',
		chromeWebSecurity: false,
		experimentalOriginDependencies: true,
		defaultCommandTimeout: 10 * 1000,
		pageLoadTimeout: 15 * 1000,
		screenshotOnRunFailure: true,
		trashAssetsBeforeRuns: true,
		video: false,
		reporter: 'cypress-multi-reporters',
		reporterOptions: {
			configFile: 'reporter-config.json',
		},
		env: {
			webdriveruni_url: 'http://www.webdriveruniversity.com/',
			automation_test_store_url: 'https://automationteststore.com/',
			sauce_demo_url: 'https://www.saucedemo.com/',
		},
		viewportHeight: 1080,
		viewportWidth: 1920,
	},
});
