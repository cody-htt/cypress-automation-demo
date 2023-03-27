export default class SwagLabsLoginPage {
	/**
	 * Visit the login page and verify that the URL is correct
	 */
	visitLoginPage() {
		cy.visit(Cypress.env('sauce_demo_url'));
		cy.url().should('deep.equal', Cypress.env('sauce_demo_url'));
	}

	/**
	 * This function validates that the login page is visible and that the login logo is visible and has
	 * the correct text
	 */
	validateLoginPage() {
		cy.get('.login_logo').invoke('text').should('deep.equal', 'Swag Labs');
		cy.get('.login_wrapper-inner').should('be.visible');
		cy.get('.login_credentials_wrap-inner').should('be.visible');
	}

	/**
	 * This function will enter a username into the username field
	 * @param username - The username to enter into the username field.
	 */
	enterUsename(username) {
		cy.get('#user-name').should('not.be.disabled').type(username);
	}

	/**
	 * This function enters a password into the password field.
	 * @param password - The password to enter into the password field.
	 */
	enterPassword(password) {
		cy.get('#password').should('not.be.disabled').type(password);
	}

	/**
	 * This function will take a screenshot of the login button and then click it
	 */
	clickBtnLogin() {
		let date = new Date().toISOString('en-US');
		cy.screenshot(`click-login-${date}`);
		cy.get('#login-button').should('have.css', 'display', 'inline-block').click();
	}

	/**
	 * This function takes in a string as an argument and validates that the error message is displayed on
	 * the login page
	 * @param expectedMsg - The error message that you expect to see.
	 */
	validateErrorOnLogin(expectedMsg) {
		cy.log(expectedMsg);
		cy.screenshot(`${expectedMsg}`);
		cy.get('.error-message-container.error')
			.should('be.visible')
			.and('have.css', 'background-color', 'rgb(226, 35, 26)');
		cy.get('.error-message-container.error').should('have.css', 'justify-content', 'center');
		cy.get('[data-test="error"]').invoke('text').should('deep.equal', expectedMsg);
		cy.get('.error-button svg').should('have.css', 'overflow', 'visible');
		cy.get('.error-button').should('be.visible').and('have.css', 'cursor', 'pointer').click();
	}
}
