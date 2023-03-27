export default class FooterComp {
	validatePageFooter(footerCopyText) {
		cy.get('.footer').should('be.visible');
		cy.get('.social').should('have.css', 'list-style-type', 'none');
		cy.get('.social li').each(($el) => {
			cy.wrap($el).should('be.visible').and('have.css', 'display', 'block');
		});
		cy.get('.footer_copy').invoke('text').should('deep.equal', footerCopyText);
	}
}
