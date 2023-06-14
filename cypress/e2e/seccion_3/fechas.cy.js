/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

describe("Campos de tipo fecha", () =>{

    it("Fecha uno", () => {
        let tiempo = 1500
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        //Cualquier fecha
        // cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("31/12/2021").then(()=>{
         //cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("{esc}")
        //})

        //Fecha de hoy
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").click()
        cy.get('.today').first().click({force:true})

    })

    it("Fecha dos", () => {
        let tiempo = 1500
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        cy.get('[placeholder="Start date"]').should("be.visible").type("09/12/2021 {esc}")

        cy.wait(tiempo)
        cy.get('[placeholder="End date"]').should("be.visible").type("01/06/2023 {esc}")

    })

    it.only("Fecha tres", () => {
        let tiempo = 1500
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        cy.get('[placeholder="Start date"]').should("be.visible").type("09/12/2021 {esc}").tab().type("01/06/2023 {esc}")

        

    })
   
})//Cierre de describe