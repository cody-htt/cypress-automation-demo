export default class SwagLabsLoginPage {
	visitLoginPage() {
		cy.visit(Cypress.env('sauce_demo_url'));
	}

	validateLoginPage() {
		cy.get('.login_logo').invoke('text').should('deep.equal', 'Swag Labs');
		cy.get('.login_wrapper-inner').should('be.visible');
		cy.get('.login_credentials_wrap-inner').should('be.visible');
	}

	enterUsename(username) {
		cy.get('#user-name').should('not.be.disabled').type(username);
	}

	enterPassword(password) {
		cy.get('#password').should('not.be.disabled').type(password);
	}

	clickBtnLogin() {
		cy.get('#login-button').should('have.css', 'display', 'inline-block').click();
	}

	validateErrorOnLogin(expectedMsg) {
		cy.log(expectedMsg);
		cy.get('.error-message-container.error')
			.should('be.visible')
			.and('have.css', 'background-color', 'rgb(226, 35, 26)');
		cy.get('.error-message-container.error').should('have.css', 'justify-content', 'center');
		cy.get('[data-test="error"]').invoke('text').should('deep.equal', expectedMsg);
		cy.get('.error-button svg').should('have.css', 'overflow', 'visible');
		cy.get('.error-button').should('be.visible').and('have.css', 'cursor', 'pointer').click();
	}
}
