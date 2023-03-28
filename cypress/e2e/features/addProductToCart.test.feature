Feature: User Add Product and Verify Cart Summary

  Scenario: Add product to cart and verify cart summary then remove all items
    Given I have logged-in success and redirect to inventory page
    When I add multiple products to Cart
    And I go to my cart and verify my desired products are added
    And I remove all items in cart
    Then I go back to inventory page for shopping

  Scenario: Add product to cart and remove all added product then verify cart is empty
    Given I have logged-in success and redirect to inventory page
    When I add multiple products to Cart
    And I remove all added product within inventory page
    And I go to my cart
    Then My cart is empty