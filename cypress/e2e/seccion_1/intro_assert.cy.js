/// <reference types="cypress" />

describe("Introducción a los assert", () =>{

    it("Demo de los Assert", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#firstName').should("be.visible").type("Jonatan")
        cy.get('#lastName').should("be.visible").type("Romero")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("jromero.utn@gmail.com")
    })

   
})//Cierre de describe