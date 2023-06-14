/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Alertas en Cypress", () =>{

    it("Alias Uno", ()=> {

        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')
        cy.wait(1000)

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get('@nom').type("Jonatan")
        cy.get('#surname').should('be.visible').as("ape")
        cy.get('@ape').type("Romero Rozo")
        cy.get('#age').should('be.visible').as('edad')
        cy.get('@edad').type("32")
        cy.get('#country').should('be.visible').as('pais')
        cy.get('@pais').select("Argentina").should('have.value','Argentina')
        cy.get('#notes').should('be.visible').as('notas')
        cy.get('@notas').type("Demo de contenido")
        cy.get('[type="submit"]').click({force:true})

    })

    
   
})//Cierre de describe