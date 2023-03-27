export default class SwagLabsCartPage {
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

	removeAllItems() {
		cy.get('.cart_item_label button').each(($el) => {
			if ($el.text().includes('Remove')) {
				cy.wrap($el).click();
			}
		});
	}

	clickBtnContShopping() {
		cy.get('#continue-shopping').then(($el) => {
			cy.wrap($el)
				.should('have.descendants', 'img')
				.invoke('text')
				.should('deep.equal', 'Continue Shopping');
			cy.wrap($el).click();
		});
	}

	checkCartListHasItem() {
		cy.get('.cart_item').should('have.length.gt', 0);
	}

	checkCartListIsEmpty() {
		cy.get('.cart_item').should('have.length.lte', 0);
	}

	validateCartPageTitle() {
		cy.get('.header_secondary_container').should('be.visible').and('have.css', 'display', 'flex');
		cy.get('.header_secondary_container span').invoke('text').should('deep.equal', 'Your Cart');
	}

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
