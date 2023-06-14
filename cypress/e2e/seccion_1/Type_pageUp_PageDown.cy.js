/// <reference types="cypress" />

describe("Ejemplo de Type pageUP, pageDown", () =>{

    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pageup}")
        cy.wait(2000)
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })


    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })

    it.only("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)
        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)
    })
   
})//Cierre de describe