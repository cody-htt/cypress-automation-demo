Feature: Test Login on SauceLab Demo


    Scenario: Login with valid credentials and redirect to Inventory Page
        Given I go to Sauce Demo page
        When I enter username 'standard_user'
        And I enter password 'secret_sauce'
        And I click Login button
        Then I will be redirected to Inventory Page

    Scenario: Login with empty username field
        Given I go to Sauce Demo page
        When I enter username 'standard_user'
        And I click Login button
        Then I got error message prompted 'Epic sadface: Password is required'

    Scenario: Login with empty username field
        Given I go to Sauce Demo page
        When I enter password 'secret_sauce'
        And I click Login button
        Then I got error message prompted 'Epic sadface: Username is required'

    Scenario Outline: Login with invalid credentials
        Given I go to Sauce Demo page
        When I enter username <username>
        And I enter password <password>
        And I click Login button
        Then I got error message prompted <message>

        Examples:
            | username             | password           | message                                                                     |
            | 'locked_out_user'    | 'secret_sauce'     | 'Epic sadface: Sorry, this user has been locked out.'                       |
            | 'locked_out_user_@@' | 'secret_sauce'     | 'Epic sadface: Username and password do not match any user in this service' |
            | 'locked_out_user'    | 'secret_sauce_123' | 'Epic sadface: Username and password do not match any user in this service' |