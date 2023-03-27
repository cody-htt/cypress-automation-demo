import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SwagLabsLoginPage from '../../support/pageObjects/SwagLabsLoginPage';
import SwagLabsInventoryPage from '../../support/pageObjects/SwagLabsInventoryPage';
import SwagLabsCartPage from '../../support/pageObjects/SwagLabsCartPage';
import HeaderComp from '../../support/pageObjects/components/HeaderComp';
import FooterComp from '../../support/pageObjects/components/FooterComp';

const loginPage = new SwagLabsLoginPage();
const inventoryPage = new SwagLabsInventoryPage();
const cartPage = new SwagLabsCartPage();
const headerComp = new HeaderComp();
const footerComp = new FooterComp();
let footerCopyText;
let productList;

Before(() => {
	loginPage.visitLoginPage();
	loginPage.enterUsename(Cypress.env('valid_username'));
	loginPage.enterPassword(Cypress.env('valid_password'));
	loginPage.clickBtnLogin();
	cy.fixture('staticString').then((strings) => {
		footerCopyText = strings.footerCopy;
	});
	cy.fixture('products').then((products) => {
		productList = products.productData;
	});
});

/** Given Steps Definition */
Given('I have logged-in success and redirect to inventory page', () => {
	headerComp.validateHeaderLogo();
	headerComp.validateBurgerButton();
	headerComp.validateCartButton();
	footerComp.validatePageFooter(footerCopyText);
});

/** When Steps Definition */
When('I add multiple products to Cart', () => {
	inventoryPage.addProductsToCart(productList);
	headerComp.validateCartBadgeHasItem(productList);
});

/** And Steps Definition */
And('I go to my cart and verify my desired products are added', () => {
	headerComp.clickCartIcon();
	cartPage.validateCartPageTitle();
	cartPage.validateCartList();
	cartPage.checkCartListHasItem();
	cartPage.verifyProductsInfo(productList);
});

And('I remove all items in cart', () => {
	cartPage.removeAllItems();
	cartPage.checkCartListIsEmpty();
});

/** Then Steps Definition */
Then('I go back to inventory page for shopping', () => {
	cartPage.clickBtnContShopping();
	inventoryPage.validateInventoryPageUrl();
	headerComp.validateCartBadgeIsEmpty();
});
