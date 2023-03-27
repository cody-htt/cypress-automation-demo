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

	/**
	 * It loops through all the buttons on the page, and if the button text contains the word "Remove", it
	 * clicks on the button
	 */
	removeAddedProducts() {
		cy.get('.pricebar button').each(($el) => {
			if ($el.text().includes('Remove')) {
				let clazzName = $el.attr('class');
				expect(clazzName, 'check button has class btn_secondary').contain('btn_secondary');
				cy.wrap($el).click();
			}
		});
	}

	/**
	 * This function validates that the "Add to cart" button is present on the page and that it has the
	 * class "btn_primary"
	 */
	validateNoProductAdded() {
		cy.get('.pricebar button').each(($el) => {
			let clazzName = $el.attr('class');
			let btnText = $el.text();
			expect(clazzName, 'Verify button has class btn_primary').contain('btn_primary');
			expect(btnText, 'Verify button text is "Add to cart"').deep.equal('Add to cart');
		});
	}
}
