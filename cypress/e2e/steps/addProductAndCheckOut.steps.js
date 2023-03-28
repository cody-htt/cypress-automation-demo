import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SwagLabsCheckoutInfoPage from '../../support/pageObjects/SwagLabsCheckoutInfoPage';
import SwagLabsCheckoutSummaryPage from '../../support/pageObjects/SwagLabsCheckoutSummaryPage';
import SwagLabsCheckoutCompletePage from '../../support/pageObjects/SwagLabsCheckoutCompletePage';
import SwagLabsCartPage from '../../support/pageObjects/SwagLabsCartPage';
import CartListComp from '../../support/pageObjects/components/CartListComp';

const checkoutInfoPage = new SwagLabsCheckoutInfoPage();
const checkoutSummaryPage = new SwagLabsCheckoutSummaryPage();
const checkoutCompletePage = new SwagLabsCheckoutCompletePage();
const cartPage = new SwagLabsCartPage();
const cartListComp = new CartListComp();
let productList;
let paymentInfo;
let completeHeaderTitle;
let successMsg;

Before(() => {
	cy.fixture('products').then((products) => {
		productList = products.productData;
	});
	cy.fixture('paymentInfo').then((data) => {
		paymentInfo = data.paymentData;
	});
	cy.fixture('staticString').then((string) => {
		completeHeaderTitle = string.completeHeaderTitle;
		successMsg = string.checkoutCompleteMsg;
	});
});

And('Click on checkout button', () => {
	cartPage.clickBtnCheckout();
	checkoutInfoPage.validateCheckoutStepOneUrl();
	checkoutInfoPage.validatePageTitle();
});

And(
	'Fill up the information form {string} {string} {string}',
	(firstName, lastName, postalCode) => {
		checkoutInfoPage.enterFirstName(firstName);
		checkoutInfoPage.enterLastName(lastName);
		checkoutInfoPage.enterPostalCode(postalCode);
	}
);

And('Click Continue button', () => {
	checkoutInfoPage.clickBtnContinue();
});

And('I am redirected to final checkout step', () => {
	checkoutSummaryPage.validateCheckoutStepTwoUrl();
	checkoutSummaryPage.validatePageTitle();
});

And('Verify product information', () => {
	cartListComp.verifyProductsInfo(productList);
});

And('Verify order summary', () => {
	checkoutSummaryPage.validateOrderSummaryExist();
	checkoutSummaryPage.verifyPaymentInfo(paymentInfo.card);
	checkoutSummaryPage.verifyShippingInfo(paymentInfo.shippingMethod);
	checkoutSummaryPage.verifyPriceTotal(productList, paymentInfo.tax);
});

And('Click Finish button', () => {
	checkoutSummaryPage.clickBtnFinish();
});

Then('I am redirected to successful checkout page', () => {
	checkoutCompletePage.validatePageUrl();
	checkoutCompletePage.validatePageTitle();
	checkoutCompletePage.validateCheckoutCompleteContainer(completeHeaderTitle, successMsg);
});
