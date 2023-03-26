import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SwagLabsLoginPage from '../../support/pageObjects/SwagLabsLoginPage';
import SwagLabsInventoryPage from '../../support/pageObjects/SwagLabsInventoryPage';

const loginPage = new SwagLabsLoginPage();
const inventoryPage = new SwagLabsInventoryPage();

Given('I go to Sauce Demo page', () => {
	loginPage.visitLoginPage();
	loginPage.validateLoginPage();
});

When('I enter username {word}', (username) => {
	loginPage.enterUsename(username);
});

And('I enter password {word}', (password) => {
	loginPage.enterPassword(password);
});

And('I click Login button', () => {
	loginPage.clickBtnLogin();
});

Then('I will be redirected to Inventory Page', () => {
	inventoryPage.validateHeaderLogo();
	inventoryPage.validateBurgerButton();
	inventoryPage.validateCartButton();
});

Then('I got error message prompted {string}', (lockedOutMessage) => {
	loginPage.validateErrorOnLogin(lockedOutMessage);
});
