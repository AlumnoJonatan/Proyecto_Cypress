/// <reference types="cypress" />

describe("Funciones para Type", () =>{

    it("Type --> ENTER ", () => {
        cy.visit("https://www.google.com/?hl=es")
        cy.title().should('eq','Google')
        cy.wait(1500)
        cy.log("El título es correcto")

        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(2000)
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
        


    })

   
})//Cierre de describe