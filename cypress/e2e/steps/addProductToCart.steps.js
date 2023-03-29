import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import SwagLabsInventoryPage from '../../support/pageObjects/SwagLabsInventoryPage';
import SwagLabsCartPage from '../../support/pageObjects/SwagLabsCartPage';
import HeaderComp from '../../support/pageObjects/components/HeaderComp';
import CartListComp from '../../support/pageObjects/components/CartListComp';

const inventoryPage = new SwagLabsInventoryPage();
const cartPage = new SwagLabsCartPage();
const headerComp = new HeaderComp();
const cartListComp = new CartListComp();
let productList;

Before(() => {
	cy.fixture('products').then((products) => {
		productList = products.productData;
	});
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
	cartListComp.checkCartListHasItem();
	cartListComp.verifyProductsInfo(productList);
});

And('I remove all items in cart', () => {
	cartPage.removeAllItems();
	cartListComp.checkCartListIsEmpty();
});

And('I remove all added product within inventory page', () => {
	inventoryPage.removeAddedProducts();
	inventoryPage.validateNoProductAdded();
});

And('I go to my cart', () => {
	headerComp.clickCartIcon();
});

/** Then Steps Definition */
Then('I go back to inventory page for shopping', () => {
	cartPage.clickBtnContShopping();
	inventoryPage.validatePageUrl();
	headerComp.validateCartBadgeIsEmpty();
});

Then('My cart is empty', () => {
	cartPage.validateCartPageTitle();
	cartPage.validateCartList();
	cartListComp.checkCartListIsEmpty();
});
