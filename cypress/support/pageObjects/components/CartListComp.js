export default class CartListComp {
	/**
	 * It loops through each product in the productList array, and for each product, it loops through each
	 * inventory item on the page, and if the inventory item's name matches the product's name, it
	 * verifies that the inventory item's name, description, and price match the product's name,
	 * description, and price
	 * @param productList - This is the list of products that we want to verify.
	 */
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
}
