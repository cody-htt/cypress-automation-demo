export default class SwagLabsCheckoutInfoPage {
	/**
	 * This function verifies the placeholder and name attributes of the input field, then types the
	 * firstName parameter into the input field
	 * @param firstName - The first name of the user
	 */
	enterFirstName(firstName) {
		cy.get('#first-name').then(($el) => {
			expect(
				$el.attr('placeholder'),
				'Verify input field first-name placeholder attribute'
			).deep.eq('First Name');
			expect($el.attr('name'), 'Verify input field first-name name attribute').deep.eq('firstName');
			cy.wrap($el)
				.should('have.css', 'border-bottom', '1px solid rgb(237, 237, 237)')
				.type(firstName);
		});
	}

	/**
	 * This function verifies the placeholder and name attributes of the input field, then types the last
	 * name into the input field
	 * @param lastName - The last name of the user
	 */
	enterLastName(lastName) {
		cy.get('#last-name').then(($el) => {
			expect($el.attr('placeholder'), 'Verify input field last-name placeholder attribute').deep.eq(
				'Last Name'
			);
			expect($el.attr('name'), 'Verify input last-name name attribute').deep.eq('lastName');
			cy.wrap($el)
				.should('have.css', 'border-bottom', '1px solid rgb(237, 237, 237)')
				.type(lastName);
		});
	}

	/**
	 * This function verifies the placeholder and name attributes of the input field, then types the
	 * postal code into the input field
	 * @param postalCode - The postal code to enter into the input field.
	 */
	enterPostalCode(postalCode) {
		cy.get('#postal-code').then(($el) => {
			expect(
				$el.attr('placeholder'),
				'Verify input postal code name placeholder attribute'
			).deep.eq('Zip/Postal Code');
			expect($el.attr('name'), 'Verify input field postal code name attribute').deep.eq(
				'postalCode'
			);
			cy.wrap($el)
				.should('have.css', 'border-bottom', '1px solid rgb(237, 237, 237)')
				.type(postalCode);
		});
	}

	/**
	 * This function clicks the Continue button on the page
	 */
	clickBtnContinue() {
		cy.get('#continue').then(($el) => {
			expect($el.attr('class'), 'Verify Button Continue has class').contain('submit-button');
			expect($el.val(), 'Verify Button has exact text').deep.eq('Continue');
			cy.wrap($el).click();
		});
	}

	/**
	 * This function validates that the URL is correct for the Checkout Step One page
	 */
	validateCheckoutStepOneUrl() {
		cy.url().should('deep.equal', `${Cypress.env('sauce_demo_url')}checkout-step-one.html`);
		cy.screenshot('check-step-one');
	}

	/**
	 * This function validates the checkout info form
	 */
	validateInfoForm() {
		cy.get('.checkout_info').should('be.visible').and('have.css', 'border-radius', '8px');
		cy.get('.form_group').should('be.visible').and('have.css', 'margin-bottom', '15px');
	}

	/**
	 * This function validates the page title of the first step of the checkout process
	 */
	validatePageTitle() {
		cy.get('.header_secondary_container').should('be.visible').and('have.css', 'display', 'flex');
		cy.get('.header_secondary_container span').then(($el) => {
			cy.wrap($el).invoke('text').should('deep.equal', 'Checkout: Your Information');
			cy.wrap($el).screenshot('checkout-step-one-title');
		});
	}
}
