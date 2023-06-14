/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath');

describe("Nueva sección Checkbox", () =>{

    it("CheckBox Uno", () => {
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should("eq","Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)

        cy.get("[type='checkbox']").check({force:true}).should("be.checked")
        cy.wait(2000)   
        cy.get("[type='checkbox']").uncheck({force:true}).should("not.be.checked")
    })

    it("CheckBox Por Seleccion", () => {
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should("eq","Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1500)

        cy.get('#wsf-1-field-36-row-1').check({force:true}).should("be.checked")
        cy.xpath("//input[@id='wsf-1-field-36-row-3']").check({force:true}).should("be.checked")
    })

    it.only("Radio Button", () => {
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should("eq","Radio Buttons | TestingQaRvn")
        cy.wait(1500)

        cy.xpath("//input[@id='wsf-1-field-44-row-1']").check({force:true}).should("be.checked")
    })

   
})//Cierre de describe