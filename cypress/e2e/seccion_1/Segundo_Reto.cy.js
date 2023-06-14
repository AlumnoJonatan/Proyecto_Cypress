/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath');

describe("Segundo Reto ", () =>{

    it("ABM dentro de la pagina", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.wait(1500)
        cy.title().should('eq','Computers database')

        //Buscando 
        cy.xpath("//input[contains(@id,'searchbox')]").should('be.visible').type('ACE')
        cy.get("#searchsubmit").should("be.visible").click()

        //Add
        cy.get('#add').should("be.visible").click()
        cy.xpath("//input[contains(@id,'name')]").should("be.visible").type("Cypress")
        cy.get("#introduced").should("be.visible").type("2021-03-15").tab().type("2025-03-15")
        //Combo
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get('.primary').should("be.visible").click({force:true})
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Cypress")
        cy.get("#searchsubmit").should("be.visible").click()

    })

   
})//Cierre de describe