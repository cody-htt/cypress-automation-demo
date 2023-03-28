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
Given('I have logged-in success and redirect to inventory page', () => {
	loginPage.visitLoginPage();
	loginPage.enterUsename(Cypress.env('valid_username'));
	loginPage.enterPassword(Cypress.env('valid_password'));
	loginPage.clickBtnLogin();

	headerComp.validateHeaderLogo();
	headerComp.validateBurgerButton();
	headerComp.validateCartButton();
	footerComp.validatePageFooter(footerCopyText);
});
