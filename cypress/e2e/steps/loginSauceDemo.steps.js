import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SwagLabsLoginPage from '../../support/pageObjects/SwagLabsLoginPage';
import HeaderComp from '../../support/pageObjects/components/HeaderComp';
import FooterComp from '../../support/pageObjects/components/FooterComp';

const loginPage = new SwagLabsLoginPage();
const headerComp = new HeaderComp();
const footerComp = new FooterComp();
let footerCopyText;

Before(() => {
	cy.fixture('staticString').then((strings) => {
		footerCopyText = strings.footerCopy;
	});
});

/** Given Steps Definition */
Given('I go to Sauce Demo page', () => {
	loginPage.visitLoginPage();
	loginPage.validateLoginPage();
});

/** When Steps Definition */
When('I enter username {string}', (username) => {
	loginPage.enterUsename(username);
});

/** And Steps Definition */
And('I enter password {string}', (password) => {
	loginPage.enterPassword(password);
});

And('I click Login button', () => {
	loginPage.clickBtnLogin();
});

/** Then Steps Definition */
Then('I will be redirected to Inventory Page', () => {
	headerComp.validateHeaderLogo();
	headerComp.validateBurgerButton();
	headerComp.validateCartButton();
	footerComp.validatePageFooter(footerCopyText);
});

Then('I got error message prompted {string}', (expectedMsg) => {
	loginPage.validateErrorOnLogin(expectedMsg);
});
