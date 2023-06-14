import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('precondition',()=>{
    cy.visit('https://demoqa.com/text-box')
})

When('action',()=> {
    cy.title().should('eq','DEMOQA')
})

Then('testaable outcome',()=> {
    cy.title().should('eq','DEMOQA')
})