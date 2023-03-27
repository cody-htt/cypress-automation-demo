export default class SwagLabsCartPage {
	/**
	 * It loops through each product in the productList array, and for each product, it loops through each
	 * inventory item on the page, and if the inventory item's name matches the product's name, it
	 * verifies that the inventory item's name, description, and price match the product's name,
	 * description, and price
	 * @param productList - This is the list of products that we want to verify.
	 */
	verifyProductsInfo(productList) {
		productList.forEach((product) => {
			cy.get('.inventory_item_name').each(($el, index) => {
				if ($el.text().includes(product.name)) {
					cy.get('.inventory_item_name')
						.eq(index)
						.invoke('text')
						.should('deep.equal', product.name);

					cy.get('.inventory_item_desc')
						.eq(index)
						.invoke('text')
						.should('deep.equal', product.description);

					cy.get('.inventory_item_price')
						.eq(index)
						.invoke('text')
						.should('deep.equal', product.price);
				}
			});
		});
	}

	/**
	 * It loops through all the buttons on the page, and if the button text includes the word "Remove", it
	 * clicks the button
	 */
	removeAllItems() {
		cy.get('.cart_item_label button').each(($el) => {
			if ($el.text().includes('Remove')) {
				cy.wrap($el).click();
			}
		});
	}

	/**
	 * This function clicks the Continue Shopping button on the Cart page
	 */
	clickBtnContShopping() {
		cy.get('#continue-shopping').then(($el) => {
			cy.wrap($el)
				.should('have.descendants', 'img')
				.invoke('text')
				.should('deep.equal', 'Continue Shopping');
			cy.wrap($el).click();
		});
	}

	/**
	 * Check that the cart list has at least one item in it.
	 */
	checkCartListHasItem() {
		cy.get('.cart_item').should('have.length.gt', 0);
		cy.get('.cart_list').screenshot('Cart-with-items');
	}

	/**
	 * Check that the cart list is empty.
	 */
	checkCartListIsEmpty() {
		cy.get('.cart_item').should('have.length.lte', 0);
		cy.get('.cart_list').screenshot('Cart-empty');
	}

	/**
	 * This function validates the title of the cart page
	 */
	validateCartPageTitle() {
		cy.get('.header_secondary_container').should('be.visible').and('have.css', 'display', 'flex');
		cy.get('.header_secondary_container span').then(($el) => {
			cy.wrap($el).invoke('text').should('deep.equal', 'Your Cart');
			cy.wrap($el).screenshot('cart-title');
		});
	}

	/**
	 * This function validates that the cart list is visible, has a display of block, and that the
	 * quantity label and description label are present
	 */
	validateCartList() {
		cy.get('.cart_list')
			.should('be.visible')
			.and('have.css', 'display', 'block')
			.find('.cart_quantity_label')
			.invoke('text')
			.should('deep.equal', 'QTY')
			.get('.cart_desc_label')
			.invoke('text')
			.should('deep.equal', 'Description');
	}
}
