export default class SwagLabsInventoryPage {
	/**
	 * Validate that the current URL is the inventory page URL.
	 */
	validateInventoryPageUrl() {
		cy.url().should('deep.equal', `${Cypress.env('sauce_demo_url')}inventory.html`);
	}

	/**
	 * This function takes a list of products and adds them to the cart
	 * @param productList - An array of objects that contain the product to be added to the cart.
	 */
	addProductsToCart(productList) {
		cy.get('.inventory_list')
			.should('be.visible')
			.and('have.css', 'display', 'flex')
			.screenshot('inventory-list');

		cy.get('.inventory_item').each(($el) => {
			$el.attr('display', 'flex');
			$el.attr('box-sizing', 'border-box');
		});
		productList.forEach((product) => {
			cy.get('.inventory_item_name').each(($el, index) => {
				if ($el.text().includes(product.name)) {
					cy.log($el.text());
					cy.log(`element index = ${index}`);
					cy.get('.inventory_item button').eq(index).click();
				}
			});
		});
	}
}
