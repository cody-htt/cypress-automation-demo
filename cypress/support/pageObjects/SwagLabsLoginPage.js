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
		cy.get('.error-message-container.error').should('be.visible');
		cy.get('.error-button').should('be.visible');
		cy.get('[data-test="error"]').invoke('text').should('deep.equal', expectedMsg);
		cy.get('.error-button').click();
	}
}
