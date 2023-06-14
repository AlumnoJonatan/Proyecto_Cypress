/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Todo sobre Selects", () =>{

    it("Select uno", () => {
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
        cy.title().should("eq","ComboBox Dependiente | TestingQaRvn")
        cy.wait(1500)

        cy.get('#wsf-1-field-61').should("be.visible").select("Linux").should("have.value","Linux")
        cy.wait(2000)
        cy.get('#wsf-1-field-61').should("be.visible").select("Mac").should("have.value","Mac")
    })

    it("Select dos", () => {
        cy.visit("https://www.google.com.ar/")
        cy.title().should("eq","Google")
        cy.wait(1500)

        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        
    })

    it.only("Opción Multi-select", () => {
        cy.visit("https://computer-database.gatling.io/computers/new")
        cy.title().should("eq","Computers database")
        cy.wait(1500)
        
        cy.get("#company").should("be.visible").select(3).then(()=>{
            cy.get("[type='submit']").should("be.visible").click()
        })

    })
   
})//Cierre de describe