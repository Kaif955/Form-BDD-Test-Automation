import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('Open the browser and Enter the Simple Form URL', () => {
    cy.visit('https://v1.training-support.net/selenium/simple-form')
})

When('User enters the first name field', () => {
    cy.get('#firstName').type('Kaif')
})

And('User enters the last name field', () => {
    cy.get('#lastName').click()
})

And('User enters in the email field', () => {
    cy.xpath('//input[@id="email"]').click()
})

And('User enters in the contact number field', () => {
    cy.xpath('//input[@id="number"]').click()
})

And('User enters in the message box', () => {
    cy.xpath('//textarea[@rows="2"]').type('Hi there, Kaif this side');
})

And('User clicks on the Submit button', () => {
    cy.xpath('//input[@type="submit"]').click()
})

Then('A success message should be displayed confirming form submission', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.contains('Thank You for reaching out to us, kaif beg');
        return true;
    })
})
