export default class SwagLabsInventoryPage {
	validateBurgerButton() {
		cy.get('.bm-burger-button').should('be.visible');
		cy.get('#react-burger-menu-btn').should('have.css', 'cursor', 'pointer');
	}

	validateHeaderLogo() {
		cy.get('.header_label').should('have.css', 'display', 'block');
		cy.get('.primary_header').should('have.css', 'display', 'block');
		cy.get('.app_logo').invoke('text').should('deep.equal', 'Swag Labs');
	}

	validateCartButton() {
		cy.get('#shopping_cart_container').should('be.visible');
	}
}
