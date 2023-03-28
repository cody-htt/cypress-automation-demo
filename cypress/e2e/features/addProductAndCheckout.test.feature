Feature: User Add Products To Cart and Checkout

  Scenario: User login, add products to cart and checkout successfully
    Given I have logged-in success and redirect to inventory page
    When I add multiple products to Cart
    And I go to my cart and verify my desired products are added
    And Click on checkout button
    And Fill up the information form 'Tung' 'Huynh' '70000'
    And Click Continue button
    And I am redirected to final checkout step
    And Verify product information
    And Verify order summary
    And Click Finish button
    Then I am redirected to successful checkout page
