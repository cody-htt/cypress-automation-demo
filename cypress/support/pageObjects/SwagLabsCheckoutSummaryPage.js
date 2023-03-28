export default class SwagLabsCheckoutSummaryPage {
	/**
	 * This function will verify the payment information on the checkout page
	 * @param cardInfo - This is the card information that you want to verify.
	 */
	verifyPaymentInfo(cardInfo) {
		cy.get('.summary_value_label').each(($el) => {
			if ($el.text().includes(cardInfo)) {
				cy.wrap($el).should('be.visible').invoke('text').should('deep.equal', cardInfo);
			}
		});
	}

	/**
	 * This function will loop through all the elements with the class name 'summary_value_label' and
	 * check if the text of the element contains the shippingInfo parameter. If it does, then it will
	 * check if the text of the element is equal to the shippingInfo parameter
	 * @param shippingInfo - This is the shipping information that you want to verify.
	 */
	verifyShippingInfo(shippingInfo) {
		cy.get('.summary_value_label').each(($el) => {
			if ($el.text().includes(shippingInfo)) {
				cy.wrap($el).should('be.visible').invoke('text').should('deep.equal', shippingInfo);
			}
		});
	}

	/**
	 * It takes a list of products and a tax rate, and verifies that the subtotal, tax, and total payment
	 * are correct
	 * @param productList - An array of objects that contain the product name and price.
	 * @param tax - The tax rate in percentage.
	 */
	verifyPriceTotal(productList, tax) {
		let productsPrice = productList.map((product) => parseFloat(product.price.replace('$', '')));
		cy.log(`Product Price Array: ${productsPrice}`);

		let subTotal = productsPrice.reduce((sum, price) => sum + price, 0);
		cy.log(`Total Product Price: ${subTotal}`);

		let taxCost = parseFloat((subTotal * (tax / 100)).toFixed(2));
		cy.log(`Tax cost: ${taxCost}`);

		let totalPrice = subTotal + taxCost;
		cy.log(`Total Payment: ${totalPrice}`);

		cy.get('.summary_subtotal_label').then(($el) => {
			let actualSubtotal = parseFloat($el.text().split('$')[1]);
			expect(actualSubtotal).deep.eq(subTotal);
		});
		cy.get('.summary_tax_label').then(($el) => {
			let actualTaxCost = parseFloat($el.text().split('$')[1]);
			expect(actualTaxCost).deep.eq(taxCost);
		});
		cy.get('.summary_total_label').then(($el) => {
			let actualTotalPayment = parseFloat($el.text().split('$')[1]);
			expect(actualTotalPayment).deep.eq(totalPrice);
		});
	}

	clickBtnFinish() {
		cy.get('#finish').then(($el) => {
			expect($el.attr('class')).include('btn_action');
			cy.wrap($el).should('be.visible').click();
		});
	}

	/**
	 * This function validates that the order summary exists and that the padding is correct for each
	 * element
	 */
	validateOrderSummaryExist() {
		cy.get('.summary_info')
			.should('be.visible')
			.and('have.css', 'display', 'block')
			.find('div')
			.each(($el) => {
				if ($el.hasClass('summary_info_label')) {
					cy.wrap($el).should('have.css', 'padding', '20px 0px 0px');
				}
				if ($el.hasClass('summary_value_label')) {
					cy.wrap($el).should('have.css', 'padding', '5px 0px 0px');
				}
				if ($el.hasClass('summary_subtotal_label')) {
					cy.wrap($el).should('have.css', 'padding', '0px');
				}
				if ($el.hasClass('summary_tax_label')) {
					cy.wrap($el).should('have.css', 'padding', '0px');
				}
			});
	}

	/**
	 * This function validates that the URL is the same as the URL defined in the cypress.json file
	 */
	validateCheckoutStepTwoUrl() {
		cy.url().should('deep.equal', `${Cypress.env('sauce_demo_url')}checkout-step-two.html`);
		cy.screenshot();
	}

	/**
	 * This function validates the page title of the second step of the checkout process
	 */
	validatePageTitle() {
		cy.get('.header_secondary_container').should('be.visible').and('have.css', 'display', 'flex');
		cy.get('.header_secondary_container span').then(($el) => {
			cy.wrap($el).invoke('text').should('deep.equal', 'Checkout: Overview');
			cy.wrap($el).screenshot('checkout-step-two-title');
		});
	}
}
