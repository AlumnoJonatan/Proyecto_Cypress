/// <reference types="cypress" />

describe("Bienvenido al curso de Cypres sección 1", () =>{

    it("Mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo")
        cy.wait(2000)
    })

    it("Segundo test -> campo name", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').type("Jonatan")
        cy.wait(1000)
        cy.get('#wsf-1-field-22').type("Romero")
        cy.wait(1000)
        cy.get('#wsf-1-field-23').type("jromero.utn@gmail.com")
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type("3513589216")
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type("Demos de la dirección y River Plate campeón")
        cy.wait(1000)
        cy.get('#wsf-1-field-27').click()
        cy.wait(2000)
    })

})//Cierre de describe