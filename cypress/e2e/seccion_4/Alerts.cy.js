/// <reference types="cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Alertas en Cypress", () =>{

    it("Alerta Uno", ()=> {

        cy.visit('https://demo.seleniumeasy.com/bootstrap-modal-demo.html')
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(1000)

        cy.xpath("//a[@href='#myModal0']").click()

        //cy.on("window:alert", (str)=>{
          //  expect(str).to.equal()
        //})

        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({force:true})
        cy.wait(1000)
        cy.xpath("//a[@href='#myModal0']").click()
        cy.wait(1000)
        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({force:true})
        cy.wait(1000)
        cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click({force:true})

    })

    
   
})//Cierre de describe