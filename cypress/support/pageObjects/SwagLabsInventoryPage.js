export default class SwagLabsInventoryPage {
	validateInventoryPageUrl() {
		cy.url().should('deep.equal', `${Cypress.env('sauce_demo_url')}inventory.html`);
	}

	addProductsToCart(productList) {
		cy.get('.inventory_list').should('be.visible').and('have.css', 'display', 'flex');
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
