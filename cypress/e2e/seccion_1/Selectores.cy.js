/// <reference types="cypress" />

require('cypress-xpath');

describe("Tipos de Selectores", () =>{

    it.only("Selectores por ID ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get('#userName').should('be.visible').type('Victor')
        cy.get('#userEmail').should('be.visible').type('jromero@gmil.com')

    })

    it("Selectores por Atributo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)

        cy.get('[placeholder="Full Name"]').should('be.visible').type('Juan Pérez')

    })

    it("Selectores por xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(2000)

        cy.xpath('//*[@id="userName"]').should('be.visible').type('Juan Pérez')
        cy.wait(2000)
        cy.xpath('//input[contains(@placeholder,"name@example.com")]').should('be.visible').type('jromero@gmail.com')
        cy.wait(2000)
        cy.xpath('//textarea[contains(@id,"currentAddress")]').should('be.visible').type('Demo de la dirección')

    })

    it("Selectores por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(2000)

        cy.get('.custom-control-label').contains('Female').click()
        cy.wait(2000)
        cy.get('.custom-control-label').contains('Other').click()

    })

    it("Selectores por CopySelector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(2000)

        cy.get('#userNumber').should('be.visible').type('3513589216')

    })
   
})//Cierre de describe