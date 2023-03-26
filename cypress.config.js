const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber());
			// implement node event listeners here
		},
		specPattern: 'cypress/e2e/**/*.feature',
		excludeSpecPattern: 'cypress/e2e/**/*.js',
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
			sauce_demo_url: 'https://www.saucedemo.com/',
			valid_username: 'standard_user',
			valid_password: 'secret_sauce',
		},
		viewportHeight: 1080,
		viewportWidth: 1920,
	},
});
