/// <reference types="cypress" />

require('cypress-plugin-tab')

describe("Ejemplo función TAB", () =>{

    it("Type con Tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#firstName').type("Jonatan").tab().
        type("Romero").tab().
        type("jromero.utn@gmail.com")
    
    })

   
})//Cierre de describe