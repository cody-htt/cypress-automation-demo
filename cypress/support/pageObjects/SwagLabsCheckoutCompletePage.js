export default class SwagLabsCheckoutCompletePage {
	validatePageUrl() {
		cy.url().should('deep.equal', `${Cypress.env('sauce_demo_url')}checkout-complete.html`);
		cy.screenshot();
	}

	validatePageTitle() {
		cy.get('.header_secondary_container').should('be.visible').and('have.css', 'display', 'flex');
		cy.get('.header_secondary_container span').then(($el) => {
			cy.wrap($el).invoke('text').should('deep.equal', 'Checkout: Complete!');
			cy.wrap($el).screenshot('checkout-complete-title');
		});
	}

	validateCheckoutCompleteContainer(completeHeader, successMsg) {
		cy.get('#checkout_complete_container')
			.should('be.visible')
			.and('have.css', 'display', 'flex')
			.and('have.css', 'text-align', 'center')
			.and('have.css', 'align-items', 'center')
			.and(($el) => {
				expect($el.find('img')).have.class('pony_express').to.visible;
				expect($el.find('h2')).have.class('complete-header').to.visible;
				let completeHeaderText = $el.find('h2').text();
				expect(completeHeaderText).deep.eq(completeHeader);
				expect($el.find('div')).have.class('complete-text').to.visible;
				let actualSuccessMsg = $el.find('div').text();
				expect(actualSuccessMsg).deep.eq(successMsg);
			});
	}
}
