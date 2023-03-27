export default class HeaderComp {
	validateHeaderLogo() {
		cy.get('.header_label').should('have.css', 'display', 'block');
		cy.get('.primary_header').should('have.css', 'display', 'block');
		cy.get('.app_logo').invoke('text').should('deep.equal', 'Swag Labs');
	}

	validateBurgerButton() {
		cy.get('.bm-burger-button').should('be.visible');
		cy.get('#react-burger-menu-btn').should('have.css', 'cursor', 'pointer');
	}

	validateCartBadge(productList) {
		cy.get('.shopping_cart_badge')
			.should('be.visible')
			.and('have.css', 'box-sizing', 'border-box')
			.and('have.css', 'background-color', 'rgb(226, 35, 26)')
			.invoke('text')
			.should('deep.equal', `${productList.length}`);
	}

	validateCartButton() {
		cy.get('#shopping_cart_container').should('be.visible');
	}
}
